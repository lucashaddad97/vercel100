import { Code2, Palette, Rocket, Users } from 'lucide-react';

export default function About() {
  const skills = [
    {
      icon: Code2,
      title: 'Desenvolvimento',
      description: 'Experiência em tecnologias modernas como React, TypeScript, Node.js e muito mais.',
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Criação de interfaces intuitivas e atraentes com foco na experiência do usuário.',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Otimização e melhores práticas para aplicações rápidas e eficientes.',
    },
    {
      icon: Users,
      title: 'Colaboração',
      description: 'Trabalho em equipe e comunicação clara para entregar os melhores resultados.',
    },
  ];

  const technologies = [
    'React', 'TypeScript', 'Node.js', 'Tailwind CSS',
    'JavaScript', 'HTML/CSS', 'Git', 'Supabase',
  ];

  return (
    <section id="sobre" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sobre Mim
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Sou um desenvolvedor apaixonado por criar soluções digitais que fazem a diferença.
              Com experiência em desenvolvimento web full stack, transformo ideias em aplicações
              funcionais e elegantes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Minha jornada na programação começou com curiosidade e evoluiu para uma paixão
              por resolver problemas complexos através do código. Estou sempre aprendendo novas
              tecnologias e aprimorando minhas habilidades!.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Quando não estou codificando, gosto de contribuir com a comunidade open source,
              explorar novas tecnologias e compartilhar conhecimento com outros desenvolvedores.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Tecnologias</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 rounded-lg font-medium border border-blue-200 hover:border-blue-400 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{skill.title}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
