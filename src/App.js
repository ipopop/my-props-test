import React from "react";
import Hello from "./components/Hello";
import Charts from "./components/Charts";
import Artist from "./components/ArtistList";
import SlotMachines from "./components/SlotMachines";
import "./css/App.css";

function App() {
  return (
    <>
      <content>
        <a href='https://my-props-test.vercel.app/'>
          <img className='logo' src='./img/logo512.png' alt='React Logo' />
        </a>
        <div class='title'>
          <h3>
            My firsts <span>Props</span> tests on{" "}
            <span className='color1'>React</span>
          </h3>
        </div>
        <div className='container'>
          <div className='card'>
            <Hello
              to='Ringo'
              from='Paul'
              num={3}
              data={[1, 2, 3, 4, 5]}
              isFunny={false}
              src='./img/chutter-snapQGGflC3gIzU-unsplash.jpg'
              alt='img1 from Unsplash'
            />
          </div>
          <div className='card'>
            <Hello
              to='John'
              from='George'
              num={4}
              data={[6, 7, 8, 9, 10]}
              isFunny
              src='./img/trevormckinnon-jqdJ0A0lNV4-unsplash.jpg'
              alt='img2 from Unsplash'
            />
          </div>
        </div>
        <div class='title'>
          <h3>
            Artists List (<span className='color1'>React</span>{" "}
            <span className='color2'>Components</span> with <span>Props</span>)
          </h3>
        </div>
        <div className='container artist'>
          <div className='card-2'>
            <Artist
              src='./img/JLennon.jpg'
              name='John Lennon'
              job={["Singer", "Composer", "Musician"]}
            />
          </div>
          <div className='card-2'>
            <Artist
              src='./img/NPortman.jpg'
              name='Natalie Portman'
              job={["Actress", "Film Director", "Producer"]}
            />
          </div>
          <div className='card-2'>
            <Artist />
          </div>
        </div>
        <div class='title'>
          <h3>
            Slot Machine (<span className='color1'>React</span>{" "}
            <span className='color2'>Components</span> with <span>Props</span>)
          </h3>
        </div>
        <div className='container'>
          <div className='card-2'>
            <SlotMachines s1='🍊' s2='🍉' s3='🍓' />
          </div>
          <div className='card-2'>
            <SlotMachines s1='🍒' s2='🍒' s3='🍒' />
          </div>
          <div className='card-2'>
            <SlotMachines s1='🍐' s2='🍎' s3='🍏' />
          </div>
          <div className='card-2'>
            <SlotMachines s1='🍋' s2='🍋' s3='🍋' />
          </div>
          <div className='card-2'>
            <SlotMachines s1='🍀' s2='🍀' s3='🍀' />
          </div>
          <div className='card-2'>
            <SlotMachines s1='🐵' s2='🙈' s3='🙉' />
          </div>
        </div>
        <div class='title'>
          <h3>
            Various <span className='color2'>Charts Components</span>
            <br />
            with inner <span>Props</span> on{" "}
            <span className='color1'>React</span>
          </h3>
        </div>
        <br />
        <Charts />
      </content>
      <footer>
        <div>
          <p>
            <em>
              "Freely inspired by the begining of 'The Modern React Bootcamp'
              course by Colt Steel"
            </em>
          </p>
        </div>
        <p>iPopop © 2020</p>
      </footer>
    </>
  );
}

export default App;
