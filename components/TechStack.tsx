import React from 'react';
import { Server, Layout, Database, Code, Cloud, Lock } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: "Desenvolvimento Backend",
    description: "APIs RESTful e GraphQL de alta performance utilizando Python (Django/FastAPI). Arquitetura limpa e orientada a eventos.",
    icon: <Server className="w-8 h-8 text-blue-400" />
  },
  {
    id: 2,
    title: "Frontend Moderno",
    description: "Interfaces reativas e otimizadas para SEO com Next.js e React. Experiência de usuário fluida e design responsivo.",
    icon: <Layout className="w-8 h-8 text-cyan-400" />
  },
  {
    id: 3,
    title: "Engenharia de Dados",
    description: "Modelagem de dados avançada, otimização de queries SQL e migrações complexas utilizando PostgreSQL.",
    icon: <Database className="w-8 h-8 text-indigo-400" />
  },
  {
    id: 4,
    title: "Code Quality",
    description: "Código tipado com TypeScript, testes automatizados (PyTest/Jest) e pipelines de CI/CD rigorosos.",
    icon: <Code className="w-8 h-8 text-emerald-400" />
  },
  {
    id: 5,
    title: "DevOps & Cloud",
    description: "Deploy automatizado e gerenciamento de infraestrutura em AWS ou DigitalOcean. Containerização com Docker.",
    icon: <Cloud className="w-8 h-8 text-orange-400" />
  },
  {
    id: 6,
    title: "Segurança Web",
    description: "Implementação de OAuth2, JWT, proteção contra OWASP Top 10 e criptografia de dados sensíveis.",
    icon: <Lock className="w-8 h-8 text-red-400" />
  }
];

const TechStack: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stack & Especialidades</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Uma combinação poderosa de tecnologias para construir o futuro da web.
            Do banco de dados à interface do usuário.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="p-8 bg-slate-800/40 border border-slate-700 rounded-2xl hover:bg-slate-800/60 hover:border-blue-500/30 transition-all group">
              <div className="mb-6 p-4 bg-slate-900 rounded-xl inline-block group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;