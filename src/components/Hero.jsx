// import React from "react";

// const Hero = () => {
//   return (
    // <div classNameNameName='max-w-[1640px] mx-auto p-4'>
    //     <div classNameNameName='max-h-[500px] relative'>
    //         {/* overlay */}
    //         <div classNameNameName='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
    //             <h1 classNameNameName='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The  <span classNameNameName='text-orange-500'> Best</span></h1>
    //             <h1 classNameNameName='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Foods <span classNameNameName='text-orange-500'> Delivery</span></h1>
    //         </div>
    //         <img classNameNameName='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    //     </div>
    // </div>

//     <div className="">
//       <div
//         id="carouselDarkVariant"
//         className="relative"
//         data-twe-carousel-init
//         data-twe-ride="carousel"
//       >
//         {/* <!-- Carousel indicators --> */}
//         <div
//           className="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
//           data-twe-carousel-indicators
//         >
//           <button
//             data-twe-target="#carouselDarkVariant"
//             data-twe-slide-to="0"
//             data-twe-carousel-active
//             className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
//             aria-current="true"
//             aria-label="Slide 1"
//           ></button>
//           <button
//             data-twe-target="#carouselDarkVariant"
//             className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
//             data-twe-slide-to="1"
//             aria-label="Slide 1"
//           ></button>
//           <button
//             data-twe-target="#carouselDarkVariant"
//             className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
//             data-twe-slide-to="2"
//             aria-label="Slide 1"
//           ></button>
//         </div>

//         {/* <!-- Carousel items --> */}
//         <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
//           {/* <!-- First item --> */}
//           <div
//             className="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
//             data-twe-carousel-fade
//             data-twe-carousel-item
//             data-twe-carousel-active
//           >
//             <img
//               src="https://rukminim2.flixcart.com/image/850/1000/jn3hocw0/poster/g/x/h/medium-hollywood-movie-wall-poster-pirates-of-the-caribbean-dead-original-imaf9utzqnengk9c.jpeg?q=90&crop=false"
//               className="block w-full"
//               alt="Motorbike Smoke"
//             />
//             <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
//               <h5 className="text-xl">First slide label</h5>
//               <p>
//                 Some representative placeholder content for the first slide.
//               </p>
//             </div>
//           </div>
//           {/* <!-- Second item --> */}
//           <div
//             className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
//             data-twe-carousel-fade
//             data-twe-carousel-item
//           >
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTITS3s_NKoqwylBHXqv2_tOSM4QyjD1CiYIad7VURFFg&s"
//               className="block w-full"
//               alt="Mountaintop"
//             />
//             <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
//               <h5 className="text-xl">Second slide label</h5>
//               <p>
//                 Some representative placeholder content for the second slide.
//               </p>
//             </div>
//           </div>
//           {/* <!-- Third item --> */}
//           <div
//             className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
//             data-twe-carousel-fade
//             data-twe-carousel-item
//           >
//             <img
//               src="https://getwallpapers.com/wallpaper/full/9/3/4/1267903-widescreen-movie-poster-wallpaper-1920x1080-smartphone.jpg"
//               className="block w-full"
//               alt="Woman Reading a Book"
//             />
//             <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
//               <h5 className="text-xl">Third slide label</h5>
//               <p>
//                 Some representative placeholder content for the third slide.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* <!-- Carousel controls - prev item--> */}
//         <button
//           className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
//           type="button"
//           data-twe-target="#carouselDarkVariant"
//           data-twe-slide="prev"
//         >
//           <span className="inline-block h-8 w-8 dark:grayscale">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke-width="1.5"
//               stroke="currentColor"
//               className="h-6 w-6"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 d="M15.75 19.5L8.25 12l7.5-7.5"
//               />
//             </svg>
//           </span>
//           <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
//             Previous
//           </span>
//         </button>
//         {/* <!-- Carousel controls - next item--> */}
//         <button
//           className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
//           type="button"
//           data-twe-target="#carouselDarkVariant"
//           data-twe-slide="next"
//         >
//           <span className="inline-block h-8 w-8 dark:grayscale">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke-width="1.5"
//               stroke="currentColor"
//               className="h-6 w-6"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 d="M8.25 4.5l7.5 7.5-7.5 7.5"
//               />
//             </svg>
//           </span>
//           <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
//             Next
//           </span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import React, { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { slides } from '../data/data.js';

function Hero() {

  


  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(()=>{
    const autoplay=setInterval(()=>{
      nextSlide();
    },5000);
    return ()=> clearInterval(autoplay);
  },[currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div  className='max-w-[1640px] h-[780px] w-full m-auto py-16 px-4 relative group'>

     <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='flex items-center  justify-center  w-full h-full rounded-2xl bg-center bg-cover duration-500'
        
      >
       
        <h1  className='text-4xl text-red-700 px-20  sm:text-5xl md:text-6xl lg:text-7xl font-bold'>{slides[currentIndex].category} <br /> <span className='text-gray-200 text-sm md:text-xl'>{slides[currentIndex] .des}</span></h1>
        
          
      </div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
      
     

}

export default Hero;
