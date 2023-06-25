import { useState, useEffect } from 'react'
import './App.css'

import AnimatedRoutes from './components/AnimatedRoutes';

let hasLogged = false;

function App() {
   useEffect(() => {
     if (!hasLogged) {
       console.log(
         "%c\nHey!%c\n\nWelcome to my developer portfolio.\n\nI'm delighted that you've taken the time to visit and I'm eagerly looking forward to hearing from you.\n\nThank you for stopping by, and I hope you enjoy exploring my work! 🙌🏻\n\nMateo\n",
         "color: #f59e0b; font-size: 20px",
         "color: initial; font-size: 14px"
       );
       hasLogged = true;
     }
   }, []);
  return (
    <>
      <div>
        <AnimatedRoutes />
      </div>
    </>
  )
}

export default App
