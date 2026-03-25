import React from 'react'
import Robot from'@/assets/robot.png'
function IdCard(props) {
  return (
    <div className='flex justify-center mt-30 p-30 '>

    <div className='  flex flex-col gap-10 border-2 justify-between p-20 h-150 w-100 items-center bg-red-300'>
        <img src={props.img} alt=""  className='border-2 rounded-full h-60 ' />
        <div className='text-2xl underline underline-offset-2'>
        <div>Name:{props.name}</div>
        <div>Rollno:{props.roll}</div>
        <div>Address:{props.add}</div>
        </div>
            
    </div>
    </div>
  )
}

export default IdCard