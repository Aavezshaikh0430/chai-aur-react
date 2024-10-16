import { useState } from "react"

function App() {
  const [color, setColor] = useState('olive')

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-white shadow-lg px-3 py-2 rounded-sm "> 
          
          <button 
          onClick={()=>{setColor('red')}}
          className="outline-none px-4 rounded-lg text-white shadow-lg font-bold" style={{backgroundColor:'red'}}>Red</button> 

          <button
          onClick={()=>{setColor('green')}}
          className="outline-none px-4 rounded-lg text-white shadow-lg font-bold" style={{backgroundColor:'green'}}>Green</button> 

          <button 
          onClick={()=>{setColor('blue')}}
          className="outline-none px-4 rounded-lg text-white shadow-lg font-bold" style={{backgroundColor:'blue'}}>Blue</button> 

          <button
          onClick={()=>{setColor('yellow')}}
          className="outline-none px-4 rounded-lg text-black shadow-lg font-bold" style={{backgroundColor:'yellow'}}>Yellow</button> 

          <button
          onClick={()=>{setColor('purple')}}
          className="outline-none px-4 rounded-lg text-white shadow-lg font-bold" style={{backgroundColor:'purple'}}>Purple</button> 

          <button
          onClick={()=>{setColor('pink')}}
          className="outline-none px-4 rounded-lg text-black shadow-lg font-bold" style={{backgroundColor:'pink'}}>Pink</button>

          <button
          onClick={()=>{setColor('grey')}}
          className="outline-none px-4 rounded-lg text-white shadow-lg font-bold" style={{backgroundColor:'grey'}}>Grey</button>

          <button
          onClick={()=>{setColor('lavender')}}
          className="outline-none px-4 rounded-lg text-black shadow-lg font-bold" style={{backgroundColor:'lavender'}}>Lavendar</button>

          <button
          onClick={()=>{setColor('brown')}}
          className="outline-none px-4 rounded-lg text-white shadow-lg font-bold" style={{backgroundColor:'brown'}}>Brown</button>

          <button
          onClick={()=>{setColor('black')}}
          className="outline-none px-4 rounded-lg text-white shadow-lg font-bold" style={{backgroundColor:'black'}}>Black</button>

          
        </div>
      </div>
    </div>
  )
}

export default App
