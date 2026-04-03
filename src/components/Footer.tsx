import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Portfólio
            </h3>
            <p className="text-gray-400">
              Desenvolvedor apaixonado por criar soluções digitais inovadoras e impactantes.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#projetos" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all transform hover:-translate-y-1"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all transform hover:-translate-y-1"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:seu@email.com"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all transform hover:-translate-y-1"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            Feito com <Heart size={16} className="text-red-500 fill-current" /> em {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
