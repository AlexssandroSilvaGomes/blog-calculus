import React from 'react'
import './banner.css'

function Banner({text}) {
  return (
    <div className="banner">
        <h1>{text}</h1>
    </div>
  )
}

export default Banner