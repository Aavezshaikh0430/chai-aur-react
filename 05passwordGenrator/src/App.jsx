import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [length, setLength]= useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  //useRef hooks

  const passwordeRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = "";

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed){
      str+= '0123456789'
    }
    if(charAllowed){
      str += '{}[]*&^%$#@!~><+-`'
    }

    for (let i = 1; i<=length; i++) {
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
      
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPassWordToClipboard = useCallback( ()=>{
    passwordeRef.current?.select();
    passwordeRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{passwordGenerator()}, [length, numberAllowed, charAllowed, passwordGenerator])
 



  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8  text-orange-500 bg-gray-700  py-2'>
      <h1 
      className='text-white text-center my-3'>Password Generator</h1> 
      <div className=' flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly 
        ref={passwordeRef}
        />

        <button 
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-500'
        onClick={copyPassWordToClipboard}
        >copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length} 
          className='cursor-pointer '
          onChange={(e)=>{setLength(e.target.value)}}
           />
          <label htmlFor="">length: {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={()=>{
            setNumberAllowed ( (prev)=>{return !prev})
          }} />

          <label htmlFor="">Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={charAllowed}
          id='charactorInput'
          onChange={()=>{
            setCharAllowed((prev)=>!prev)
          }} />
          <label htmlFor="">Charactors</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App