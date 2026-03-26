import Imgfinger from'@/assets/fingerprint.png'
import ProductImg from'@/assets/image.png'
import { useState } from 'react'

const cosmetic = [
  { id: 1, name:"Suncream",image:Imgfinger},
  { id: 2, name:"Suncream",image:ProductImg},
  { id: 3, name:"Suncream",image:ProductImg},
  { id: 4, name:"Suncream",image:Imgfinger},
  { id: 4, name:"Suncream",image:Imgfinger},
  { id: 4, name:"Suncream",image:Imgfinger},
  { id: 4, name:"Suncream",image:Imgfinger},
  { id: 4, name:"Suncream",image:Imgfinger},
]

function Featured() {
  // const[data,setData] = useState(false)
  // const calculation = ()=>{
  //   if(data === true){
  //     setData(false);
  //   }
  //   else{
  //     setData(true);
  //   }
  // };

// const [data,setData] = useState(0);
// const helperFunction = (event)=>{
//   console.log('event',event)
//   setData(Number(event.target.value));
// }

  // most used hook in react
  const [showAll, setShowAll] = useState(false);
   // show 4 or all
  const visibleProducts = showAll
    ? cosmetic
    : cosmetic.slice(0, 4);
  return (
    <div>


      {/* {data && <div>show me</div>} */}


      {/* <div onClick={()=> setData(true)}>click me</div> */}

      {/* <button onClick={() => calculation()}>click me</button> */}

      {/* <button onClick={() => setData(!data)}>click me</button> */}

      {/* <input type="number"
      value={data}
      onChange={(e)=>helperFunction(e)}/>
      
      <button onClick={()=>setData(data-1)}>dec</button>
      <button onClick={()=>setData(data+1)}>INC</button> */}



      {/* header section */}
      <div className='mt-20'>
      <div className="flex justify-between items-center ">
        <h1 className="font-bold text-2xl">Featured Product</h1>
        <button
        
        onClick={()=>setShowAll(!showAll)}
        className='text-blue border-2 rounded h-12 w-20 '
        >
        {showAll ? "Show less":"Show All"}

      </button>
      </div>

      {/* products section */}
        <div className='flex  gap-10 mt-6 justify-center items-center'>
         {showAll ?(
          <div className='flex gap-10 mt-6 flex-wrap justify-center '>
            {visibleProducts.map((item)=>(
              <div key={item.id} className='relative'>
              <img src={item.image} alt="item.name" className='w-72 h-80' />
              <p className='mt-2'>{item.name}</p>

              <div className='bg-green-500 rounded-2xl absolute top-3 left-3 py-1 px-2
              text-white text-sm'>
                best selling
              </div>
              </div>
            ))}
          </div>
         ):(
          <div className='flex flex-wrap justify-center gap-10 mt-6  '>
            {visibleProducts.map((item)=>(
              <div key={item.id} className='relative'>
              <img src={item.image} alt="item.name" className='w-72 h-80' />
              <p className='mt-2'>{item.name}</p>

              <div className='bg-green-500 rounded-2xl absolute top-3 left-3 py-1 px-2
              text-white text-sm'>
                best selling
              </div>
              </div>
            ))}
          </div>
         )}
    </div>
    </div>
    </div>
  )
}

export default Featured