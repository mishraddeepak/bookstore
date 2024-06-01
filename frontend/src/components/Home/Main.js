import React from 'react'

import Image from '../../Assets/download.jpeg'
import './Main.css'


function Main() {
  return (
    <>
     <div class="container">
        <div class="child child-1"><div><h3>"Once you learn to read, you will be forever free."</h3> – Frederick Douglass</div></div>
        <div class="child child-2"><img src={Image} alt="" /></div>
    </div>
    </>
  )
}

export default Main
