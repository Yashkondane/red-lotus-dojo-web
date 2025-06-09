
import { Shield, Target, Users, Award, Clock, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const KarateTraining = () => {
  const benefits = [
    { icon: Shield, title: "Self Defense", description: "Learn practical self-defense techniques" },
    { icon: Target, title: "Focus & Discipline", description: "Develop mental concentration and self-control" },
    { icon: Users, title: "Character Building", description: "Build confidence and respect for others" },
    { icon: Award, title: "Physical Fitness", description: "Improve strength, flexibility, and coordination" }
  ];

  const curriculum = [
    "Basic Stances and Movements",
    "Kata (Traditional Forms)",
    "Kumite (Sparring Techniques)",
    "Self-Defense Applications",
    "Breaking Techniques",
    "Meditation and Philosophy"
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-martial-red via-martial-red-dark to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="font-bebas text-5xl md:text-7xl mb-6 tracking-wider">
              KARATE TRAINING
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Master the ancient art of Shotokan Karate with traditional forms, discipline, and character development
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-martial-red font-bold text-lg rounded-md hover:bg-gray-100 transition-all duration-300"
            >
              Start Training Today
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="font-bebas text-4xl text-martial-red mb-6 tracking-wider">
                TRADITIONAL SHOTOKAN KARATE
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Our Karate program follows the traditional Shotokan style, emphasizing strong linear techniques, 
                powerful stances, and disciplined training methods. Students learn not just physical techniques 
                but also the philosophical aspects of martial arts.
              </p>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                From beginners to advanced practitioners, our curriculum is designed to challenge students 
                at every level while maintaining the traditional values of respect, perseverance, and humility.
              </p>
            </div>
            <div className="animate-slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=600&q=80"
                alt="Karate Training"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-4xl text-martial-red mb-4 tracking-wider">
              BENEFITS OF KARATE TRAINING
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-white p-6 rounded-lg shadow-lg text-center animate-scale-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <benefit.icon className="w-12 h-12 text-martial-red mx-auto mb-4" />
                <h3 className="font-bebas text-xl text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-4xl text-martial-red mb-4 tracking-wider">
              CURRICULUM HIGHLIGHTS
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculum.map((item, index) => (
              <div
                key={item}
                className="flex items-center p-4 bg-gray-50 rounded-lg animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Trophy className="w-6 h-6 text-martial-red mr-3" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default KarateTraining;
