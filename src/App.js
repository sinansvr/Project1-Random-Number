import { useState } from "react";

function App() {
  const [randomNumber, setRandomNumber] = useState(5)
  const [minNumber, setMinNumber] = useState(2)
  const [maxNumber, setmaxNumber] = useState(10)

  console.log(minNumber,maxNumber)

  return (     
    <div className="Container">
      <div className="Hero">
        <h4>
          Random Number: <span>5</span>{" "}
        </h4>
      </div>
      <div className="NumberContent">
        <div className="Content">
          <div className="randomNumber">
            <h5>Min:</h5>
            <input 
            type="number"
            value={minNumber}
            onChange={(e)=>setMinNumber(e.target.value)} />
          </div>
          <div className="randomNumber">
            <h5>Max:</h5>
            <input 
            type="number"
            value={maxNumber}
            onChange={(e)=>setmaxNumber(e.target.value)} />
          </div>
        </div>
        <button></button>
      </div>
    </div>
  );
}

export default App;
