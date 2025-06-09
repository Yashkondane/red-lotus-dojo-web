
import { useState } from 'react';
import { Clock, Users, Trophy, Star } from 'lucide-react';
import EnrollmentDialog from './EnrollmentDialog';

const Programs = () => {
  const [enrollmentOpen, setEnrollmentOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('');

  const programs = [
    {
      title: 'Little Warriors',
      age: 'Ages 4-7',
      duration: '45 mins',
      students: '8 max',
      level: 'Beginner',
      description: 'Fun and engaging introduction to martial arts for young children.',
      price: '₹6,000/month',
      image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Youth Champions',
      age: 'Ages 8-14',
      duration: '60 mins',
      students: '12 max',
      level: 'All Levels',
      description: 'Character building and martial arts skills for young teens.',
      price: '₹8,000/month',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Adult Mastery',
      age: 'Ages 15+',
      duration: '75 mins',
      students: '15 max',
      level: 'All Levels',
      description: 'Comprehensive martial arts training for adults of all skill levels.',
      price: '₹10,000/month',
      image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Elite Competition',
      age: 'All Ages',
      duration: '90 mins',
      students: '8 max',
      level: 'Advanced',
      description: 'Advanced training for competitive martial artists.',
      price: '₹12,000/month',
      image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=500&q=80'
    }
  ];

  const handleEnrollClick = (programTitle: string) => {
    setSelectedProgram(programTitle);
    setEnrollmentOpen(true);
  };

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-4xl md:text-5xl text-martial-red mb-4 tracking-wider">
              TRAINING PROGRAMS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our carefully structured programs designed for different age groups and skill levels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <div
                key={program.title}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-martial-red text-white px-3 py-1 rounded-full text-sm font-medium">
                    {program.level}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bebas text-xl text-gray-900 mb-2 tracking-wide">
                    {program.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {program.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-700 text-sm">
                      <Users className="w-4 h-4 mr-2 text-martial-red" />
                      {program.age}
                    </div>
                    <div className="flex items-center text-gray-700 text-sm">
                      <Clock className="w-4 h-4 mr-2 text-martial-red" />
                      {program.duration}
                    </div>
                    <div className="flex items-center text-gray-700 text-sm">
                      <Trophy className="w-4 h-4 mr-2 text-martial-red" />
                      {program.students}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-martial-red">
                      {program.price}
                    </span>
                    <button 
                      onClick={() => handleEnrollClick(program.title)}
                      className="bg-martial-red text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-martial-red-dark transition-colors"
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EnrollmentDialog
        isOpen={enrollmentOpen}
        onClose={() => setEnrollmentOpen(false)}
        programName={selectedProgram}
      />
    </>
  );
};

export default Programs;
