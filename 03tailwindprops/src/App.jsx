import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {
 

  let myObj = {
    username : 'Aavez',
    age : 21,
  }
  // let newArry = [1, 2, 3,]

  return (
    <>
    <h1 className='bg-green-600 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>

   <Card username = 'chaiaurcode' addresText = 'Taigor Nagar vikhroli.' sumObj={myObj}/>

   <Card username= 'Hitesh Choudhary' />

    </>
  )
}

export default App
