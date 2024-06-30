
 import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
const Hearticon = () => {
    const[active, setActive] = useState(false);
  return (
    <div className='heart-icon icons' onClick={() => setActive(!active)}>
       {active === true ? <FaHeart/> : <CiHeart/>} 20
    </div>
  )
}

export default Hearticon
