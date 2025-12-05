import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2">Vamos construir algo incrível?</h2>
            <p className="text-slate-400">Estou disponível para freelance e contratos de longo prazo.</p>
          </div>
          <div className="flex gap-4">
            <a href="mailto:contact@example.com" className="px-6 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-200 transition-colors">
              Enviar E-mail
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} DevPortfólio. Desenvolvido com React, Tailwind & Gemini.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;