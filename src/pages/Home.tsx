import "./../styles/Home.css"
import car from "./../images/our_car.jpg"
import Footer from "../components/Footer"

function Home() {
  return (
    <div className='container'>
      <p className='moi'>We have a new car!</p>
      <img src={car} alt='Our car' className='carPic' />
      <Footer />
    </div>
  )
}

export default Home
