import React from "react"
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
      <p className='text'>This website is approved by </p>
      <a
        target='_blank'
        href='https://susannajarventausta.github.io/dist/index.html'
        className='link'
      >
        Pesonen
      </a>
    </div>
  )
}

export default Footer
