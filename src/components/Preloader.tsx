
import { useEffect, useState } from 'react';
import { Shield } from 'lucide-react';

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="relative mb-6">
          <Shield className="w-16 h-16 mx-auto text-martial-red animate-spin-slow" />
          <div className="absolute inset-0 w-16 h-16 mx-auto border-4 border-martial-red border-t-transparent rounded-full animate-spin"></div>
        </div>
        <h2 className="text-2xl font-bebas text-martial-red tracking-wider">
          ELITE MARTIAL ARTS
        </h2>
        <div className="mt-4 flex justify-center space-x-1">
          <div className="w-2 h-2 bg-martial-red rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-martial-red rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-martial-red rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
