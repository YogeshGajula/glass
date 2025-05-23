
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <footer className={`${isDarkMode ? 'bg-gray-950' : 'bg-gray-900'} text-white py-12 relative z-10`}>
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4 text-blue-400">~/devops</div>
          <p className="text-gray-400 mb-6">
            Building the future of infrastructure, one deployment at a time.
          </p>
          <div className={`border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-700'} pt-6`}>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} DevOps Engineer Portfolio. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
