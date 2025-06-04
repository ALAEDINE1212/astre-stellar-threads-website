
const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light tracking-widest text-white mb-8">
              ABOUT ASTRE
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Born from the infinite expanse of the cosmos, ASTRE represents the perfect 
                harmony between celestial wonder and terrestrial elegance.
              </p>
              <p>
                Our philosophy draws inspiration from the vast universe above, creating pieces 
                that capture the timeless beauty of stars, planets, and distant galaxies while 
                remaining grounded in contemporary sophistication.
              </p>
              <p>
                Each garment is crafted with the precision of cosmic clockwork, ensuring that 
                every stitch reflects the mathematical perfection found in nature's most 
                extraordinary phenomena.
              </p>
            </div>
            <button className="mt-8 border border-white text-white px-8 py-3 text-sm font-medium tracking-widest hover:bg-white hover:text-black transition-all duration-300">
              OUR UNIVERSE
            </button>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=1000&fit=crop"
              alt="Cosmic inspiration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
