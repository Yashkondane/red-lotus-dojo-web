
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Programs from '@/components/Programs';
import StudentAchievements from '@/components/StudentAchievements';
import Testimonials from '@/components/Testimonials';

const Index = () => {
  return (
    <div className="pt-16">
      <Hero />
      <Services />
      <Programs />
      <StudentAchievements />
      <Testimonials />
    </div>
  );
};

export default Index;
