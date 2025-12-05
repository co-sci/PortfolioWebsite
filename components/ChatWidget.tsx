import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { createChatSession, sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Chat, GenerateContentResponse } from "@google/genai";

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Olá! Sou o assistente de IA do portfólio. Pergunte-me sobre as habilidades em Python, Next.js ou experiência com Banco de Dados.'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<Chat | null>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Initialize chat session once
  useEffect(() => {
    if (!chatSessionRef.current) {
        try {
             chatSessionRef.current = createChatSession();
        } catch (e) {
            console.error("Failed to init chat", e);
        }
    }
  }, []);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    const modelMsgId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, { id: modelMsgId, role: 'model', text: '', isLoading: true }]);

    try {
      if (!chatSessionRef.current) {
          // Fallback if env key is missing or init failed
          throw new Error("Chat unavailable. Check API Key.");
      }

      const streamResult = await sendMessageToGemini(chatSessionRef.current, userMsg.text);
      
      let fullText = '';
      
      for await (const chunk of streamResult) {
        const c = chunk as GenerateContentResponse;
        const text = c.text;
        if (text) {
          fullText += text;
          setMessages(prev => 
            prev.map(msg => 
              msg.id === modelMsgId 
                ? { ...msg, text: fullText, isLoading: false } 
                : msg
            )
          );
        }
      }
    } catch (error) {
      setMessages(prev => 
        prev.map(msg => 
          msg.id === modelMsgId 
            ? { ...msg, text: "Desculpe, não consigo me conectar ao serviço de IA no momento. Por favor, utilize o formulário de contato.", isLoading: false } 
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col max-h-[500px] overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-200">
          {/* Header */}
          <div className="p-4 bg-slate-800 border-b border-slate-700 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-blue-600 rounded-lg">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Assistente Virtual</h3>
                <p className="text-xs text-green-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                  Online (Gemini 2.5)
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/95">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none' 
                      : 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700'
                  }`}
                >
                  {msg.text}
                  {msg.isLoading && (
                     <span className="ml-2 inline-block"><Loader2 className="w-3 h-3 animate-spin" /></span>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-3 bg-slate-800 border-t border-slate-700">
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Pergunte sobre Python ou Next.js..."
                className="w-full bg-slate-900 text-white pl-4 pr-12 py-3 rounded-xl text-sm border border-slate-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-slate-500"
              />
              <button 
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-500 disabled:opacity-50 disabled:hover:bg-blue-600 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center gap-2 px-4 py-3 rounded-full shadow-lg transition-all duration-300 ${
            isOpen ? 'bg-slate-700 text-slate-300' : 'bg-blue-600 hover:bg-blue-500 text-white hover:scale-105'
        }`}
      >
        {!isOpen && <span className="text-sm font-semibold pr-1">Falar com IA</span>}
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default ChatWidget;