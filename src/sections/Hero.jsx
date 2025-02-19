import Buttons from "../components/Buttons"
import { arrowRight }  from '../assets/icons'

const Hero = () => {
  return (
    <section id="home" className="w-full border-2 border-red-400 p-2 flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container ">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
      <p>
        Our Summer Collection
      </p>
      <h1>
        <span>The New Arrival</span>
        <br />
        <span>Nike </span> 
        Shoes
      </h1>
      <p>Discover stylish nike arrivals, quality comfort and innovation for your active life.</p>
      <Buttons label="Shop now" iconURL={arrowRight} />
      </div>
    </section>
  )
}

export default Hero


 {/* span tags are used to apply specific styling to those parts of the text , independant of others. */}