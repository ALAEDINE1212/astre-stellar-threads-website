
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Collections from '../components/Collections';
import About from '../components/About';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Collections />
      <About />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
