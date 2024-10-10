import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  const[counter , setCounter] = useState(0)
  // let counter = 15

  const addValue = ()=>{

    if (counter>-1 && counter<20) {
  
      setCounter(counter+1)
    
      console.log('clicked', counter);
    }
    else{
      console.log('number is not between 0 to 20');
      document.querySelector('#error').innerHTML='number is not between 0 to 20';
    }
}

  const removeValue = ()=>{
  
    if (counter>0 && counter<21) {

      
      setCounter(counter-1)
     
      console.log('clicked', counter);
    }
    else{
      console.log('number is not between 0 to 20');
      document.querySelector('#error').innerHTML='number is not between 0 to 20';
      
    }
  }

  return (
    <>
     
    <h1>chai aur react</h1>
    <h2>Counter value : {counter}</h2>

    <p ><button 
    onClick={addValue}
    >Add value{counter}</button></p>

    <p><button
    onClick={removeValue}
    >Decress value {counter}</button></p>
    <p>footer : {counter}</p>

    <h2 id='error'></h2>
    </>
  )
}

export default App
