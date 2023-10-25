import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'
import Footer from './components/footer/footer.tsx';
import Contact from './components/contact/contact.tsx';
import Hero from './components/hero/hero.tsx';
import Header from './components/header/header.tsx';
import Services from './components/services/services.tsx';
import Demo from './components/demo/demo.tsx';
import Product from './components/product/product.tsx'
import './App.css'

function App() {
  

  return (
    
    <div>
      
      <Demo />
      
      <Product />
      <Services />
      <Contact />
      <Footer />
    </div>
  
  )
}

export default App;
