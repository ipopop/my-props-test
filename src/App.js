import React from "react";
import Hello from "./components/Hello";
import Charts from "./components/Charts";
import Artist from "./components/ArtistList";
import SlotMachine from "./components/slotMachine";
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
              src='https://www.cheatsheet.com/wp-content/uploads/2020/06/people-for-peace-patch-john-lennon.jpg'
              name='John Lennon'
              job={["Singer", "Composer", "Musician"]}
            />
          </div>
          <div className='card-2'>
            <Artist
              src='https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcRBiDpNrsR4p2l7z5cfpdia-5MZEEzF5LKzMg3cmHmvcsXPm8Wp%26s&sp=1592734958Td500bb0190c76f2f7a5021e6a1e9d9b8a9c76595af2b5507aee80f8d9a81276e'
              name='Natalie Portman'
              job={["Actress", "Film director", "Producer"]}
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
            <SlotMachine s1='🍊' s2='🍉' s3='🍓' />
          </div>
          <div className='card-2'>
            <SlotMachine s1='🍐' s2='🍎' s3='🍏' />
          </div>
          <div className='card-2'>
            <SlotMachine s1='🍒' s2='🍒' s3='🍒' />
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
