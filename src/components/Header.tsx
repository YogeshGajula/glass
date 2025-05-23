
import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Switch } from '@/components/ui/switch';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? isDarkMode 
          ? 'bg-gray-900/10 backdrop-blur-md border-b border-gray-700/20' 
          : 'bg-white/10 backdrop-blur-md border-b border-white/20'
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className={`text-2xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            ~/devops
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors duration-300 relative group`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${isDarkMode ? 'bg-blue-400' : 'bg-blue-600'} transition-all duration-300 group-hover:w-full`}></span>
              </a>
            ))}
            <div className="flex items-center gap-2">
              <Sun className={`h-4 w-4 ${isDarkMode ? 'text-gray-500' : 'text-amber-500'}`} />
              <Switch 
                checked={isDarkMode}
                onCheckedChange={toggleDarkMode}
                className="data-[state=checked]:bg-blue-600"
              />
              <Moon className={`h-4 w-4 ${isDarkMode ? 'text-blue-400' : 'text-gray-400'}`} />
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Switch 
                checked={isDarkMode}
                onCheckedChange={toggleDarkMode}
                className="data-[state=checked]:bg-blue-600"
              />
              {isDarkMode ? 
                <Moon className="h-4 w-4 text-blue-400" /> : 
                <Sun className="h-4 w-4 text-amber-500" />
              }
            </div>
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} className={isDarkMode ? 'text-gray-300' : 'text-gray-700'} /> : <Menu size={24} className={isDarkMode ? 'text-gray-300' : 'text-gray-700'} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className={`md:hidden absolute top-full left-0 right-0 ${
            isDarkMode 
              ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-700/20' 
              : 'bg-white/95 backdrop-blur-md border-b border-white/20'
          } py-4`}>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`block px-6 py-3 ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800/50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                } transition-all duration-300`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
