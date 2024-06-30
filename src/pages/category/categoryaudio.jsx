
import { FaPlay } from 'react-icons/fa6';
import { RiMessage2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import audioimg01 from '../../assets/images/audio-01.jpg';
import audioimg02 from '../../assets/images/audio-02.jpg';
import audioimg03 from '../../assets/images/audio-03.jpg';
import heroimg from '../../assets/images/hero-6.jpg';
import Singlemusiccard from '../../components/audiotwo/singlemusiccard';
import Modales from '../../components/common/categorymodales/modales';
import Bookicon from '../../components/common/icons-box/bookicon';
import Hearticon from '../../components/common/icons-box/hearticon';
import GeneralHeader from '../../components/common/navbar/GeneralHeader';
import Pading from '../../components/common/pading/pading';
import Footer from '../../components/footer/footer';
import Joninewster from "../../components/newauthors/joninewster";
import Seatravel from "../../components/travel/seatravel";
const CategoryAudio = () => {
  return (
    <main>
        <GeneralHeader/>
        <section className='section--top'>
           <div className="container">
            <div className="row">
            <div className="col-lg-12 p-0">
              <div className="garden--werp">
              <img src={heroimg} alt="img" />
                <div className="overlay"></div>
              <div className="garden-text">
              <div className="heading-section text-center">
              <h1 className="sec-title pb-2">
                  Podcast
              </h1>
                <p className="sec_decs  ">115 Podcast</p>
              </div>
              </div>
              </div>
              
            </div>
            
            </div>
            <Modales/>
            <div className="row">

              <div className="col-lg-4 col-md-6 mt-4 ">
                <div className=" audiotwo-items audiotwo-resp">
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
                            <span className="heart-icons"><Hearticon/></span>
                            <span className="massage-icon"><RiMessage2Line/> 70</span>
                            </div>
                            <div className="audiotwo-icons-right">
                                <Bookicon/>
                            </div>
                        </div>
                    </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mt-4 ">
                <div className="audiotwo-items audiotwo-resp">
                    <div className="audiotwo-img">
                    <img src={audioimg02} alt="img" />
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
                            <span className="heart-icons"><Hearticon/></span>
                            <span className="massage-icon"><RiMessage2Line/> 70</span>
                            </div>
                            <div className="audiotwo-icons-right">
                                <Bookicon/>
                            </div>
                        </div>
                    </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mt-4 ">
                <div className="audiotwo-items audiotwo-resp">
                    <div className="audiotwo-img">
                    <img src={audioimg03} alt="img" />
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
                            <span className="heart-icons"><Hearticon/></span>
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
            <Singlemusiccard/>
            <Pading/>
           </div>
        </section>
        <Seatravel/>
        <Joninewster/>
        <Footer className={'footer-areatwo'}/>

    </main>
  )
}

export default CategoryAudio;
