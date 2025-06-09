
import { Zap, Target, Users, Award, Clock, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const TaekwondoTraining = () => {
  const benefits = [
    { icon: Zap, title: "High Kicks & Agility", description: "Master spectacular high kicks and footwork" },
    { icon: Target, title: "Olympic Sport", description: "Train in the official Olympic martial art" },
    { icon: Users, title: "Flexibility", description: "Develop exceptional flexibility and balance" },
    { icon: Award, title: "Competition Ready", description: "Prepare for tournaments and competitions" }
  ];

  const curriculum = [
    "Basic Kicks and Stances",
    "Poomsae (Forms)",
    "Sparring Techniques",
    "Board Breaking",
    "Olympic Style Competition",
    "Self-Defense Applications"
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-martial-red via-martial-red-dark to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="font-bebas text-5xl md:text-7xl mb-6 tracking-wider">
              TAEKWONDO TRAINING
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Master the art of high kicks and dynamic movements in this Olympic martial art
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
                OLYMPIC TAEKWONDO
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Taekwondo is a Korean martial art known for its emphasis on head-height kicks, 
                jumping and spinning kicks, and fast kicking techniques. As an Olympic sport, 
                it combines traditional martial arts with modern competitive elements.
              </p>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Our program focuses on developing flexibility, balance, and explosive power while 
                maintaining the philosophical foundations of courtesy, integrity, perseverance, 
                self-control, and indomitable spirit.
              </p>
            </div>
            <div className="animate-slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80"
                alt="Taekwondo Training"
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
              BENEFITS OF TAEKWONDO
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

export default TaekwondoTraining;
