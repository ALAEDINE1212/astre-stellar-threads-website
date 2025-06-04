
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/04f1454c-4deb-40c2-9d20-8f08e668075a.png" 
                alt="ASTRE" 
                className="w-8 h-8 mr-3"
              />
              <h3 className="text-2xl font-bold tracking-widest text-black">ASTRE</h3>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Where celestial elegance meets earthly sophistication. Creating timeless pieces 
              inspired by the infinite beauty of the cosmos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-black transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium tracking-widest text-black mb-4 uppercase">Collections</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">Stellar Essentials</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">Lunar Classics</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">Cosmic Edge</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">New Arrivals</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-medium tracking-widest text-black mb-4 uppercase">Universe</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">Size Guide</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">Shipping</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">Returns</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2024 ASTRE. All rights reserved across the universe.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-black text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-black text-sm transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
