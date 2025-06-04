
const Products = () => {
  const products = [
    {
      name: "Minimal Wool Coat",
      price: "$420",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=800&fit=crop",
    },
    {
      name: "Structured Blazer",
      price: "$280",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=800&fit=crop",
    },
    {
      name: "Cashmere Sweater",
      price: "$320",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=800&fit=crop",
    },
    {
      name: "Silk Dress",
      price: "$380",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=800&fit=crop",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-widest text-gray-900 mb-4">
            FEATURED PIECES
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Handpicked selections from our latest collection, embodying the essence of contemporary elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden aspect-[3/4] mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 px-6 py-2 text-xs font-medium tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gray-900 hover:text-white">
                  QUICK VIEW
                </button>
              </div>
              <h3 className="text-lg font-medium tracking-wide text-gray-900 mb-1">
                {product.name}
              </h3>
              <p className="text-gray-600 tracking-wider font-light">
                {product.price}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-900 text-white px-8 py-3 text-sm font-medium tracking-widest hover:bg-gray-800 transition-colors duration-300">
            VIEW ALL PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
