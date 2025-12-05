import React from 'react';
import { Terminal, Database, Layout } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-sm text-blue-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Disponível para novos projetos
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
            Engenharia Web <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-cyan-400">
              Full Stack
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-lg">
            Transformo ideias complexas em aplicações web escaláveis. Especialista em arquitetura robusta com Python, integridade de dados com PostgreSQL e interfaces modernas com Next.js.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all shadow-lg shadow-blue-600/25 text-center">
              Iniciar Projeto
            </a>
            <a href="#projects" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-lg border border-slate-700 transition-all text-center">
              Ver Portfólio
            </a>
          </div>

          <div className="pt-8 flex items-center gap-8 text-slate-500">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-yellow-400" />
              <span>Python Backend</span>
            </div>
            <div className="flex items-center gap-2">
              <Database className="w-5 h-5 text-blue-400" />
              <span>PostgreSQL</span>
            </div>
            <div className="flex items-center gap-2">
              <Layout className="w-5 h-5 text-white" />
              <span>Next.js Frontend</span>
            </div>
          </div>
        </div>

        <div className="hidden md:block relative">
            <div className="relative z-10 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-6 font-mono text-sm leading-relaxed overflow-hidden">
                <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-slate-300">
                    <p><span className="text-purple-400">from</span> fastapi <span className="text-purple-400">import</span> FastAPI</p>
                    <p><span className="text-purple-400">from</span> typing <span className="text-purple-400">import</span> List</p>
                    <br/>
                    <p><span className="text-blue-400">app</span> = FastAPI()</p>
                    <br/>
                    <p><span className="text-yellow-400">@app.get</span>(<span className="text-green-400">"/solutions"</span>)</p>
                    <p><span className="text-purple-400">async def</span> <span className="text-blue-300">build_scalable_app</span>():</p>
                    <p className="pl-4">stack = [</p>
                    <p className="pl-8 text-green-300">"Next.js 14",</p>
                    <p className="pl-8 text-green-300">"Python 3.12",</p>
                    <p className="pl-8 text-green-300">"PostgreSQL",</p>
                    <p className="pl-8 text-green-300">"Tailwind CSS"</p>
                    <p className="pl-4">]</p>
                    <p className="pl-4"><span className="text-purple-400">return</span> {"{"} <span className="text-green-300">"status"</span>: <span className="text-green-300">"delivered_with_excellence"</span>, <span className="text-green-300">"stack"</span>: stack {"}"}</p>
                </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-2xl -z-10 transform translate-y-4 translate-x-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;