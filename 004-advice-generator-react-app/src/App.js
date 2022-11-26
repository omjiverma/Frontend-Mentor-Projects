import desktopDivider from './pattern-divider-desktop.svg'
import dice from './icon-dice.svg'

function App() {
  return (
    <div className="app">
      <div className="card">
        <h1 className="card-header">Advice #117</h1>
        <p className="card-text">
        You spend half your life asleep or in bed. It's worth spending money on a good mattress, decent pillows and a comfy duvet."
        </p>
        <img src={desktopDivider} alt="desktop-divider" className="desktop-divider" />
        <button className="card-button"><img src={dice} alt="dice" /></button>
      </div>
    </div>
  );
}

export default App;
