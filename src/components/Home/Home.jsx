import { useEffect, useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import NavBar from '../Navbar/Navbar'
import CarrouselGeneral from '../Carrousel/CarrouselGeneral'
import { Link } from 'react-router-dom'

const Home = () => {
    const [count, setCount] = useState(0)
  return (
    <>
    <NavBar links={["home","register","admin","error 404"]}/>
  <h1>soy guille</h1>
        <div className="App">
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://reactjs.org" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      
        <Link to='/home'>ir a home</Link>
        
        {
          count == 10?
            <CarrouselGeneral/>
                :
          <h1>Hola mundo</h1>
        }
  
        <p>asdasohdsjkladhasjkldhasjkldshadjkl</p>
  
      </>
  )
}

export default Home