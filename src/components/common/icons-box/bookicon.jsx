
import { useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
const Bookicon = () => {
    const [active, setActive] =useState(false);
    
  return (
    <div className='booking-icon icons' onClick={() => setActive(!active)}>
       {active === true ? <FaBookmark/> : <CiBookmark/>}
    </div>
  )
}

export default Bookicon
