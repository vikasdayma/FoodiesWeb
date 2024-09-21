import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const FeaturesCard = ({animation}) => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
   
        <div data-aos={`${animation}`} data-aos-duration='1000' className="m-4 box overflow-hidden w-[312px] h-[300px] rounded-3xl border-4 border-solid border-red-500 bg-gray-900     flex flex-col rounded-tr-none rounded-bl "
    
  
        >
          
          <div 
            className=' bg-cover bg-no-repeat w-full h-full'>
            <div className="px-10 py-8 text-teal-500 font-semibold text-2xl">
              <h1>Ask Anything</h1>
            </div>
            <div className="px-10 w-auto h-24">
              <p className="text-white text-[13px]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
                facilis dolores odit nam perspiciatis eum incidunt est officia
                nostrum, illum ipsum similique.
              </p>
            </div>
            <div className="mt-10 w-full flex items-center justify-centeer px-10">
              <button className="flex items-center justify-center text-[14px] text-black font-bold bg-white rounded-lg px-8 py-2 ">
                Explore
              </button>
    
            </div>
          </div>
        </div>
  );
};




export default FeaturesCard




//   return (
    // <div className="m-4 box overflow-hidden w-[312px] h-[300px] rounded-3xl border-4 border-solid border-red-500 bg-gray-900     flex flex-col rounded-tr-none rounded-bl "
    
  
    // >
      
    //   <div 
    //     className=' bg-cover bg-no-repeat w-full h-full'>
    //     <div className="px-10 py-8 text-teal-500 font-semibold text-2xl">
    //       <h1>Ask Anything</h1>
    //     </div>
    //     <div className="px-10 w-auto h-24">
    //       <p className="text-white text-[13px]">
    //         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
    //         facilis dolores odit nam perspiciatis eum incidunt est officia
    //         nostrum, illum ipsum similique.
    //       </p>
    //     </div>
    //     <div className="mt-10 w-full flex items-center justify-centeer px-10">
    //       <button className="flex items-center justify-center text-[14px] text-black font-bold bg-white rounded-lg px-8 py-2 ">
    //         Explore
    //       </button>

    //     </div>
    //   </div>
    // </div>
//   );
// }

  
  