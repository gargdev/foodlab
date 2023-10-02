import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Content1 from './components/Content1';
import Content2 from './components/Content2';
import Contact from "./components/Contact";
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';
function App() {
  return (
    <div className="App">
          {<Navbar/>}
          {<Header/>}
          {<Content1/>}
          {<Content2/>}
          {<Contact/>}
          {<Testimonial/>}
          {<Footer/>}
    </div>  
  );
}

export default App;
