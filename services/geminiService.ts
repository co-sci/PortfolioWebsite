import { GoogleGenAI, Chat } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Você é o assistente virtual profissional de um Desenvolvedor Full Stack Sênior chamado "Alex".
O Alex é especialista em:
- Backend: Python (Django, FastAPI), arquitetura de microsserviços.
- Banco de Dados: PostgreSQL (otimização, modelagem complexa).
- Frontend: Next.js, React, TypeScript, Tailwind CSS.

Seu objetivo é agir como um pré-recrutador ou assistente comercial.
Responda a perguntas sobre as habilidades do Alex, sua experiência técnica e disponibilidade.
Mantenha as respostas curtas, profissionais e persuasivas (máximo de 3 frases por resposta, a menos que peçam detalhes técnicos).
Se perguntarem sobre preço, diga que depende do escopo e sugira entrar em contato pelo formulário.
`;

export const createChatSession = (): Chat => {
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
};

export const sendMessageToGemini = async (chat: Chat, message: string) => {
  try {
    const response = await chat.sendMessageStream({ message });
    return response;
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    throw error;
  }
};