import desktopDivider from './pattern-divider-desktop.svg'
import dice from './icon-dice.svg'
import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const [advice, setAdvice] = useState([])


  const getAdvice = () =>{
    console.log("Button Clicked")
    axios.get("https://api.adviceslip.com/advice")
    .then((response) => {
      setAdvice(response.data.slip)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="app">
      <div className="card">
        <h1 className="card-header">Advice #{advice.id}</h1>
        <p className="card-text">
          {advice.advice}
        </p>
        <img src={desktopDivider} alt="desktop-divider" className="desktop-divider" />
        <button className="card-button" onClick = {getAdvice} ><img src={dice} alt="dice" /></button>
      </div>
    </div>
  );
}

export default App;
