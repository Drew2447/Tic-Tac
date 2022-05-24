import React, { useEffect, useState, setCount } from "react";

const Row = ()=>{

   
    const [count3, setCount] = useState(0);
    
    const colm1 = (count1)=> {
        setCount(count1 + 1)
    }

        // if(num1 = 1 ){

//     return 
// }
// if(num1 = 2){
//     return 
//     }
//     else{return null}
// }

const colm2 = (count2)=> {
    setCount(count2 + 1)}
// //        if(count = 1 ){
// //             return t
// //         }
// //         if(num2 = 2){
// //             return false
// //             }
// //             else{return null}
    
//          }
         const colm3 = (count3)=> {
            setCount(count3 + 1)


         }

         const  button3 = (colm3, ) =>{
            if(colm3 = 1){
                return true
            }
            if(colm3 = 2){
                return false
            }
            else{return null}
         }
         const button3Display = ()=>{
             if(button3 = true){
                 return 'o'
             } 
             if(button3 = false){
                 return 'x'
             }
             }
         
//     if(num3 = 1 ){
//         return true
//     }
//     if(num3 = 2){
//         return false
//         }
//         else{return null}
// };
    return (
        <div className='Colms'>
    <button className='button1' onClick={colm1}></button>

    <button className='button1' onClick={colm2}></button>
    
    <button className='button1' onClick={colm3}>{button3Display}</button>

    </div>

    )
};
export default Row;