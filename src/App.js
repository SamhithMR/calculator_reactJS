import './App.css';
import { useState } from 'react';
import Buttons from './components/keypress.jsx'
  
function App() {

  let [input,setInput] = useState('')

  function handleClick(value){setInput(input+value);}
  function handleClear(){setInput('')}
  function handleEqual(){setInput(eval(input).toString());}
  function handleBackSpace(){input.length >= 1 ? setInput(input.slice(0, -1)) : setInput("")}

  return(
    <div className="App">
      <input type="text" id="display" value={input} readOnly />
      <Buttons Click={handleClick} Clear={handleClear} Equal={handleEqual} BackSpace={handleBackSpace}/>
    </div>
  )
}

export default App;
