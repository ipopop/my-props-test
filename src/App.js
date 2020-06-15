import React from 'react';
import Hello from './components/Hello';
import logo512 from './img/logo512.png';
import img1 from './img/chuttersnapQGGflC3gIzUunsplash.jpg';
import img2 from './img/trevormckinnonjqdJ0A0lNV4unsplash.jpg';
import './css/App.css';

function App() {
  return (
    <div>
      <Hello
        to="Ringo"
        from="Paul"
        num={3}
        data={[1,2,3,4,5]}
        isFunny={false}
        src={img1}
        alt="img1 from Unsplash"
      />
      <Hello
        to="Cher"
        from="Sonny"
        num={2}
        data={[1,2,3,4,5]}
        isFunny
        src={img2}
        alt="img2 from Unsplash"
      />
      <img src={logo512} alt="React Logo"/>
    </div>
  );
}

export default App;
