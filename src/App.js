import React from 'react';
import Hello from './components/Hello';
import logo512 from './img/logo512.png';
import unsplash1 from './img/chuttersnapQGGflC3gIzUunsplash.jpg';
import unsplash2 from './img/trevormckinnonjqdJ0A0lNV4unsplash.jpg';
import './css/App.css';

function App() {
  return (
    <div>
      <img src={logo512} alt="React Logo"/>
      <h3><span>Props</span> tests on <span className="color1">React</span></h3>
      <hr/><br/>
      <Hello
        to="Ringo"
        from="Paul"
        num={3}
        data={[1,2,3,4,5]}
        isFunny={false}
        src={unsplash1}
        alt="img1 from Unsplash"
      />
      <Hello
        to="John"
        from="George"
        num={4}
        data={[6,7,8,9,10]}
        isFunny
        src={unsplash2}
        alt="img2 from Unsplash"
      />
    </div>
  );
}

export default App;
