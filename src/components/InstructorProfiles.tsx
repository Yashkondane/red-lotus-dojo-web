
import { Award, Calendar, MapPin, Star } from 'lucide-react';

const InstructorProfiles = () => {
  const instructors = [
    {
      name: 'Master Chen Li',
      title: 'Head Instructor & Founder',
      rank: '8th Dan Black Belt',
      experience: '25 years',
      specialties: ['Traditional Karate', 'Self Defense', 'Competition Training'],
      bio: 'Master Chen Li founded Elite Martial Arts Academy in 2009 after training for over two decades in Japan and Korea. His dedication to traditional martial arts philosophy combined with modern training methods has helped shape thousands of students.',
      achievements: [
        'World Championship Gold Medalist',
        'International Karate Federation Certified',
        'Published author on martial arts philosophy'
      ],
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?auto=format&fit=crop&w=300&h=300&q=80',
      schedule: 'Mon, Wed, Fri - Evening Classes'
    },
    {
      name: 'Sensei Maria Santos',
      title: 'Senior Instructor',
      rank: '5th Dan Black Belt',
      experience: '15 years',
      specialties: ['Youth Programs', 'Kata', 'Women\'s Self Defense'],
      bio: 'Sensei Maria specializes in youth development and has created our highly successful children\'s programs. Her patient teaching style and enthusiasm make her a favorite among students and parents alike.',
      achievements: [
        'National Youth Development Award',
        'Certified Youth Martial Arts Instructor',
        'Regional Kata Champion'
      ],
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&h=300&q=80',
      schedule: 'Tue, Thu, Sat - Youth Classes'
    },
    {
      name: 'Sensei David Kim',
      title: 'Competition Coach',
      rank: '4th Dan Black Belt',
      experience: '12 years',
      specialties: ['Tournament Training', 'Sparring', 'Athletic Conditioning'],
      bio: 'Sensei David leads our competition team and has coached numerous students to regional and national victories. His focus on strategic fighting and athletic performance brings out the best in competitive students.',
      achievements: [
        'Olympic Team Training Experience',
        'National Coach Certification',
        'Multiple Tournament Champion'
      ],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=300&h=300&q=80',
      schedule: 'Mon, Wed, Fri - Competition Team'
    },
    {
      name: 'Sensei Lisa Chang',
      title: 'Forms & Philosophy Instructor',
      rank: '3rd Dan Black Belt',
      experience: '10 years',
      specialties: ['Traditional Forms', 'Meditation', 'Martial Arts Philosophy'],
      bio: 'Sensei Lisa brings a deep understanding of martial arts philosophy to our academy. Her classes focus on the mental and spiritual aspects of training, helping students develop inner strength and discipline.',
      achievements: [
        'Philosophy in Martial Arts Degree',
        'International Forms Champion',
        'Certified Meditation Instructor'
      ],
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b830?auto=format&fit=crop&w=300&h=300&q=80',
      schedule: 'Tue, Thu - Advanced Classes'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-4xl md:text-5xl text-martial-red mb-4 tracking-wider">
            INSTRUCTOR PROFILES
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our experienced and dedicated instructors who are passionate about sharing their martial arts knowledge
          </p>
        </div>

        <div className="space-y-12">
          {instructors.map((instructor, index) => (
            <div
              key={instructor.name}
              className={`flex flex-col lg:flex-row items-center gap-8 animate-fade-in ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Instructor Image */}
              <div className="lg:w-1/3">
                <div className="relative">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover mx-auto border-8 border-white shadow-xl"
                  />
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-martial-red text-white px-4 py-2 rounded-full font-semibold text-sm">
                    {instructor.rank}
                  </div>
                </div>
              </div>

              {/* Instructor Details */}
              <div className="lg:w-2/3 text-center lg:text-left">
                <h3 className="font-bebas text-3xl text-gray-900 mb-2 tracking-wider">
                  {instructor.name}
                </h3>
                <p className="text-martial-red font-semibold text-lg mb-4">{instructor.title}</p>
                
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {instructor.experience} experience
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {instructor.schedule}
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {instructor.bio}
                </p>

                {/* Specialties */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Specialties:</h4>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                    {instructor.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="bg-martial-red text-white px-3 py-1 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center justify-center lg:justify-start">
                    <Award className="w-4 h-4 mr-2" />
                    Key Achievements:
                  </h4>
                  <ul className="space-y-1">
                    {instructor.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-center justify-center lg:justify-start text-gray-600">
                        <Star className="w-3 h-3 mr-2 text-martial-red flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorProfiles;
