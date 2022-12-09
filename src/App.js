import react, { useState } from 'react'
import './App.css';

function App() {
  const [fruit, setFruit] = useState("🍎");
  const [fruitColor, setFruitColor] = useState("white");
  const [fruitSize, setFruitSize] = useState(100);
  const [fruitDeg, setFruitDeg] = useState(0);



  return (
    <>
      <div className="header">
        <div className='header-container'>
          <h1 className='header-item'>🥭Fruit Fun!</h1>
        </div>
      </div>

      <div className='fruit-fun-container'>
        <div >
          <h1>Change Color</h1>

          <div>
            <div className='color-container'>
              <div className='color-container-item bg-purple' onClick={() => { setFruitColor("purple") }}></div>
              <div className='color-container-item bg-yellow' onClick={() => { setFruitColor("yellow") }}></div>
              <div className='color-container-item bg-green' onClick={() => { setFruitColor("green") }}></div>
              <div className='color-container-item bg-dark' onClick={() => { setFruitColor("black") }}></div>
              <div className='color-container-item bg-orange' onClick={() => { setFruitColor("orange") }}></div>
            </div>
          </div>

          <div>
            <div className='color-container color-block'>
              <div className='color-container-item bg-red' onClick={() => { setFruitColor("red") }}></div>
              <div className='color-container-item bg-light' onClick={() => { setFruitColor("white") }}></div>
              <div className='color-container-item bg-brown' onClick={() => { setFruitColor("brown") }}></div>
              <div className='color-container-item bg-blue' onClick={() => { setFruitColor("blue") }}></div>
              <div className='color-container-item bg-pink' onClick={() => { setFruitColor("pink") }}></div>
            </div>
          </div>

          <h1>Change Size</h1>
          <div className='size-container'>
           <input type="range" className='size-slider' onChange={(e)=>{setFruitSize(e.target.value)}}/>
          </div>

          <h1>Rotate</h1>
          <div className='size-container'>
            <input type="range" className='size-slider' onChange={(e)=>{setFruitDeg(e.target.value)}}/>
          </div>

        </div>

        <div>
          <div className='main-fruit-container' style={{ backgroundColor: fruitColor ,transform: `rotate(${fruitDeg*3.6}deg)`}}>
            <div className='main-fruit'style={{fontSize: `${fruitSize * 2}px`}}>
              {fruit}

            </div>
          </div>
          <div>
            <div className='fruit-container'>
              <div className='fruit-item' onClick={() => { setFruit("🍎") }}>🍎</div>
              <div className='fruit-item' onClick={() => { setFruit("🍉") }}>🍉</div>
              <div className='fruit-item' onClick={() => { setFruit("🍌") }}>🍌</div>
              <div className='fruit-item' onClick={() => { setFruit("🍍") }}>🍍</div>
              <div className='fruit-item' onClick={() => { setFruit("🍇") }}>🍇</div>
            </div>
            <div className='fruit-container fruit-container-item'>
              <div className='fruit-item' onClick={() => { setFruit("🍓") }}>🍓</div>
              <div className='fruit-item' onClick={() => { setFruit("🍒") }}>🍒</div>
              <div className='fruit-item' onClick={() => { setFruit("🍏") }}>🍏</div>
              <div className='fruit-item' onClick={() => { setFruit("🥝") }}>🥝</div>
              <div className='fruit-item' onClick={() => { setFruit("🍐") }}>🍐</div>
            </div>
          </div>

        </div>
    </div>


<div className='footer-container'>
  <h3>Created By Sakshi</h3>
</div>


    </>
  );
}

export default App;
