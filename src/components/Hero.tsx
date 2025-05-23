
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white shadow-2xl">
            <img
              src="/lovable-uploads/63987078-4b71-49a7-afed-1138487dfd34.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-6xl md:text-8xl font-bold">
            <span className="text-blue-600">DevOps</span>{' '}
            <span className="text-gray-800">Engineer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Specializing in Linux environments, automation, CI/CD pipelines, and cloud infrastructure
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
              Learn More
              <ChevronDown size={20} />
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gray-400" size={32} />
      </div>
    </section>
  );
};

export default Hero;
