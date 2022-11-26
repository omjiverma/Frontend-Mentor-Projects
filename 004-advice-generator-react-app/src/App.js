import desktopDivider from './pattern-divider-desktop.svg'
import dice from './icon-dice.svg'
import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const [advice, setAdvice] = useState([])


  const getAdvice = () =>{
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
        <div className='card-body'>
          <p className="card-text">
            {advice.advice}
          </p>
        </div>
        <img src={desktopDivider} alt="desktop-divider" className="desktop-divider" />
        <button className="card-button" onClick = {getAdvice} ><img src={dice} alt="dice" /></button>
      </div>
    </div>
  );
}

export default App;
