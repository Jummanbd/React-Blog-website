import HoverVideoPlayer from 'react-hover-video-player';
import { CiPlay1 } from "react-icons/ci";
import { Link } from "react-router-dom";
import sectiondata from "../../../store/store";
import Bookicon from '../common/icons-box/bookicon';
import Slide from '../common/slider/slider';



const Travelvideo = () => {
  return (
    <section className='section--padding'>
      <div className="container">
        <div className="row">
        <div className="col-lg-12">
            <div className="heading-section text-center">
              <h1 className="sec-title pb-4">
              Sea travel enthusiast
                </h1>
                <p className="sec_decs  ">Over 218 articles about sea travel.</p>
               </div>
        </div>
        <div className="travel-vedio-wrapper">
        <Slide slidesToShow={4} slidesToScroll = {1} arrows=  {true} speed={500} dots = {false}>
            {sectiondata.travelvideo.map((item) => {
              const {id, badge, videoImg, vidioUrl, title, usersImag, userTitle,date } = item
              return(
                 <div className="col-lg-4  pt-3" key={id}>
                    <div className="video-items" >
                    <Link to="#"> 
                    <span className='badge-top badge  text-bg-light'>{badge}</span>
                    <span className='badge-top badge-right book_icons'><Bookicon/></span>
                     <div className="video-img">
                     <span className="play-icon"><CiPlay1/></span>
                     <HoverVideoPlayer
                     className="travel-video"
                        videoSrc={vidioUrl }
                        speedInSecond={2}
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
                    </Slide>
                </div>
        </div>
      </div>
    </section>
  )
}

export default Travelvideo
