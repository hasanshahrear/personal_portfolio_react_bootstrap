import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {NavBar, Hero, About, Services, Portfolio, Contact, Footer} from './components'

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
