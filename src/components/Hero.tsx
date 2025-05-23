
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-blue-50 via-white to-blue-100'
    }`}>
      {/* Neural Network Background */}
      <ParticleBackground isDarkMode={isDarkMode} />

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
            <span className={isDarkMode ? 'text-blue-400' : 'text-blue-600'}>DevOps</span>{' '}
            <span className={isDarkMode ? 'text-gray-100' : 'text-gray-800'}>Engineer</span>
          </h1>
          
          <p className={`text-xl md:text-2xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}>
            Specializing in Linux environments, automation, CI/CD pipelines, and cloud infrastructure
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button className={`px-8 py-4 ${
              isDarkMode 
                ? 'bg-blue-600 hover:bg-blue-700' 
                : 'bg-blue-600 hover:bg-blue-700'
              } text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2`}>
              Learn More
              <ChevronDown size={20} />
            </button>
            <button className={`px-8 py-4 border-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
              isDarkMode 
                ? 'border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400' 
                : 'border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'
            }`}>
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className={isDarkMode ? 'text-gray-500' : 'text-gray-400'} size={32} />
      </div>
    </section>
  );
};

export default Hero;
