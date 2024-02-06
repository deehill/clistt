import { Clients, CTA, Features, Footer, Hero, Navbar, Product, Stats } from './components';

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className="px-6 sm:px-16 flex justify-center items-center">
      <div className="box-width">
        <Navbar />
      </div>
    </div>

    <div className="bg-primary flex justify-center items-start">
      <div className="box-width">
        <Hero />
      </div>
    </div>

    <div className="bg-primary flex justify-center items-center sm:px-16 px-6">
      <div className="box-width">
        <Stats />
        <Features />
        <Product />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
