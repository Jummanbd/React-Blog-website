
import { RiMessage2Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Bookicon from "../common/icons-box/bookicon";
import Hearticon from "../common/icons-box/hearticon";
// eslint-disable-next-line react/prop-types
const Singleaudiocard = ({ audiobgimg, badge ,title, place, date}) => {
  return (
    <Link to="#" className="aduio-items">
    <div className="aduio-bgimg">
       <img src={audiobgimg} alt="audio" />
       <div className="aduio-wrap-icons">
        <div className="aduio-item-icons  d-flex justify-content-between">
          <div className="aduio-left-icons d-flex">
           <div className="aduio-icons me-3 ms-2 mt-2" >
            <Hearticon/>
          </div>
          <div className="aduio-icons me-3 ms-2 mt-2" >
           <RiMessage2Line /> 120
          </div>
          </div>
        <div className="aduio-right-icons aduio-icons  me-3 mt-2" >
           <Bookicon/>
        </div>
        </div>

       </div>
      <div className="aduio-wrap">
       {badge ? <span className=' badge text-bg-light '>{badge}</span> : ""}
       <h3 className="sec-title my-2">{title}</h3>
       <ul>
        <li>{place}</li>
        <li>{date}</li>
       </ul>
     </div>

    </div>
   </Link>
  )
}

export default Singleaudiocard
