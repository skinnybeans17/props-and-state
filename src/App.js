import { useState } from 'react'

import './App.css';
import Counter from './Counter'

function App() {
  const [count, setCount] = useState([1,4,3])

  return (
    <div className="App">
      {count.map((value, index) => {
        return (
          <Counter 
            label={`counter ${index}`}
            value={value} 

            increment={() => {
              const newCount = [...count]
              newCount[index] += 1
              setCount(newCount)
            }}

            decrement={() => {
              const newCount = [...count]
              newCount[index] -= 1
              setCount(newCount)
            }}
      />)
  })}
    <h1>{count.reduce((acc, val) => acc + val)}</h1>
</div>
  );
}

export default App;