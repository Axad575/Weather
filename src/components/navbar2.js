import React from 'react'
// import {TiLocationArrowOutline} from 'react-icons/ti'

const Navbar2 = () => {
  
  return (
    <div id='nabvar2'>
        <label for="my-modal-3" id='navbar2text'>Сменить город</label>
        <div id='navbar2text2'> Мое местоположение</div>
        <input type="checkbox" id="my-modal" class="modal-toggle" />
        <input type="checkbox" id="my-modal-3" class="modal-toggle" />
<div class="modal">
  <div class="modal-box relative">
    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <div tabindex="0" class="collapse border border-base-300 w-64 bg-base-100 rounded-box"> 
        <input placeholder='На Какой город?' class="collapse-title border-none text-xl font-medium"></input>
    </div>
  </div>
</div>
    </div>
  )
}

export default Navbar2