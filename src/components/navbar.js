import React, {useState, useEffect} from 'react'

const Navbar = () => {

    const [dateNow, setDate] = useState(getTime())

  useEffect( () => {
    setInterval(()=>{
      setDate(getTime())
    },1000)

  }, [])

  function getTime(){
    var date = new Date(),
    hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
    minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
    seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    return {hours, minutes, seconds}
  }

  return (
    <div id='navbar1'>
        <h1 id='navtext'>Ташкент</h1>
        <h1 id='navtext2'>Сейчас:  {dateNow.hours + ':' + dateNow.minutes} </h1>
    </div>
  )
}

export default Navbar