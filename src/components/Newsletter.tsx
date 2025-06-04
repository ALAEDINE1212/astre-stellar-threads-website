
import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Subtle star field */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-16 w-0.5 h-0.5 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-24 w-1 h-1 bg-white rounded-full animate-pulse delay-200"></div>
        <div className="absolute bottom-24 left-32 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-400"></div>
        <div className="absolute bottom-40 right-16 w-1 h-1 bg-white rounded-full animate-pulse delay-600"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-light tracking-widest text-white mb-6">
          JOIN THE COSMOS
        </h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Subscribe to receive updates from our stellar journey and be the first to discover new collections from the universe.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-6 py-3 bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors duration-300"
            required
          />
          <button
            type="submit"
            className="bg-white text-black px-8 py-3 text-sm font-medium tracking-widest hover:bg-gray-200 transition-colors duration-300"
          >
            SUBSCRIBE
          </button>
        </form>
        
        <p className="text-gray-400 text-sm mt-4">
          Your journey with us remains private. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
