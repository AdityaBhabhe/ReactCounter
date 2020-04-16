import React, {useState} from 'react'
import './App.css'


function App(){

  const [count,setCount] = useState(0)
  return(
    <div className="App">
      <header>
        <h1>Counter App</h1>
      </header>
      <h2>The current count is: {count}</h2>
      <button onClick={() => setCount(0)}>Reset Count</button>
      <button onClick={() => count >= 10 ? "" : setCount(count + 1)}>Increment Count</button>
      <button onClick={() => count <= 0 ? "" : setCount(count - 1)}>Decrement Count</button>   
    </div>
  )
}

export default App;