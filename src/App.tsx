import React from "react"
import "./App.css"
import car from "./images/our_car.jpg"
import Footer from "./components/Footer"
import music from "./audio/nocturnal-4211.mp3"

function App() {
  return (
    <div className='container'>
      <p className='moi'>We have a new car!</p>
      <img src={car} alt='Our car' className='carPic' />
      <p className='musicCredit'>
        Music by{" "}
        <a href='/users/nielizas-19737962/?tab=audio&amp;utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=audio&amp;utm_content=4211'>
          Nielizas
        </a>{" "}
        from{" "}
        <a href='https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=4211'>
          Pixabay
        </a>
      </p>
      <audio autoPlay loop>
        <source src={music} type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>
      <Footer />
    </div>
  )
}

export default App
