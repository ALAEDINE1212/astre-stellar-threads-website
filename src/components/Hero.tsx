
const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-6xl md:text-8xl font-light tracking-widest text-gray-900 mb-6">
          ASTRE
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto font-light tracking-wide">
          Timeless elegance meets contemporary design
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <button className="w-full sm:w-auto bg-gray-900 text-white px-8 py-3 text-sm font-medium tracking-widest hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105">
            EXPLORE COLLECTION
          </button>
          <button className="w-full sm:w-auto border border-gray-900 text-gray-900 px-8 py-3 text-sm font-medium tracking-widest hover:bg-gray-900 hover:text-white transition-all duration-300">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
