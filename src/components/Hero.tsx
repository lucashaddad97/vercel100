import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-xl">
              <span className="text-5xl font-bold text-white">P</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Olá, eu sou{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Seu Nome
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
            Desenvolvedor Full Stack
          </p>

          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crio experiências digitais incríveis combinando design elegante com código limpo e eficiente.
            Apaixonado por transformar ideias em realidade através da tecnologia.
          </p>

          <div className="flex gap-4 justify-center mb-16">
            <button
              onClick={() => onNavigate('projetos')}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Ver Projetos
            </button>
            <button
              onClick={() => onNavigate('contato')}
              className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Entre em Contato
            </button>
          </div>

          <div className="flex gap-6 justify-center mb-16">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 text-gray-700 hover:text-blue-600"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 text-gray-700 hover:text-blue-600"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:seu@email.com"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 text-gray-700 hover:text-blue-600"
            >
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={() => onNavigate('sobre')}
            className="animate-bounce text-blue-600"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}
