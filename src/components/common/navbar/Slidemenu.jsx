/* eslint-disable react/prop-types */
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Slidemenu  ({items}){
 const [open, setOpne] = useState(false);
  return (

    <ul>
            <li  className={`d-block ${open ? "slidebarmenu active" : "slidebarmenu"}`}>
             <div className="d-flex justify-content-between align-items-center">
             <Link to={items.path}  >{items.title} </Link>
             {items.dropdown ? <span onClick={() => setOpne(!open)} className={`down-icons ${open ? "active": ""}`}> <FiChevronDown /></span> : ''}
             </div>
            {
                items.dropdown ? (
                    <ul className={`dropdown-menu-item `}>
                        {items.dropdown.map((ditem, index2) => {
                            return (
                                <li key={index2}><Link to={ditem.path}>{ditem.title}</Link></li>
                            )
                        })}
                </ul>
                ) : ''
            }

        </li>
        
      
    </ul>

  )
}

