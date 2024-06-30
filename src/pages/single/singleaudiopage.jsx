
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BiHide } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { CiFlag1, CiPlay1 } from 'react-icons/ci';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin, IoShareSocialOutline } from "react-icons/io5";
import { LiaCommentSolid } from "react-icons/lia";
import { RiMessage2Line } from "react-icons/ri";
import { RxClipboardCopy } from "react-icons/rx";
import { Link } from "react-router-dom";
import heroimg from '../../assets/images/hero-3.jpg';


import img from '../../assets/images/audio-01.jpg';
import Bookicon from "../../components/common/icons-box/bookicon";
import Hearticon from "../../components/common/icons-box/hearticon";
import GeneralHeader from '../../components/common/navbar/GeneralHeader';
import Footer from "../../components/footer/footer";
import Comment from "../../components/singuser/comment";
const SingleaudioPage = () => {
  const [social, setSocial] = useState(false);
  const [hide, setHide] = useState(false);
  const [report, setReport] = useState(false);
  const[threedot, setThreedot] = useState(false)

  const handleClose = () => setHide(false);
  const handleHide = () => setHide(true);

  const reportClose = () => setReport(false);
  const reportHide = () => setReport(true);
  return (
    <main>
        <GeneralHeader/>
        <section className='section--padding audio-area'>
          <div className="container">
            <div className="row">
               <div className="col-lg-12">
                <div className="audio--wrapper">
                 <div className="media">
                    <div className="audio-paly-img">
                        <img src={img} alt="" />
                         <div className="icon-element">
                         <CiPlay1/>
                         </div>
                    </div>
                    <div className="media-body">
                      <div className="heading-section  mb-4">
                      <h1 className="sec-title pb-4">
                           Programming Languages
                        </h1>
                        <p className="sec_decs  ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis tempora obcaecati error ipsum voluptatibus sed adipisci ut maiores nesciunt quam.</p>
                      </div>

                      <div className="singleone-wrapper">
                      <div className="singleone-wrap-right">
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
                    </div>
                 </div>

                 </div>
               </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
              <div className="singleone--wrapper single-audio-wrappers">
                <div className="singleone-first-wrap">
                  <p className="my-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure vel officiis ipsum placeat itaque neque dolorem modi perspiciatis dolor distinctio veritatis sapiente, minima corrupti dolores necessitatibus suscipit accusantium  dignissimos culpa cumque.</p>
                  <p className="my-4">
                  It is a long established fact that a <span className="fw-bold">reader</span> will be distracted by the readable content of a page when looking at its <span className="fw-bold">layout</span>. The point of using Lorem Ipsum is that it has a more-or-less normal <span className="link-underline-dark">distribution of letters</span>.
                  </p>

                  <ol className="py-4">
                    <li className="mt-2">We want everything to look good out of the box.</li>
                    <li className="mt-2">Really just the first reason, that's the whole point of the plugin.</li>
                    <li className="mt-2">Here's a third pretend reason though a list with three items looks more realistic than a list with two items.</li>
                  </ol>
                </div>
                <div className="singleone-second-wrap">
                  <h4 className="sec-title">
                  Typography should be easy
                  </h4>
                  <p className="sec-decs py-4">
                  So that's a header for you — with any luck if we've done our job correctly that will look pretty reasonable.
                  </p>
                  <p className="sec-decs py-1">
                    Something a wise person once told me about typography is:
                  </p>
                  <p className="fst-italic sec-decs py-2 fw-bold">
                  Typography is pretty important if you don't want your stuff to look like trash. Make it good then it won't be bad.
                  </p>
                  <p>It's probably important that images look okay here by default as well:</p>
                  <img src={heroimg} alt="img"className="my-4 small-img"  />
                  <p className="py-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure vel officiis ipsum placeat itaque neque dolorem modi perspiciatis dolor distinctio veritatis sapiente
                  </p>
                  <p className="py-4">
                    Now I'm going to show you an example of an unordered list to make sure that looks good, too:
                  </p>
                  <ol className="py-4">
                    <li className="mt-2">So here is the first item in this list.</li>
                    <li className="mt-2">In this example we're keeping the items short.</li>
                    <li className="mt-2">Later, we'll use longer, more complex list items.</li>
                  </ol>
                  <h4 className="sec-title py-2">
                  We still need to think about stacked headings though.
                  </h4>
                  <p className="py-4">
                  Let's add a closing paragraph here so things end with a decently sized block of text. I can't explain why I want things to end that way but I have to assume it's because I think things will look weird or unbalanced if there is a heading too close to the end of the document.
                  </p>
                  <p className="py-2">
                  What I've written here is probably long enough, but adding this final sentence can't hurt.What I've written here is probably long enough, but adding this final sentence can't hurt.
                  </p>
                </div>
                 <ul className="tag-wrap">
                <li className="tag-item">
                  <Link to ="#">Garden(13)</Link>
                </li>
                <li className="tag-item"> 
                  <Link to="#">Jewelry (16)</Link>
                </li>
                <li className="tag-item">
                  <Link to="#">Industrial(15)</Link>
                </li>
                <li className="tag-item"> 
                  <Link>Tools(21)</Link>
                </li>
                <li className="tag-item">
                  <Link>Automotive(16)</Link>
                </li>
                <li className="tag-item">
                  <Link>Toys(25)</Link>
                </li>
                <li className="tag-item">
                  <Link>Outdoors(14)</Link>
                </li>
                <li className="tag-item">
                  <Link>Health(4)</Link>
                </li>
                <li className="tag-item">
                  <Link>Electronics(7)</Link>
                </li>

                </ul>
                 <hr />
       
              </div>
              <Comment/>
              </div>
            </div>
          </div>
        </section>
        <Footer className={'footer--area'}/>

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

export default SingleaudioPage
