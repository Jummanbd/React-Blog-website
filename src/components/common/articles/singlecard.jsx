/* eslint-disable react/prop-types */
import HoverVideoPlayer from 'react-hover-video-player';
import { CiPlay1 } from "react-icons/ci";
import { LiaCommentSolid } from 'react-icons/lia';
import Bookicon from '../icons-box/bookicon';
import Hearticon from '../icons-box/hearticon';
const Singlecard = ({img,userimg,username, postdate, title}) => {
  return (
    <div className="card">
    <div className="video-items" >
    <span className='badge-top badge  text-bg-light'>{'toole'}</span>
    <span className='badge-top badge-right'><Bookicon/></span>
     <div className="video-img">
     <span className="play-icon"><CiPlay1/></span>
     <HoverVideoPlayer
     className="player-wrapper"
        videoSrc={"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}
        pausedOverlay={
         <img
         src={img}
         alt="img"
         style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
         }}
        />
      }
   />
     </div>
    </div>
    <div className="card-body">
      <div className="media align-items-center">
        <div className="d-flex">
          <img src={userimg} alt="img" className='card-user-img' />
        </div>
         <div className="media-body">
           <div className="d-block media-wrap">
             <p className='fw-medium user-name'>{username}</p>
             <p className='post--date'>{postdate}</p>
           </div>
         </div>
      </div>
      <div className="section-heading mt-3">
         <h5 className='sec-title'>{title}</h5>
      </div>
      <div className="icons-video-wrap mt-3">
        <div className='d-flex icon-heart-comment'>
        <span className='me-3 d-flex'><Hearticon/>160</span>
        <span className='ms-2'><LiaCommentSolid/>96</span>
        </div>
        <Bookicon/>
      </div>
    </div>
    </div>

  )
}

export default Singlecard
