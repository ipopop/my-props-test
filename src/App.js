import React from 'react';
import Hello from './components/Hello';
import Charts from './components/Charts';
import './css/App.css';

function App() {
  return (
    <>
      <img className="logo" src="logo512.png" alt="React Logo"/>
      <div class="title">
        <h3><span>Props</span> tests on <span className="color1">React</span></h3>
      </div>
      <div className="container">
      <div className="card">
        <Hello
          to="Ringo"
          from="Paul"
          num={3}
          data={[1,2,3,4,5]}
          isFunny={false}
          src="chutter-snapQGGflC3gIzU-unsplash.jpg"
          alt="img1 from Unsplash"
        />
      </div>
      <div className="card">
      <Hello
        to="John"
        from="George"
        num={4}
        data={[6,7,8,9,10]}
        isFunny
        src="trevormckinnon-jqdJ0A0lNV4-unsplash.jpg"
        alt="img2 from Unsplash"
      />
      </div>
      </div>
      <div class="title">
        <h3><span className="color1">Charts Components</span> with <span>Props</span></h3>
      </div><br/>
      <Charts />
    </>
  );
}

export default App;
