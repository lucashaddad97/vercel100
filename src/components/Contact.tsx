import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitStatus('success');
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setSubmitStatus(null), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'lucashaddad.97@hotmail.com',
      link: 'mailto:seu@email.com',
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: '+55 (24) 98808-9834',
      link: 'tel:+5511999999999',
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'São Paulo, Brasil',
      link: null,
    },
  ];

  return (
    <section id="contato" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tem um projeto em mente ou quer colaborar? Adoraria ouvir de você!
          </p>
          {contactInfo.map((info) => {
            const Icon = info.icon;
            const content = (
              <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">{info.label}</p>
                  <p className="text-lg font-medium text-gray-900">{info.value}</p>
                </div>
              </div>
            );

            return info.link ? (
              <a key={info.label} href={info.link} className="block">
                {content}
              </a>
            ) : (
              <div key={info.label}>{content}</div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                const content = (
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{info.label}</p>
                      <p className="text-lg font-medium text-gray-900">{info.value}</p>
                    </div>
                  </div>
                );

                return info.link ? (
                  <a key={info.label} href={info.link} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={info.label}>{content}</div>
                );
              })}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
