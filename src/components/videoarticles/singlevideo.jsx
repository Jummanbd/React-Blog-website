import HoverVideoPlayer from 'react-hover-video-player';
import { CiPlay1 } from "react-icons/ci";
import { Link } from "react-router-dom";
import sectiondata from "../../../store/store";
import Bookicon from '../common/icons-box/bookicon';
const Singlevideo = () => {

  return (
    <div className="row mt-4">
        {sectiondata.videoarticles.map((item) => {
            const {id, badge, videoImg, vidioUrl, title, usersImag, userTitle,date } = item
            return(
                <div className="col-lg-4  mt-4" key={id}>
                    <div className="video-items" >
                    <Link to="/singles-page-video"> 
                    <span className='badge-top badge  text-bg-light'>{badge}</span>
                    <span className='badge-top badge-right'><Bookicon/></span>
                     <div className="video-img">
                     <span className="play-icon"><CiPlay1/></span>
                     <HoverVideoPlayer
                     className="player-wrapper"
                        videoSrc={vidioUrl }
                      
                        pausedOverlay={
                         <img
                         src={videoImg}
                         alt=""
                         style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                         }}
                        />
                      }
                   />
                     </div>
                    
                    <div className="heading-section mete-heading mt-4">
                        <div className="media">
                        <img src={usersImag} alt="img" />
                        <div className="media-body">
                        <h6>{title}</h6>
                        <ul>
                            <li className="user-title">{userTitle}</li>
                            <li className="date">{date}</li>
                        </ul>
                        </div>
                        </div>
        
                    </div>
                    </Link>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Singlevideo
