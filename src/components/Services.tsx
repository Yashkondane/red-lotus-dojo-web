
import { Shield, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Karate Training',
      description: 'Traditional Shotokan Karate training focusing on discipline, technique, and character development. Perfect for all ages and skill levels.',
      features: ['Traditional Forms (Kata)', 'Self-Defense Techniques', 'Physical Conditioning', 'Mental Discipline'],
      link: '/karate-training'
    },
    {
      icon: Target,
      title: 'Taekwondo Training',
      description: 'Olympic-style Taekwondo focusing on high kicks, flexibility, and dynamic movements. Build agility and competitive skills.',
      features: ['High Kicks & Footwork', 'Olympic Competition', 'Flexibility Training', 'Board Breaking'],
      link: '/taekwondo-training'
    },
    {
      icon: Users,
      title: 'MMA Training',
      description: 'Complete mixed martial arts training combining striking, grappling, and ground fighting for the ultimate combat experience.',
      features: ['Striking & Boxing', 'Wrestling & Grappling', 'Ground Fighting', 'Fight Conditioning'],
      link: '/mma-training'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-4xl md:text-5xl text-martial-red mb-4 tracking-wider">
            OUR SERVICES
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive martial arts programs designed to transform your body, mind, and spirit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 bg-martial-red rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="font-bebas text-2xl text-gray-900 mb-4 tracking-wide">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-martial-red rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                to={service.link}
                className="block w-full bg-martial-red text-white py-3 rounded-md font-medium hover:bg-martial-red-dark transition-colors text-center"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
