import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
// import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App | chai</h1>
    </div>
  )
}

//-------------------------------------------------------------
// const ReactElement = {
//   type : 'a',
//   props : {
//       href : 'http://google.com',
//       target : '_blank'
//   },
//   children : 'Click me to visit google'
// }
//-----------------------------------------------------------

// const anotherElement = (
//   <a href="http://google.com" target='_blank'>Visit Google</a>
// )

//---------------------------------------------------------

//ham react ke hisab se link banayenge

const anotherUser = 'chai aur react.'

const reactElement = React.createElement(
  'a',
  {href: 'https//google.com', target : '_blank'},
  'click me to visit google ',
  anotherUser
)

createRoot(document.getElementById('root'))
.render(


reactElement

)
