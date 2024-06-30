
import { FaPlay } from "react-icons/fa6";
import { RiMessage2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import audioimg02 from '../../assets/images/audio-03.jpg';
import audioimg01 from '../../assets/images/audio-06.jpg';
import smallimg01 from '../../assets/images/small-audio03.jpg';
import smallimg03 from '../../assets/images/smallaudio-01.jpg';
import smallimg02 from '../../assets/images/smallaudio-02.jpg';
import Bookicon from "../common/icons-box/bookicon";
import Hearticon from "../common/icons-box/hearticon";
const Listenpodcasts = () => {
  return (
    <section className='section--padding listen-area'>
        <div className="container">
            <div className="row">
                <div className="col-log-12">
                <div className="heading-section text-start mb-4">
                     <h1 className="sec-title pb-4">
                       Latest audio articles
                       </h1>
                      <p className="sec_decs  ">Discover the most outstanding articles in all topics of life.</p>
                </div>
                </div>  
            </div>
            <div className="row">
                <div className="col-lg-8">
                    <div className="listen-wrapper mt-4">
                       
                       <div className="audiotwo-items">
                        <div className="audiotwo-img">
                        <img src={audioimg01} alt="img" />
                        <div className="overlay"></div>
                        
                        <span className="badge audiotwo-badge badge-text5">
                            Indusrial
                        </span>
                        
                            <div className="audiotwo-music">
                            <div className="icon-element"><FaPlay /></div>
                            </div>
                        
                        </div>
                        <div className="audiotwo-wrap-box">
                           <Link to={"/singles-page-audio"}>
                             <h3 className="sec-title mb-3">To cool datacenter servers</h3>
                            </Link>

                            <p className="sec_decs mb-3">Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.</p>
                            <div className="audiotwo-icons">
                            <div className="d-flex audiotwo-icons-left">
                                <span className="heart-icon"><Hearticon/></span>
                                <span className="massage-icon"><RiMessage2Line/> 70</span>
                                </div>
                                <div className="audiotwo-icons-right">
                                    <Bookicon/>
                                </div>
                            </div>
                        </div>
                       </div>

                          <div className="audiotwo-items">
                                <div className="audiotwo-img">
                                <img src={audioimg02} alt="img" />
                                <div className="overlay"></div>
                                
                                <span className="badge audiotwo-badge badge-text2">
                                    Electronics
                                </span>
                                
                                    <div className="audiotwo-music">
                                    <div className="icon-element"><FaPlay /></div>
                                    </div>
                                
                                </div>
                                <div className="audiotwo-wrap-box">
                                 <Link to={"/singles-page-audio"}>

                                    <h3 className="sec-title mb-3">To cool datacenter servers</h3>
                                    </Link>

                                    <p className="sec_decs mb-3">Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.</p>
                                    <div className="audiotwo-icons">
                                    <div className="d-flex audiotwo-icons-left">
                                        <span className="heart-icon"><Hearticon/></span>
                                        <span className="massage-icon"><RiMessage2Line/> 70</span>
                                        </div>
                                        <div className="audiotwo-icons-right">
                                            <Bookicon/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                       
                    </div>
                </div>
                <div className="col-lg-4 mt-4">
                    <Link to={"/singles-page-audio"}>
                    <div className="listening-item mb-3">
                        <div>
                        <div className="media">
                            <img src={smallimg01} alt="img" />
                       
                        <div className="media-body">
                            <h6 className="sec-title mb-1">Diyer and TV</h6>
                             <ul>
                                <li>40 Episode</li>
                                <li>10 minutes</li>
                             </ul>
                        </div>
                        </div>
                        </div>
                        <div className="listening-icon">
                            <FaPlay/>
                        </div>
                    </div>
                    </Link>

                    <Link to={"/singles-page-audio"}>
                        <div className="listening-item mb-3">
                            <div>
                            <div className="media">
                                <img src={smallimg02} alt="img" />
                        
                            <div className="media-body">
                                <h6 className="sec-title mb-1">Diyer and TV</h6>
                                <ul>
                                    <li>40 Episode</li>
                                    <li>10 minutes</li>
                                </ul>
                            </div>
                            </div>
                            </div>
                            <div className="listening-icon">
                                <FaPlay/>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/singles-page-audio"}>
                     <div className="listening-item mb-3">
                        <div>
                        <div className="media">
                            <img src={smallimg03} alt="img" />
                       
                        <div className="media-body">
                            <h6 className="sec-title mb-1">Diyer and TV</h6>
                             <ul>
                                <li>40 Episode</li>
                                <li>10 minutes</li>
                             </ul>
                        </div>
                        </div>
                        </div>
                        <div className="listening-icon">
                            <FaPlay/>
                        </div>
                     </div>
                    </Link>

                    <Link to={"/singles-page-audio"}>
                        <div className="listening-item mb-3">
                            <div>
                            <div className="media">
                                <img src={smallimg02} alt="img" />
                        
                            <div className="media-body">
                                <h6 className="sec-title mb-1">Diyer and TV</h6>
                                <ul>
                                    <li>40 Episode</li>
                                    <li>10 minutes</li>
                                </ul>
                            </div>
                            </div>
                            </div>
                            <div className="listening-icon">
                                <FaPlay/>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Listenpodcasts
