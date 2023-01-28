import React from 'react'
import {BiWind} from 'react-icons/bi'
import {WiRaindrop} from 'react-icons/wi'
import {IoMdSpeedometer} from 'react-icons/io'

const Body2 = () => {
  return (
    <div id='bid2'>
        <div>
            <BiWind id='Wind'/>
            <h1 id='windtext'>0.7 m/c</h1>
        </div>
        <div>
            <WiRaindrop id='Wind'/>
            <h1 id='windtext'>60%</h1>
        </div>
        <div>
        <IoMdSpeedometer id='Wind'/>
            <h1 id='windtext'>724 мм.рт.ст</h1>
        </div>
    </div>
  )
}

export default Body2