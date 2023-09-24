import React from 'react'
import App from './App'
import { useState } from 'react'



const Question = ({value}) => {
    
    const {id ,title,info} = value;
    const [isExpanded, setIsExpanded] = useState(false);


   function handleToggle() {
      setIsExpanded(!isExpanded)
   }


//    if(isExpanded){
//     return(
//         <div className='expandedque'>
//         <p className='exptitle' >{title} <span onClick={handleToggle} style={{ cursor: 'pointer' }} >
//           {isExpanded ? '➖' : '➕'}
//         </span></p>
//         <p className='lines'>{info}</p>
//       </div>
//     )
// }

    

    
  return (
    <div className='quecontainer'>
      <p className='title' >{title} <span onClick={handleToggle} style={{ cursor: 'pointer' }} >
        {isExpanded ? '➖' : '➕'}
      </span></p>
      {isExpanded && <p className='lines'>{info}</p>}
    </div>
  )

}

export default Question
