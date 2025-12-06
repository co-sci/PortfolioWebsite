import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

const projectList: Project[] = [
  {
    id: 1,
    title: "E-commerce SaaS Platform",
    description: "Plataforma multi-tenant completa desenvolvida com Django DRF e Next.js. Inclui pagamentos via Stripe e dashboard analítico em tempo real.",
    tags: ["Python", "Django", "Next.js", "PostgreSQL"],
    image: "https://picsum.photos/800/600?random=1",
    github: "#",
    link: "#"
  },
  {
    id: 2,
    title: "Financial Dashboard AI",
    description: "Aplicação para análise financeira que utiliza algoritmos preditivos em Python processando dados do PostgreSQL, visualizados em React.",
    tags: ["FastAPI", "Pandas", "React", "Recharts"],
    image: "https://picsum.photos/800/600?random=2",
    github: "#",
    link: "#"
  },
  {
    id: 3,
    title: "Real-time Chat System",
    description: "Sistema de chat escalável utilizando WebSockets, Redis e PostgreSQL para persistência. Interface moderna com Tailwind.",
    tags: ["Node.js", "Socket.io", "Redis", "TypeScript"],
    image: "https://picsum.photos/800/600?random=3",
    github: "#",
    link: "#"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Projetos Selecionados</h2>
            <p className="text-slate-400">Exemplos práticos de código limpo e arquitetura sólida.</p>
          </div> 
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projectList.map((project) => (
            <div key={project.id} className="group rounded-xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button className="p-2 bg-white rounded-full text-slate-900 hover:bg-blue-400 transition-colors" title="View Code">
                    <Github className="w-5 h-5" />
                  </button>
                  <button className="p-2 bg-white rounded-full text-slate-900 hover:bg-blue-400 transition-colors" title="Live Demo">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 h-20 overflow-hidden">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div> 
      </div>
    </section>
  );
};

export default Projects;