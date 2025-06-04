
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold tracking-widest text-gray-900">ASTRE</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#collections" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200">
                Collections
              </a>
              <a href="#about" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200">
                About
              </a>
              <a href="#contact" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>

          {/* Shopping bag and mobile menu button */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-900 hover:text-gray-600 transition-colors duration-200">
              <ShoppingBag className="h-6 w-6" />
            </button>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900 hover:text-gray-600 transition-colors duration-200"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              <a href="#collections" className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium tracking-wide">
                Collections
              </a>
              <a href="#about" className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium tracking-wide">
                About
              </a>
              <a href="#contact" className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium tracking-wide">
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
