import { Link } from "react-router-dom";
import sectiondata from '../../../store/store';
import Slide from "../common/slider/slider";
const Singletrending = () => {
  return (
    <Slide slidesToShow={5} slidesToScroll = {1} arrows=  {true} speed={500} dots = {false}>
            {sectiondata.trending.map((item) =>{
        const {id,badgeText, images, title, decs, top1, top2, top3} =item
        return(
            <Link to='#' className="trending-item mt-5" key={id}>
            <div className="trending-img">
              <div className="trend-badge-text">
              {badgeText ? (<span className= {`trend--badge ${top1 ? "trend-badge1"
               : top2 ? "trend-badge2" 
               : top3 ?"trend-badge3" : ""}`}>{badgeText}</span>) : ""}
              </div>
              
              <img src={images} alt="trend-img" />
            </div>
            <div className="trending-body">
               <div className="media pt-3">
                  <div className="d-flex trend-wrap">
                      <div className="trend-box"></div>
                  </div>
                  <div className="media-body">
                    <div className="heading--section ms-2">
                       <h4 className="sec-title">{title}</h4>
                       <p className="sec_decs">{decs}</p>
                    </div>
                  </div>
               </div>
            </div>
          </Link>
        )
    })}
    </Slide>

   
  )
}

export default Singletrending
