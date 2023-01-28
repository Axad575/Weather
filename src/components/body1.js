import React from 'react'
import {BsSunFill} from 'react-icons/bs'
import {RiCelsiusLine} from 'react-icons/ri'

const Body1 = () => {
  return (
    <div id='body1'>
        <BsSunFill id='SunIcon'/>
        <h1 id='bodytext'>+27</h1>
        <RiCelsiusLine id='Celsium'/>
    </div>
  )
}

export default Body1