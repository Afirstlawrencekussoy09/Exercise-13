import logo from './logo.svg';
import './Assets/style.css';
import Header from './Component/Header';
import Hero from './Component/Section/Hero';
import Clients from './Component/Section/Clients';
import Features from './Component/Section/Features';
import Pricing from './Component/Section/Pricing';
import Footer from './Component/Footer';
function App() {
  return (
<div className="body-wrap">
    <Header/>
  <main className="site-content">
    <Hero/>
    <Clients/>
    <Features/>
    <Pricing/>
  </main>
    <Footer/>
</div>

  );
}

export default App;
