import './App.css';
import Navbar from './Component/Navbar';
import Work from './Component/Work';
import Testimonial from './Component/Testimonial';
import Contact from './Component/Contact';
import Home from './Component/Home'
import About from './Component/About'
import Footer from './Component/Footer';



function App() {
  return (
  
  <div className='home-container'>
     <Navbar/>
     <Home />
     <About />
     
    <Work />
    <Testimonial />
    <Contact />
<Footer/>
   

  </div>
  
  );
}

export default App;
