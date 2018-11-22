import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from "./component/Navigation";
import Header from "./component/Header";
import Belief from "./component/Belief";
import Services from "./component/Services";
import About from "./component/About";
import Team from "./component/Team";
import Clients from "./component/Clients";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import ServicesModal from "./component/ServicesModal";

class App extends Component {
  render() {
    return (
      <div id="page-top">
      <Navigation />
      <Header />
      <Belief />
      <Services />
      <Team />
      <About />
      <Clients />
      <Contact />
      <Footer />
      <ServicesModal />
      </div>
    );
  }
}

export default App;
