
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="/lovable-uploads/04f1454c-4deb-40c2-9d20-8f08e668075a.png" 
              alt="ASTRE" 
              className="w-8 h-8 mr-3"
            />
            <h1 className="text-2xl font-bold tracking-widest text-white">ASTRE</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#collections" className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200">
                Collections
              </a>
              <a href="#about" className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200">
                About
              </a>
              <a href="#contact" className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>

          {/* Shopping bag and mobile menu button */}
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-gray-300 transition-colors duration-200">
              <ShoppingBag className="h-6 w-6" />
            </button>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black border-t border-gray-800">
              <a href="#collections" className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium tracking-wide">
                Collections
              </a>
              <a href="#about" className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium tracking-wide">
                About
              </a>
              <a href="#contact" className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium tracking-wide">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
