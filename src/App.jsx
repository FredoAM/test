import { useState } from 'react'
import './App.css'

function App() {


  const handleClick = async () => {
    try {
      const response = await fetch('../prueba.php', {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log(data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };



  
  return (
    <>
     <button onClick={handleClick}>Click me</button>
    </>
  )
}

export default App
