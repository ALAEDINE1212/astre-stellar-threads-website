
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold tracking-widest text-gray-900 mb-4">ASTRE</h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Timeless elegance meets contemporary design. Creating pieces that transcend trends 
              and celebrate individual style.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium tracking-widest text-gray-900 mb-4 uppercase">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">New Arrivals</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Collections</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Sale</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Gift Cards</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-medium tracking-widest text-gray-900 mb-4 uppercase">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Size Guide</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Shipping</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Returns</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2024 ASTRE. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
