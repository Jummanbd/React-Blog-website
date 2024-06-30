
import HoverVideoPlayer from 'react-hover-video-player';
import { CiPlay1 } from "react-icons/ci";
import { LiaCommentSolid } from 'react-icons/lia';
import sectiondata from '../../../store/store';
import Bookicon from '../common/icons-box/bookicon';
import Hearticon from '../common/icons-box/hearticon';
import SlideTwo from '../common/slider/slidertwo';
const Gardencard = () => {
  return (
    <div className='gardencard-wrapper'>
       <div className="gardencard-wrap">
        {sectiondata.garden.map((item) => {
            const {id, title, images, userImg, userTitle, postdate,  videoUrl, galleryimg, video, slider}  = item
            return(
            <div className="card" key={id}>
                <div className="video-items" >
                <span className='badge-top badge  text-bg-light'>{'toole'}</span>
                <span className='badge-top badge-right'><Bookicon/></span>
                {(video === true) ? (
                    <div className="video-img">
                    <span className="play-icon"><CiPlay1/></span>
                    <HoverVideoPlayer
                    className="garde-card-video"
                    videoSrc={videoUrl}
                    pausedOverlay={
                        <img
                        src={images}
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
                )
                :
            (slider === true) ? (
                <SlideTwo  slidesToShow={1} slidesToScroll = {1} arrows=  {false} speed={500} dots = {true}>
                <img src={galleryimg.img1} alt="img" />
                <img src={galleryimg.img2} alt="img" />
                <img src={galleryimg.img3} alt="img" />
                <img src={galleryimg.img4} alt="img" />
            </SlideTwo>
            ) 
            :    
            (
                <div className='garder--img' >
                    <img src={images} alt="" />
                </div>
            ) 

                }

                </div>
                <div className="card-body">
                <div className="media align-items-center">
                    <div className="d-flex">
                    <img src={userImg} alt="img" className='card-user-img' />
                    </div>
                    <div className="media-body">
                    <div className="d-block media-wrap">
                        <p className='fw-medium user-name'>{userTitle}</p>
                        <p className='post--date'>{postdate}</p>
                    </div>
                    </div>
                </div>
                <div className="section-heading mt-3">
                    <h5 className='sec-title'>{title}</h5>
                </div>
                <div className="icons-video-wrap mt-3">
                    <div className='d-flex icon-heart-comment'>
                    <span className='me-3 d-flex'><Hearticon/>2</span>
                    <span className='ms-2'><LiaCommentSolid/>96</span>
                    </div>
                    <Bookicon/>
                </div>
                </div>
            </div>
            )
        })}

       </div>
    </div>
  )
}

export default Gardencard
