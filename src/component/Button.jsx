import React, { useEffect } from "react";
import { useState } from "react";
// const Button = () => {
//     // yo talla ko line nai hook ho
//     // const[a,b] = useState('a ko value')
//     // import {useState} from "react"
//     // const [color,setColor] = useState('Red')

//     return(
//         // <div>
//         //     usestate hook
//         //     <h1>My favorite color is {color}</h1>
//         //     <button onClick={()=> setColor('Blue')}>Blue</button>
//         //     <button onClick={()=> setColor('Green')}>Green</button>
//         //     <button onClick={()=> setColor('Yellow')}>Yellow</button>
//         // </div>
//         <div>

//         </div>
//     )
// }

// useEffect hook
//         function Button() {
//             let [count,setCount]= useState(0);
//             useEffect(() => {
//                 if (count === 100) return;
//                 const value = setTimeout(()=>{
//                     setCount((count = count + 1));
//                 },1000);
//                 return() => clearTimeout(value)
//             });
//           return (
//             <div>
//                 <div>useEffect</div>
//                 <h2>{count}</h2>
//             </div>

//           );
//         }

function Button() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count > 0) {
      alert("you have clicked");
    }
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          if (count < 5) {
            setCount(count + 1);
          } else {
            alert("cant add more");
          }
        }}
      >
        add
      </button>
    </div>
  );
}

export default Button;

// export default Button
