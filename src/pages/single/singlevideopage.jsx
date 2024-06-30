
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { BiHide } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { CiFlag1 } from "react-icons/ci";
import { FaFacebook, FaRegComments } from "react-icons/fa";
import { FaInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { IoLogoLinkedin, IoShareSocialOutline } from "react-icons/io5";
import { LiaCommentSolid } from "react-icons/lia";
import { RiMessage2Line } from "react-icons/ri";
import { RxClipboardCopy } from "react-icons/rx";
import ReactPlayer from 'react-player/youtube';
import { Link } from "react-router-dom";
import audioimg01 from '../../assets/images/audio-01.jpg';
import audioimg02 from '../../assets/images/audio-02.jpg';
import audioimg03 from '../../assets/images/audio-03.jpg';
import audioimg04 from '../../assets/images/audio-04.jpg';
import { default as authorimg, default as smallimg } from '../../assets/images/small-avatar-1.jpg';
import smallimg02 from '../../assets/images/small-avatar-2.jpg';
import smallimg03 from '../../assets/images/small-avatar-3.jpg';
import smallimg04 from '../../assets/images/small-avatar-4.jpg';
import Singlecard from "../../components/common/articles/singlecard";
import Bookicon from "../../components/common/icons-box/bookicon";
import Hearticon from "../../components/common/icons-box/hearticon";
import GeneralHeader from '../../components/common/navbar/GeneralHeader';
import Footer from "../../components/footer/footer";
import Reviewed from "../../components/reviews/reviews";
import Sidebarright from "../../components/sider/sidebarright";
import Singleuser from "../../components/singuser/singleuser";

const SinglevideoPage = () => {
  const [social, setSocial] = useState(false);
  const [hide, setHide] = useState(false);
  const [report, setReport] = useState(false);
  const[threedot, setThreedot] = useState(false)

  const handleClose = () => setHide(false);
  const handleHide = () => setHide(true);

  const reportClose = () => setReport(false);
  const reportHide = () => setReport(true);
  const value = 75;
  return (
    <main>
        <GeneralHeader/>
        <section className='section--padding'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                      <div className="video-wrapper">
                         <ReactPlayer url='https://www.youtube.com/watch?v=NgrljB7UU34&t=13s' height={"600px"} width={"100%"}  loop = {true} controls ={true}/>
                         <div className="video-wrap mt-4 pb-4">
                           <p className='mete-decs mt-2'>4 Years Age</p>
                           <h2 className="sect-title mt-3">
                            Basic Embedding Mode with Ads
                           </h2>
                           <div className="singleone-wrap-right mt-4">
                    <ul className="singleone-overlay">
                        <li><Hearticon/></li>
                        <li><RiMessage2Line/> 60</li>
                    </ul>
                    <div className="singleone-wrap">
                    <div>
                    <Bookicon/>
                    </div>
                    <div className="shear-item">
                        <div className="social-icon" onClick={() => setSocial(!social)}>
                          <IoShareSocialOutline />
                        </div>
                        <div className={`shear-dropdowns ${social === true ? "d-block" : null}`}>
                        <ul>
                            <li><Link to = "#"><FaFacebook /> Facebook</Link></li>
                            <li><Link to="#"><FaSquareXTwitter />Twitter</Link></li>
                            <li> <Link to="#"><IoLogoLinkedin /> Linkedin </Link></li>
                            <li> <Link to="#"><FaInstagram /> Instogram </Link></li>
                        </ul>
                        </div>
                    </div>

                    <div className="dot-icon-item">
                      <div className="social-icons "onClick={() => setThreedot(!threedot)}>
                      <BsThreeDots />
                      </div>
                      <div className={`dots-icon-dropdowns ${threedot === true ? "d-block": null}`}>
                        <ul>
                            <li><Link to = "#"><RxClipboardCopy /> Copy Link</Link></li>
                            <li><Link to="#"><LiaCommentSolid /> Comment this article</Link></li>
                            <li  onClick={handleHide}> <Link to="#" ><BiHide /> Hide this author </Link></li>
                            <li onClick={reportHide}> <Link to="#"><CiFlag1 /> Report this article</Link></li>
                          </ul>
                      </div>

                      <div>

                      </div>
                    </div>
                    
                    </div>
                   </div>
                         </div>
                         <hr />
                         <div className="video-authors d-flex justify-content-between align-items-center">
                          <Singleuser usersImag={authorimg} userTitle={"Author Dev"} postdate={ "195 Subscribers"}/>
                          <button className="theme-btn sub-btn">Subcribers</button>
                         </div>
                      </div>

                    </div>
                </div>
                <div className="row ">
                  <div className="col-lg-8">
                    <div className="reviews-wrapper">
                      <div>
                      <div className="heading-section text-start">
                        <h1 className="sec-title pb-4">
                          Reviews
                        </h1>
                        
                      </div>
                      <div className="d-flex align-items-center justify-content-between reviews--wrap-cricula">
                        <div className="media pt-3 align-items-center">
                        <div style={{ width: 60, height: 60 }} className="d-flex me-3">
                            <CircularProgressbar value={value}  text={`${value}%`} />
                          </div>
                        <div className="media-body reviews-icons">
                        <div className="heading--section">
                            <h4 className="sec-title fw-bold"> <HiOutlineUserGroup /> User Score</h4>
                            <p className="sec_decs"><FaRegComments /> 9 ratings</p>
                          </div>
                        </div>
                        </div>

                        <Reviewed/>
                      </div>
                        <hr />
                        <div className="review-wrap">
                          <h3 className="sec-title mt-3">Descriptions:</h3>
                          <p className="supp-decs mt-3 fw-bold">
                            SUPPORTS:PRE-ROLL, MID-ROLL, POST-ROLL & CUSTOM
                          </p>
                           <p className="my-4">With superior upgrades, you can mix ad types together. No time limit, no quantity limit… All in VidMov theme only!</p>
                           <p className="my-4">
                           VAST is a Video Ad Serving Template for structuring ad tags that serve ads to video players. Using an XML schema, VAST transfers important metadata about an ad from the ad server to a video player. Initially launched in 2008, VAST has since played an important role in the growth of the digital video marketplace.
                           </p>

                           <p className="py-4">The early days of video consisted mostly of shared videos and other user-generated content. Success in monetizing this content with ads has produced the resources to improve the digital video marketplace. However, digital video has met a number of challenges along the way.</p>
                        </div>

                      </div>
                    </div>

                    <div className="related-wrapper">
                          <div className="heading-section text-start">
                          <h1 className="sec-title pb-4">
                            Reviews
                          </h1>
                          
                         </div>
                           <div className="related-video ">
                            <Singlecard title={"WNBA’s Sabrina Ionescu teams up with Xbox to empower young girls to pursue their hoop dreams "} img={audioimg01} userimg={smallimg} username={"Foulcher Nath"} postdate={'May 20,2024'}/>
                            
                            <Singlecard title={"WNBA’s Sabrina Ionescu teams up with Xbox to empower young girls to pursue their hoop dreams "} img={audioimg02} userimg={smallimg02} username={"Foulcher Nath"} postdate={'May 20,2024'}/>

                            <Singlecard title={"WNBA’s Sabrina Ionescu teams up with Xbox to empower young girls to pursue their hoop dreams "} img={audioimg03} userimg={smallimg03} username={"Foulcher Nath"} postdate={'May 20,2024'}/>

                            <Singlecard title={"WNBA’s Sabrina Ionescu teams up with Xbox to empower young girls to pursue their hoop dreams "} img={audioimg04} userimg={smallimg04} username={"Foulcher Nath"} postdate={'May 20,2024'}/>

                            <Singlecard title={"WNBA’s Sabrina Ionescu teams up with Xbox to empower young girls to pursue their hoop dreams "} img={audioimg02} userimg={smallimg03} username={"Foulcher Nath"} postdate={'May 20,2024'}/>

                            <Singlecard title={"WNBA’s Sabrina Ionescu teams up with Xbox to empower young girls to pursue their hoop dreams "} img={audioimg03} userimg={smallimg04} username={"Foulcher Nath"} postdate={'May 20,2024'}/>
                           </div>
                        </div>
                  </div>
                  <div className="col-lg-4">
                    <Sidebarright/>
                  </div>
                </div>
            </div>
        </section>
        <Footer className={'footer-areatwo'}/>

        {/* --------------------Modal------------------------ */}
    <Modal show={hide} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Hide stories from Truelock Alric</Modal.Title>
            </Modal.Header>
            <Modal.Body>We will hide all articles from Truelock Alric. You will no longer see their articles?</Modal.Body>
            <Modal.Footer>
              <Button  onClick={handleClose}>
                Close
              </Button>
              <Button variant="danger" className="model-btn" onClick={handleClose}>
                Hide this author
              </Button>
            </Modal.Footer>
    </Modal>
{/* --------------------Modal------------------------ */}
     <Modal show={report} onHide={reportClose}>
            <Modal.Header closeButton>
              <Modal.Title className="text-center">Report Abatar</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="report-button">
                <Button>violence</Button>
                <Button>Trouble</Button>
                <Button>Spam</Button>
                <Button>Other</Button>
              </div>
              <Modal.Title >Message</Modal.Title>
              <p>Please provide any additional information or context that will help us understand and handle the situation.</p>
              <textarea placeholder="..."></textarea>
            </Modal.Body>
            <Modal.Footer>
              <Button  onClick={reportClose}>
                Close
              </Button>
              <Button variant="info"onClick={reportClose}>
                Submit
              </Button>
            </Modal.Footer>
    </Modal>
    </main>
  )
}

export default SinglevideoPage
