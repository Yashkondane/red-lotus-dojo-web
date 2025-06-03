
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedCounter from './AnimatedCounter';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-martial-red via-martial-red-dark to-black opacity-90"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rotate-45"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border-2 border-white rotate-12"></div>
        <div className="absolute bottom-32 left-40 w-28 h-28 border-2 border-white -rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 border-2 border-white rotate-45"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="font-bebas text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wider animate-slide-in-right">
            MASTER THE ART
            <br />
            <span className="text-red-300 animate-slide-in-left" style={{ animationDelay: '300ms' }}>OF DISCIPLINE</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '600ms' }}>
            Transform your body, mind, and spirit through traditional martial arts training. 
            Join our elite academy and discover your inner warrior.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '900ms' }}>
            <Link
              to="/contact"
              className="group inline-flex items-center px-8 py-4 bg-white text-martial-red font-bold text-lg rounded-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button className="group inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-md hover:bg-white hover:text-martial-red transition-all duration-300">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </button>
          </div>
          
          {/* Stats with animated counters */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '1200ms' }}>
            <div className="text-center">
              <div className="font-bebas text-3xl md:text-4xl text-white">
                <AnimatedCounter end={750} suffix="+" />
              </div>
              <div className="text-gray-300 text-sm uppercase tracking-wide">Students</div>
            </div>
            <div className="text-center">
              <div className="font-bebas text-3xl md:text-4xl text-white">
                <AnimatedCounter end={18} suffix="+" />
              </div>
              <div className="text-gray-300 text-sm uppercase tracking-wide">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="font-bebas text-3xl md:text-4xl text-white">
                <AnimatedCounter end={15} suffix="+" />
              </div>
              <div className="text-gray-300 text-sm uppercase tracking-wide">Expert Instructors</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
