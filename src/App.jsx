import Button from './components/Button'
import Input from './components/Input/input'
import { useState } from 'react'
import './App.css'

const App=()=> {
  const [count,setCount] = useState(0);
  // const [Value,setValue] = useState('')

  const decrement =()=>{
   setCount(count-1);
   console.log(count)
  }
  const increment =()=>{
    setCount(count+1);
   console.log(count)
  }
  const onBtnClick =()=>{
    setCount(0)
  }
  const onInputChange =(e)=>{
   console.log(e.target.value)
   setCount(e.target.value)

  }
  return (
    <div className='app'>
      <h1>{count}</h1>
      <div className='inpt'>
        <Input className='inp' placeholder='limit' onChange={onInputChange}      />
      </div>
      <div className='btns'>
      <Button onClick={decrement}>-</Button>
      <Button className="reset" onClick={onBtnClick}>RESET</Button>
      <Button onClick={increment}>+</Button>
      </div>
     
    </div>
  )
}

export default App
