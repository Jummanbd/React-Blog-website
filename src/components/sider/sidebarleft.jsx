import { CiBookmark, CiHeart } from "react-icons/ci";
import { RiMessage2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import sectiondata from "../../../store/store";
import Pading from "../common/pading/pading";
import Singleuser from "../singuser/singleuser";
const Sidebarleft = () => {
  return (
    
      <div className="container">
        <div className="row">
        <div className="col-log-12">
            <div className="heading-section text-start mb-4">
             <h1 className="sec-title pb-4">
             Latest Articles 🎈
            </h1>
            <p className="sec_decs  ">Discover the most outstanding articles in all topics of life.</p>
            </div>
        </div>
          <div className="sidebar-wrapper">
            {sectiondata.sidebar.map((item) => {
              const {id, badge, userImg, decs, userTitle, postDate, title, sideImg} = item;
              return(
                  <div className="sidebar-item" key={id}>
                  <div className="sidebar-wrap">
                  <span className= {`badge ${id === 1 ? "badge-text1"
               : id === 2 ? "badge-text2" 
               : id === 3 ?"badge-text3" : id === 4 ? "badge-text4": ""}`}>{badge}</span>
                  <Link to ={"/singles-page-audio"}>
                    <h3 className="sec-title mt-3">{title}</h3>
                  </Link>
                  <p className="sec-decs mt-2">{decs}</p>
                  <Singleuser userTitle={userTitle} usersImag={userImg} postdate={postDate}/>
                  <div className="sidebar-icon-wrap d-flex justify-content-between mt-4">
                    <div className="d-flex justify-content-center">
                    <div className="sidebar-icon me-3">
                      <CiHeart/> 10
                    </div>
                    <div className="sidebar-icon me-2">
                      <RiMessage2Line/> 60
                    </div>
                    </div>
                    <div className="sidebar-icon me-3">
                      <CiBookmark/>
                    </div>
    
                  </div>
                  </div>
                   <div className="sidebar-img">
                    <img src={sideImg} alt="img"  className="sideimg"/>
                   </div>
                </div>
              )
            })}

          </div>
          <Pading/>
        </div>
      </div>
  
  )
}

export default Sidebarleft
