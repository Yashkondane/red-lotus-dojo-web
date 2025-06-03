
import { Trophy, Medal, Award, Star } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const StudentAchievements = () => {
  const achievements = [
    {
      name: 'Priya Sharma',
      achievement: 'National Championship Winner',
      category: 'Youth Division',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80',
      medal: 'gold'
    },
    {
      name: 'Arjun Patel',
      achievement: 'Regional Tournament Champion',
      category: 'Adult Division',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
      medal: 'gold'
    },
    {
      name: 'Kavya Reddy',
      achievement: 'State Championship',
      category: 'Junior Division',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80',
      medal: 'silver'
    },
    {
      name: 'Rohit Singh',
      achievement: 'Black Belt Achievement',
      category: 'Youngest Student',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80',
      medal: 'bronze'
    }
  ];

  const getMedalIcon = (medal: string) => {
    switch (medal) {
      case 'gold': return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 'silver': return <Medal className="w-6 h-6 text-gray-400" />;
      case 'bronze': return <Award className="w-6 h-6 text-orange-600" />;
      default: return <Star className="w-6 h-6 text-martial-red" />;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-4xl md:text-5xl text-martial-red mb-4 tracking-wider animate-fade-in">
            STUDENT ACHIEVEMENTS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Celebrating the incredible accomplishments of our dedicated students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.name}
              className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative mb-4">
                <img
                  src={achievement.image}
                  alt={achievement.name}
                  className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-martial-red"
                />
                <div className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-lg">
                  {getMedalIcon(achievement.medal)}
                </div>
              </div>
              
              <h3 className="font-bebas text-lg text-gray-900 mb-2 tracking-wide">
                {achievement.name}
              </h3>
              <p className="text-martial-red font-semibold text-sm mb-1">
                {achievement.achievement}
              </p>
              <p className="text-gray-600 text-sm mb-1">{achievement.category}</p>
              <p className="text-gray-500 text-xs">{achievement.year}</p>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="bg-martial-red rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="font-bebas text-3xl md:text-4xl text-white mb-2">
                <AnimatedCounter end={30} suffix="+" />
              </div>
              <div className="text-red-100 text-sm uppercase tracking-wide">Tournament Wins</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="font-bebas text-3xl md:text-4xl text-white mb-2">
                <AnimatedCounter end={12} suffix="" />
              </div>
              <div className="text-red-100 text-sm uppercase tracking-wide">National Champions</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="font-bebas text-3xl md:text-4xl text-white mb-2">
                <AnimatedCounter end={150} suffix="+" />
              </div>
              <div className="text-red-100 text-sm uppercase tracking-wide">Black Belts Earned</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
              <div className="font-bebas text-3xl md:text-4xl text-white mb-2">
                <AnimatedCounter end={18} suffix="+" />
              </div>
              <div className="text-red-100 text-sm uppercase tracking-wide">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentAchievements;
