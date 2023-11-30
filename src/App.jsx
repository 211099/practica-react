import { useState } from 'react'
import './styles/Main.css'
import NavHeder from './components/navbar/NavHeader.jsx'
import NavMain from './components/navbar/NavMain.jsx'
import NavFooter from './components/navbar/NavFooter.jsx'
import SerachBox from './components/header/SearchBox.jsx'
import NavInfo from './components/header/NavInfo.jsx'
import Carrusel from './components/main/Carrusel.jsx'
import GameCard from './components/main/GameCard.jsx'
function App() {  

  return (
    <>
      <div className='container-main-app'>

          <div className='nav'>
            <NavHeder/>
            <NavMain/>
            <NavFooter/>
          </div>

          <div className='header'>
            <SerachBox/>
            <NavInfo/>
          </div>

          <div className='main'>
              <Carrusel/>
              <div className='container-games'>
                <h1>GAMES ON SALE NOW</h1>
                <div className='container-list-games'>
                    <GameCard/>
                    <GameCard/>
                    <GameCard/>
                    <GameCard/>
                    <GameCard/>
                    <GameCard/>
                    <GameCard/>



                </div>
              </div>
          </div>

      </div>
    </>
  )
}

export default App
