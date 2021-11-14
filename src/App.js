import './App.css'
import React from 'react'

import icon from './images/Logo.png'

import BitInfo from './components/BitInfo/BitInfo'
import Tab from './components/Tab/Tab'

function App() {
  return (
    <div className='wrapper'> 
      <div className='nav'>
        <img src={icon} alt="logo" />
        <BitInfo />
      </div>
      <Tab/>
    </div>
  )
}

export default App
