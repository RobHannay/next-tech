import blinkLogo from '/Blink-text.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://joinblink.com" target="_blank">
          <img src={blinkLogo} className="logo" alt="Blink logo"/>
        </a>
      </div>
      <h1>Frontend Chat Task</h1>
      <p>Open App.tsx to get started.</p>
    </>
  )
}

export default App
