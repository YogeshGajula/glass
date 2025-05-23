
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import ParticleBackground from "../components/ParticleBackground";

const NotFound = () => {
  const location = useLocation();
  const { isDarkMode } = useTheme();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className={`min-h-screen flex items-center justify-center relative ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
    }`}>
      <ParticleBackground isDarkMode={isDarkMode} />
      <div className="text-center z-10">
        <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>404</h1>
        <p className={`text-xl mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Oops! Page not found</p>
        <a href="/" className={`text-blue-500 hover:${isDarkMode ? 'text-blue-400' : 'text-blue-700'} underline`}>
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
