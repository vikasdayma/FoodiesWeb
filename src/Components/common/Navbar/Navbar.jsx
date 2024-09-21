
import React from 'react'
import DekstopView from './DekstopView';
import MobileNav from './MobileNav';
const Navbar=()=>{
  return(
    <div className=' sticky flex justify-between items-center   w-[98vw] '>
    <div className='text-white text-4xl pt-10 lg:hidden flex'> Logo</div>
    <section>
     <div className='flex items-center justify-center '>
     <div className='w-[98vw]'>   
     <DekstopView/>
     </div>
     <div className='lg:mb-11 lg:hidden flex lg:ml-10'>
     <MobileNav display='flex'/>
     </div>
   
     </div>

      <div>

      </div>

    </section>
    </div>
  )
}
export default Navbar ;

  