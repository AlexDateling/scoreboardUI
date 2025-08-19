import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import GameplayOverlayController from './components/GameplayOverlayController/GameplayOverlayController'
import MenuOverlay from './components/MenuOverlay.ts/MenuOverlay'
import { Card } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      {/* NAVIGATION BAR: maybe potential different overlays for different games */}
      {/* bracket stuff */}


      {/* Take and Clear Overlay buttons to show or not show*/}

      {/* Components used for each game */}

       <Card style={{ width: '100%' }}>

          <MenuOverlay/>
            
   
        </Card>


    </>
  )
}

export default App
