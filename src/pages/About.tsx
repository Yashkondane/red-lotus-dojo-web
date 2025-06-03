
import { Users, Award, Target, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from our training methods to student support.'
    },
    {
      icon: Heart,
      title: 'Respect',
      description: 'Mutual respect forms the foundation of our dojo culture and training philosophy.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We build a supportive community where every student can thrive and achieve their goals.'
    },
    {
      icon: Award,
      title: 'Discipline',
      description: 'Through disciplined practice, we develop both physical skills and mental strength.'
    }
  ];

  const instructors = [
    {
      name: 'Master Chen Li',
      title: 'Head Instructor & Founder',
      experience: '25 years',
      specialty: 'Traditional Karate',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?auto=format&fit=crop&w=300&h=300&q=80'
    },
    {
      name: 'Sensei Maria Santos',
      title: 'Senior Instructor',
      experience: '15 years',
      specialty: 'Youth Programs',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&h=300&q=80'
    },
    {
      name: 'Sensei David Kim',
      title: 'Competition Coach',
      experience: '12 years',
      specialty: 'Tournament Training',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=300&h=300&q=80'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-martial-red to-martial-red-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bebas text-5xl md:text-6xl text-white mb-6 tracking-wider">
            ABOUT US
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Dedicated to preserving traditional martial arts while building character, discipline, and strength in every student.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="font-bebas text-4xl text-martial-red mb-6 tracking-wider">
                OUR STORY
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2009, Elite Martial Arts Academy began as a small dojo with a big vision: 
                to create a place where traditional martial arts could thrive in the modern world. 
                Our founder, Master Chen Li, brought over two decades of experience from training 
                in Japan and Korea to establish this academy.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                What started with just 10 students has grown into a thriving community of over 500 
                martial artists of all ages. We've maintained our commitment to traditional values 
                while embracing modern training methods and safety standards.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we're proud to be recognized as one of the premier martial arts schools 
                in the region, with students competing successfully at national and international 
                levels while embodying the core values of respect, discipline, and perseverance.
              </p>
            </div>
            <div className="animate-slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=600&h=400&q=80"
                alt="Martial Arts Training"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-4xl md:text-5xl text-martial-red mb-4 tracking-wider">
              OUR VALUES
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Elite Martial Arts Academy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-martial-red rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bebas text-xl text-gray-900 mb-3 tracking-wide">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-4xl md:text-5xl text-martial-red mb-4 tracking-wider">
              MEET OUR INSTRUCTORS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from experienced masters who are passionate about sharing their knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <div
                key={instructor.name}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-6">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-martial-red"
                  />
                </div>
                <h3 className="font-bebas text-xl text-gray-900 mb-2 tracking-wide">
                  {instructor.name}
                </h3>
                <p className="text-martial-red font-medium mb-2">{instructor.title}</p>
                <p className="text-gray-600 mb-1">{instructor.experience} Experience</p>
                <p className="text-gray-600">{instructor.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-martial-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="font-bebas text-4xl md:text-5xl text-white mb-2">15+</div>
              <div className="text-red-100 uppercase tracking-wide">Years of Excellence</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="font-bebas text-4xl md:text-5xl text-white mb-2">500+</div>
              <div className="text-red-100 uppercase tracking-wide">Active Students</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="font-bebas text-4xl md:text-5xl text-white mb-2">50+</div>
              <div className="text-red-100 uppercase tracking-wide">Tournament Wins</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
              <div className="font-bebas text-4xl md:text-5xl text-white mb-2">10+</div>
              <div className="text-red-100 uppercase tracking-wide">Expert Instructors</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
