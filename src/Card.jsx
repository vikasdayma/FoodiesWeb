
const Card = ({img1}) => {
  return (
    <>
  
    <div className='mt-10 w-96 h-96  rounded-xl border-4'
    style={{backgroundImage:`url(${img1})`,backgroundSize:"cover",height:"22rem",width:"15rem",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    }}>
      <h1 className='text-3xl text-white font-bold text-center  '>Meal and plans</h1>
 

     <button className='text-white border-2 h-10 w-40 bg-sky-700 rounded-xl mt-64 ml-10'>Explore</button>
    </div>

    </>
  )
}

export default Card
