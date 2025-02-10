import React from 'react';
import { Stethoscope, Microscope, Brain, Heart, Activity, Syringe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Stethoscope className="h-8 w-8" />,
      title: 'General Medicine',
      description: 'Comprehensive medical care for all your health needs'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Cardiology',
      description: 'Expert care for heart and cardiovascular conditions'
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'Neurology',
      description: 'Specialized treatment for neurological disorders'
    },
    {
      icon: <Microscope className="h-8 w-8" />,
      title: 'Laboratory',
      description: 'Advanced diagnostic and testing facilities'
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: 'Emergency Care',
      description: '24/7 emergency medical services'
    },
    {
      icon: <Syringe className="h-8 w-8" />,
      title: 'Surgery',
      description: 'State-of-the-art surgical procedures'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600">Comprehensive healthcare solutions for every need</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;