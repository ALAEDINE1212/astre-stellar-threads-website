
const Collections = () => {
  const collections = [
    {
      title: "STELLAR ESSENTIALS",
      description: "Minimalist pieces inspired by cosmic void",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=1000&fit=crop",
    },
    {
      title: "LUNAR CLASSICS",
      description: "Timeless silhouettes reflecting celestial beauty",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=1000&fit=crop",
    },
    {
      title: "COSMIC EDGE",
      description: "Bold designs from distant galaxies",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=1000&fit=crop",
    },
  ];

  return (
    <section id="collections" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-widest text-black mb-4">
            COLLECTIONS
          </h2>
          <p className="text-gray-800 text-lg max-w-2xl mx-auto">
            Journey through our celestial collections, each inspired by the infinite beauty of the cosmos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
            >
              <div className="relative overflow-hidden aspect-[3/4] mb-6 border border-gray-200">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-medium tracking-widest text-black mb-2">
                {collection.title}
              </h3>
              <p className="text-gray-600 text-sm tracking-wide">
                {collection.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
