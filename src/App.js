import React from 'react';
import Hello from './components/Hello';
import Charts from './components/Charts';
import logo512 from './img/logo512.png';
import imgUnsplash1 from './img/chutter-snapQGGflC3gIzU-unsplash.jpg';
import imgUnsplash2 from './img/trevormckinnon-jqdJ0A0lNV4-unsplash.jpg';
import './css/App.css';

function App() {
  return (
    <>
      <img src={logo512} alt="React Logo"/>
      <h3><span>Props</span> tests on <span className="color1">React</span></h3>
      <hr/><br/>
      <Hello
        to="Ringo"
        from="Paul"
        num={3}
        data={[1,2,3,4,5]}
        isFunny={false}
        src={imgUnsplash1}
        alt="img1 from Unsplash"
      />
      <Hello
        to="John"
        from="George"
        num={4}
        data={[6,7,8,9,10]}
        isFunny
        src={imgUnsplash2}
        alt="img2 from Unsplash"
      />
      <br/><br/>
      <h3><span className="color1">Charts Components</span> & <span>Props</span></h3>
      <hr/><br/>
      <Charts />
    </>
  );
}

export default App;
