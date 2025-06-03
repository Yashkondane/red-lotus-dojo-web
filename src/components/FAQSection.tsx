
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What age groups do you teach?',
      answer: 'We offer programs for all ages starting from 4 years old. Our Little Warriors program is for ages 4-7, Youth Champions for ages 8-14, and Adult Mastery for ages 15 and up. We also have specialized senior programs for adults over 50.'
    },
    {
      question: 'Do I need any prior experience to start?',
      answer: 'Not at all! Our programs are designed to accommodate complete beginners. We start with basic techniques and gradually build up your skills. Our instructors are experienced in teaching students at all levels.'
    },
    {
      question: 'What should I wear for my first class?',
      answer: 'For your first class, comfortable workout clothes are perfect - a t-shirt and shorts or sweatpants work well. We train barefoot, so no special footwear is needed. Once you decide to continue, we\'ll help you get a proper uniform (gi).'
    },
    {
      question: 'How often should I attend classes?',
      answer: 'We recommend attending 2-3 times per week for optimal progress. However, even once a week will provide benefits. Our flexible scheduling allows you to find a routine that works with your lifestyle.'
    },
    {
      question: 'Is martial arts safe for children?',
      answer: 'Yes, our martial arts programs are very safe when taught properly. We emphasize control, respect, and proper technique. Our instructors are specially trained in youth development and safety protocols. Injuries are extremely rare in our controlled environment.'
    },
    {
      question: 'What styles of martial arts do you teach?',
      answer: 'We primarily teach traditional Karate with influences from other disciplines. Our curriculum includes kata (forms), kumite (sparring), self-defense techniques, and philosophy. We focus on practical applications while maintaining traditional values.'
    },
    {
      question: 'Do you offer trial classes?',
      answer: 'Yes! We offer a free trial class so you can experience our teaching style and facility before making any commitment. This allows you to see if our program is the right fit for you or your child.'
    },
    {
      question: 'How long does it take to earn a black belt?',
      answer: 'The journey to black belt typically takes 4-6 years with consistent training and dedication. However, remember that black belt is not the end goal - it\'s the beginning of your true martial arts journey. Progress varies based on individual commitment and natural ability.'
    },
    {
      question: 'Do you have competition teams?',
      answer: 'Yes, we have active competition teams for those interested in tournament fighting. Participation is optional and based on skill level and interest. Our competition team travels to regional and national tournaments throughout the year.'
    },
    {
      question: 'What are your class prices?',
      answer: 'We offer various membership options to fit different needs and budgets. Our monthly unlimited memberships start at $89 for children and $99 for adults. We also offer family packages and discounts for multiple family members. Contact us for detailed pricing information.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-4xl md:text-5xl text-martial-red mb-4 tracking-wider">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our martial arts programs and training
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
              >
                <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-martial-red flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-martial-red flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-white border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <h3 className="font-bebas text-2xl text-gray-900 mb-4 tracking-wider">
            STILL HAVE QUESTIONS?
          </h3>
          <p className="text-gray-600 mb-6">
            Don't hesitate to reach out! Our friendly staff is here to help you find the perfect program.
          </p>
          <button className="bg-martial-red text-white px-8 py-3 rounded-md font-bold hover:bg-martial-red-dark transition-colors mr-4">
            Contact Us
          </button>
          <button className="border-2 border-martial-red text-martial-red px-8 py-3 rounded-md font-bold hover:bg-martial-red hover:text-white transition-colors">
            Schedule Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
