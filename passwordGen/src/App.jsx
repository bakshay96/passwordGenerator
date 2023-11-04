import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Model } from './Components/Model'
import { PasswordGen } from './Components/PasswordGen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-orange-400 border-8 w-3/5 mt-20  flex flex-col items-center m-auto'>
   
     <PasswordGen />
     
    </div>
  )
}

export default App
