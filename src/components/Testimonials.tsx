
import { Star, Quote } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Parent',
      content: 'My daughter has been training here for 2 years and the transformation is incredible. Not only has she learned self-defense, but her confidence and discipline have improved dramatically.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b830?auto=format&fit=crop&w=150&h=150&q=80'
    },
    {
      name: 'Mike Chen',
      role: 'Adult Student',
      content: 'As an adult beginner, I was nervous about starting martial arts. The instructors here are patient, knowledgeable, and make every class enjoyable. Best decision I ever made.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Competitive Fighter',
      content: 'The competition team training here is world-class. I have won multiple tournaments thanks to the excellent coaching and supportive community at Elite Martial Arts.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80'
    },
    {
      name: 'David Park',
      role: 'Youth Student',
      content: 'Training here has helped me focus better in school and made me more confident. The instructors are awesome and make learning fun!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-4xl md:text-5xl text-martial-red mb-4 tracking-wider">
            STUDENT TESTIMONIALS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our students and their families about their transformative journey with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in relative"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Quote className="absolute top-4 right-4 w-6 h-6 text-martial-red opacity-20" />
              
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed text-sm">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-8 text-gray-600">
            <div className="text-center">
              <div className="font-bebas text-3xl text-martial-red">
                <AnimatedCounter end={4.9} suffix="/5" prefix="" />
              </div>
              <div className="text-sm">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="font-bebas text-3xl text-martial-red">
                <AnimatedCounter end={200} suffix="+" />
              </div>
              <div className="text-sm">Happy Reviews</div>
            </div>
            <div className="text-center">
              <div className="font-bebas text-3xl text-martial-red">
                <AnimatedCounter end={98} suffix="%" />
              </div>
              <div className="text-sm">Student Retention</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
