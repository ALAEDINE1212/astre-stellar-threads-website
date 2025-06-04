
const Collections = () => {
  const collections = [
    {
      title: "AUTUMN ESSENTIALS",
      description: "Curated pieces for the modern wardrobe",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=1000&fit=crop",
    },
    {
      title: "TIMELESS CLASSICS",
      description: "Sophisticated silhouettes that transcend seasons",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=1000&fit=crop",
    },
    {
      title: "CONTEMPORARY EDGE",
      description: "Bold designs for the fashion-forward",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=1000&fit=crop",
    },
  ];

  return (
    <section id="collections" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-widest text-gray-900 mb-4">
            COLLECTIONS
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our carefully curated collections, each telling a unique story of style and sophistication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
            >
              <div className="relative overflow-hidden aspect-[3/4] mb-6">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-medium tracking-widest text-gray-900 mb-2">
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
