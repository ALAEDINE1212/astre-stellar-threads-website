
import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
    // Here you would typically send the email to your backend
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light tracking-widest text-white mb-6">
          STAY INFORMED
        </h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Be the first to discover our latest collections, exclusive pieces, and behind-the-scenes stories.
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
            className="bg-white text-gray-900 px-8 py-3 text-sm font-medium tracking-widest hover:bg-gray-100 transition-colors duration-300"
          >
            SUBSCRIBE
          </button>
        </form>
        
        <p className="text-gray-400 text-sm mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
