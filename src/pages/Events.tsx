
import { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Filter } from 'lucide-react';

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const events = [
    {
      id: 1,
      title: 'Summer Training Camp',
      date: '2024-07-15',
      time: '9:00 AM - 5:00 PM',
      location: 'Elite Martial Arts Academy',
      category: 'Training',
      participants: '30 spots available',
      description: 'Intensive week-long training camp for all skill levels. Includes workshops, sparring, and special guest instructors.',
      price: '$299',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?auto=format&fit=crop&w=400&h=250&q=80'
    },
    {
      id: 2,
      title: 'Regional Championship Tournament',
      date: '2024-08-20',
      time: '8:00 AM - 6:00 PM',
      location: 'City Sports Complex',
      category: 'Competition',
      participants: 'Open registration',
      description: 'Annual regional tournament featuring multiple divisions and age groups. Compete against the best in the region.',
      price: '$50',
      image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=400&h=250&q=80'
    },
    {
      id: 3,
      title: 'Black Belt Testing',
      date: '2024-09-10',
      time: '10:00 AM - 4:00 PM',
      location: 'Elite Martial Arts Academy',
      category: 'Testing',
      participants: 'By invitation only',
      description: 'Quarterly black belt examination for eligible students. Rigorous testing of technique, forms, and philosophy.',
      price: '$150',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&h=250&q=80'
    },
    {
      id: 4,
      title: 'Self-Defense Workshop for Women',
      date: '2024-06-25',
      time: '7:00 PM - 9:00 PM',
      location: 'Elite Martial Arts Academy',
      category: 'Workshop',
      participants: '20 spots available',
      description: 'Learn practical self-defense techniques in a supportive environment. Perfect for beginners.',
      price: 'Free',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=250&q=80'
    },
    {
      id: 5,
      title: 'Kids Martial Arts Demo Day',
      date: '2024-07-05',
      time: '4:00 PM - 6:00 PM',
      location: 'Elite Martial Arts Academy',
      category: 'Demo',
      participants: 'Open to families',
      description: 'Free demonstration classes for children ages 4-12. Let your kids try martial arts in a fun, safe environment.',
      price: 'Free',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&h=250&q=80'
    },
    {
      id: 6,
      title: 'Masters Seminar with Grandmaster Tanaka',
      date: '2024-10-15',
      time: '2:00 PM - 6:00 PM',
      location: 'Elite Martial Arts Academy',
      category: 'Seminar',
      participants: '50 spots available',
      description: 'Exclusive seminar with internationally renowned Grandmaster Tanaka. Advanced techniques and philosophy.',
      price: '$125',
      image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=400&h=250&q=80'
    }
  ];

  const categories = ['All', 'Training', 'Competition', 'Testing', 'Workshop', 'Demo', 'Seminar'];

  const filteredEvents = selectedCategory === 'All' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors = {
      'Training': 'bg-blue-100 text-blue-800',
      'Competition': 'bg-red-100 text-red-800',
      'Testing': 'bg-purple-100 text-purple-800',
      'Workshop': 'bg-green-100 text-green-800',
      'Demo': 'bg-yellow-100 text-yellow-800',
      'Seminar': 'bg-indigo-100 text-indigo-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-martial-red to-martial-red-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bebas text-5xl md:text-6xl text-white mb-6 tracking-wider">
            EVENTS CALENDAR
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Join us for exciting events, competitions, workshops, and training opportunities
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center">
              <Filter className="w-5 h-5 mr-2 text-gray-600" />
              <span className="text-gray-600 font-medium">Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-martial-red text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
                      {event.category}
                    </span>
                    <span className="text-lg font-bold text-martial-red">{event.price}</span>
                  </div>
                  
                  <h3 className="font-bebas text-xl text-gray-900 mb-3 tracking-wide">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      {event.participants}
                    </div>
                  </div>
                  
                  <button className="w-full bg-martial-red text-white py-2 px-4 rounded-md font-medium hover:bg-martial-red-dark transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-martial-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bebas text-3xl md:text-4xl text-white mb-4 tracking-wider">
            DON'T MISS OUT!
          </h2>
          <p className="text-red-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to stay updated on upcoming events and special workshops.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-md text-gray-900"
            />
            <button className="w-full sm:w-auto bg-white text-martial-red px-6 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
