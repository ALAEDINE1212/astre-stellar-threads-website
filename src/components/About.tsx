
const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light tracking-widest text-gray-900 mb-8">
              ABOUT ASTRE
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Born from a passion for timeless design and impeccable craftsmanship, ASTRE represents 
                the intersection of contemporary fashion and enduring elegance.
              </p>
              <p>
                Our philosophy centers on creating pieces that transcend fleeting trends, focusing instead 
                on quality materials, thoughtful construction, and designs that speak to the modern individual 
                who values both style and substance.
              </p>
              <p>
                Each garment in our collection is carefully considered, from initial concept to final stitch, 
                ensuring that every piece not only looks exceptional but feels extraordinary to wear.
              </p>
            </div>
            <button className="mt-8 border border-gray-900 text-gray-900 px-8 py-3 text-sm font-medium tracking-widest hover:bg-gray-900 hover:text-white transition-all duration-300">
              OUR STORY
            </button>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=1000&fit=crop"
              alt="ASTRE brand story"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
