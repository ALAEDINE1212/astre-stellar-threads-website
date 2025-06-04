
const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Starfield background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-100"></div>
        <div className="absolute top-32 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-200"></div>
        <div className="absolute top-40 right-1/3 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-white rounded-full animate-pulse delay-400"></div>
        <div className="absolute bottom-32 right-10 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-600"></div>
        <div className="absolute top-60 left-1/2 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-700"></div>
      </div>
      
      {/* Central nebula effect */}
      <div className="absolute inset-0 bg-gradient-radial from-gray-900/20 via-transparent to-transparent"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/lovable-uploads/04f1454c-4deb-40c2-9d20-8f08e668075a.png" 
            alt="ASTRE Logo" 
            className="w-32 h-32 mx-auto mb-6"
          />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-light tracking-[0.3em] text-white mb-6">
          ASTRE
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto font-light tracking-wide">
          Where celestial elegance meets earthly sophistication
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <button className="w-full sm:w-auto bg-white text-black px-8 py-3 text-sm font-medium tracking-widest hover:bg-gray-200 transition-colors duration-300 transform hover:scale-105">
            EXPLORE COLLECTION
          </button>
          <button className="w-full sm:w-auto border border-white text-white px-8 py-3 text-sm font-medium tracking-widest hover:bg-white hover:text-black transition-all duration-300">
            DISCOVER MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
