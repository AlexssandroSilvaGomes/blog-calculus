import React from 'react'
import './paragraph.css'

function Paragraph({title, content}) {
  return (
    <div className="content">
        <h3>{title}</h3>
        <p>{content}</p>
  </div>
  )
}

export default Paragraph