import React from 'react'
import illust from '../assets/04_illust.png'
import '../styles/css/BdayIllust.scss'

const BdayIllust = () =>{
  return(
    <div className="illustConatiner">
      <img src={illust} className="illustImg"/>
    </div>
  )
}

export default BdayIllust;