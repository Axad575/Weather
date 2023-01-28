import React from 'react'
import Navbar from './components/navbar';
import Navbar2 from './components/navbar2';
import Body1 from './components/body1';
import Bodytext from './components/bodytext';
import Body2 from './components/body2';
import Carousel from './components/carousel';
import Hr from './components/hr';
import './styles/App.css';

function App (){


    
  
    return (
      <div className="App">
        <Navbar/>
        <Navbar2 />
        <Body1 />
        <Bodytext/>
        <Body2/>
        <Hr/>
        <Carousel/>
      </div>
    );

  
}

export default App;
