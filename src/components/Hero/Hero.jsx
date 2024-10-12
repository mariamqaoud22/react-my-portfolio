// import React from 'react'
import HeroImage from '../../assets/unnamed (2).jpg'
export default function Hero() {



    const handleContactClick = () => {
        window.location.href = 'mailto:mariamqaoud22@gmail.com';
      };
    
      const handleResumeClick = () => {
        window.open('https://drive.google.com/file/d/1_ocF_AhWib2SsyCBHhdoHMxyV9ru8jPc/view?usp=sharing', '_blank');
      };



  return  <>
  
  <div id='home'
   className="
   bg-bg text-text text-center py-16">
    <img src={HeroImage} alt='mariam' className=" mx-auto mt-12 mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105 " />
    <h1 className="text-2xl font-bold">
        I'm {' '}
        <span className=" text-4xl font-bold 
        bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent ">
            Mariam Qaoud </span>
            React Developer 
            {/* - Full Stack */}
    </h1>
    <p className="text-xl text-text mt-4 px-4 md:px-32">
        I specialize in building modern and responsive web applications.
    </p>

    <div className="flex justify-center space-x-4 mt-8">
    <button  className="btn btn bg-gradient-to-r from-primary text-text hidden md:inline 
        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full " onClick={handleContactClick}>  Contact With Me </button>
    <button className="btn btn bg-gradient-to-r from-secondary text-text hidden md:inline 
        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full " onClick={handleResumeClick}> Resume </button>
    </div>
</div>
  
  
  </>
  
}
