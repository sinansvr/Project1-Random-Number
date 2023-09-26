import { useState } from "react";
import "./style.css";

function App() {
  const [randomNumber, setRandomNumber] = useState(4);
  const [minNumber, setMinNumber] = useState(2);
  const [maxNumber, setmaxNumber] = useState(10);

  // console.log(minNumber,maxNumber)

  const getRandomNumber = () => {
    setRandomNumber(
      Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber)
    );
  };

  return (
    <div className="hero">
      <h3>Random Number Generator</h3>
      <p>Please Enter Two Numbers</p>
      <div className="container">
        <div className="randomNum">
          <div className="numContainer">
            <h5>Min:</h5>
            <input
              type="number"
              value={minNumber}
              onChange={(e) => setMinNumber(+e.target.value)}
            />
          </div>
          <div className="numContainer">
            <h5>Max:</h5>
            <input
              type="number"
              value={maxNumber}
              onChange={(e) => setmaxNumber(+e.target.value)}
            />
          </div>
        </div>
        <button onClick={getRandomNumber}>Get Random Number</button>
      </div>
      <div className="hero">
        <h3>
          Random Number: <span>{randomNumber}</span>
        </h3>
      </div>
    </div>
  );
}

export default App;
