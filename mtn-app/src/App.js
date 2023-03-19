import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import Coursels from './Components/Coursels';
import Apps from './Components/Apps';
import Deals from './Components/Deals';
import NiDilu from './Components/NiDilu';
import Footer from './Components/Footer';


class App extends Component {
  state = {  } 
  render() { 
    return (
      <div>
        <Navbar/>
        <Coursels/>
        <Apps/>
        <Deals/>
        <NiDilu/>
        <Footer/>
      </div>
    );
  }
}
 
export default App;