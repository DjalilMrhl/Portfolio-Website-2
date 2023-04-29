import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Nav from './components/NavBar/Nav';
import Services from './components/Services/Services';
import Work from './components/Work/Work';
import './index.scss';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
