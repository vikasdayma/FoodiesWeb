


import React, { useEffect, useState } from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { MdCancelPresentation } from "react-icons/md";
import { Link } from 'react-router-dom';
import './MobileNav.css'
 const MobileNav = ({display}) => {
  const [animation,setAnimation]=useState('');
   
    const[show,setShow]=useState(false);
    
    const handleClick=()=>{
        setShow(!show)
       
       if(show==true){
         setAnimation('left-side')
        
    }
    else{
      setAnimation('')
    }
      
    }
  
     
  return (
    <>
         {!show?<button className={`main-button lg:${display}  flex justify-end text-white`}  onClick={handleClick}><MdOutlineMenu /></button >
         : 
         <section >
          
            <div className={` lg:hidden flex justify-end  -top-2 text-xl leading-[3rem] bg-black text-white h-screen w-[60vw] sm:w-[30vw] lg:w-[27vw] absolute right-0 nav-container ${animation}  z-30 absolute `}>
            <button className='main-button mt-8 flex-end text-white' onClick={handleClick}><RxCross2 />
</button>  
          <br />
          <br />
               <div className='mob-list1 animated-text flex flex-col  pr-10 items-end mt-20'>
                      
                 <NavTags to='/mission' text='Mission' ></NavTags>
                 <NavTags to='/mission' text='Launches' ></NavTags>
                 <NavTags to='/mission' text='Careers' ></NavTags>
                 <NavTags to='/mission' text='Shops' ></NavTags>
                 <NavTags to='/mission' text='Shop' ></NavTags>
              
               </div>
            </div>
        </section>
    }
        
        
    </>
  )
}
export default MobileNav ;
const NavTags=({to,text})=>{
  return(
    <div className='text-white w-64' style={{borderBottom:"0.1px solid gray"}}>
    <Link to={to} className='text-lg  ml-48'>
      {text}
    </Link>
    </div>
  )
}


