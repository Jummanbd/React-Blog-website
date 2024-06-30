import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { BiHide } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { CiFlag1 } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin, IoShareSocialOutline } from "react-icons/io5";
import { LiaCommentSolid } from "react-icons/lia";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { RxClipboardCopy } from "react-icons/rx";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";
import authorimg from '../../assets/images/small-avatar-1.jpg';
import GeneralHeader from "../../components/common/navbar/GeneralHeader";
import Pading from "../../components/common/pading/pading";
import Footer from "../../components/footer/footer";
import Joninewster from "../../components/newauthors/joninewster";
import Newsauthors from "../../components/newauthors/newsauthors";
import Gardencard from "../../components/other/gardencard";
import Trendingthree from "../../components/trending/trendingthree";
const Author = () => {
  const [social, setSocial] = useState(false);
  const [hide, setHide] = useState(false);
  const [report, setReport] = useState(false);
  const[threedot, setThreedot] = useState(false);
  const [selected, setSelected] = useState("Articles");
  const [recent, setRecent] = useState(false);

  
  const handleClose = () => setHide(false);
  const handleHide = () => setHide(true);

  const reportClose = () => setReport(false);
  const reportHide = () => setReport(true);

  const recentClose = () => setRecent(false);
  const recentHide = () => setRecent(true);

  const handleClick = (name) => {
   
    setSelected(name)
  }
  // eslint-disable-next-line react/prop-types
  function Button({name, onClick, selected}){
    return <button onClick={()=>onClick(name)} className={`theme--btn ${name===selected ? "change-color" : ""}`}>{name}</button>
  }
  return (
    <main>
      <GeneralHeader/>
      <section className="section--padding author-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
               <div className="author-wrapper">
                  <div className="media">
                    <div className="d-flex">
                      <img src={authorimg} alt="" />
                    </div>
                    <div className="media-body ms-4">
                      <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <h1 className="sec-title mb-2">
                          Dony Herrera
                          <span className="verified-icon ms-2"><RiVerifiedBadgeFill/></span>
                        </h1>
                        <div className="author-right d-flex align-items-center">
                            <button className="theme-btn me-1">Follow</button>
                            <div className="shear-item me-1">
                            <div className="social-icons ms-2" onClick={() => setSocial(!social)}>
                              <IoShareSocialOutline />
                            </div>
                            <div className={`shear-dropdowns  ${social === true ? "d-block" : null}`}>
                            <ul>
                                <li><Link to = "#"><FaFacebook /> Facebook</Link></li>
                                <li><Link to="#"><FaSquareXTwitter />Twitter</Link></li>
                                <li> <Link to="#"><IoLogoLinkedin /> Linkedin </Link></li>
                                <li> <Link to="#"><FaInstagram /> Instogram </Link></li>
                            </ul>
                            </div>
                            </div>
                            <div className="dot-icon-item ms-2">
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
                      <div className="author-wrap">
                        <p className="sec_decs mb-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro autem totam iure quibusdam asperiores numquam quae animi assumenda necessitatibus consectetur.
                        </p>
                        <p className="mb-3 web-link"><TbWorld/> https://example.com/me</p>
                        <ul className="author-social">
                            <li className="me-2"><Link to = "#"><FaFacebook /></Link></li>
                            <li className="me-2"><Link to="#"><FaSquareXTwitter /></Link></li>
                            <li className="me-2"> <Link to="#"><IoLogoLinkedin /></Link></li>
                            <li className="me-2"> <Link to="#"><FaInstagram /></Link></li>
                          </ul>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section--top margin--top">
        <div className="container">
          <div className=" d-flex justify-content-between align-items-center mb-4 author--btn-resp">
            <div className="btn--wrapper">
              <Button name="Articles"  selected={selected} onClick={handleClick}/>
              <Button name="Favorites" selected={selected} onClick={handleClick}/>
              <Button name="Saved" selected={selected} onClick={handleClick}/>

            </div>
             <div className="garden-btn-right ">
             <button className='theme-btn me-3' onClick={recentHide}>Most Recent</button>
           </div>
          </div>
          <Gardencard/>
          <Pading/>
        </div>
      </section>
      <Trendingthree/>
      <Newsauthors/>
      <Joninewster/>
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
          {/* --------------------Modal------------------------ */}
          <Modal show={recent} onHide={recentClose} className="categori-model"         dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title">
      <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Recent
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="tags-wrap">
            <ul>
              <li>
                <Link>Most Recent</Link>
              </li>
              <li>
                <Link>Cuated by Admin</Link>
              </li>
              <li>
                <Link>Most Appeciated</Link>
              </li>
              <li>
                <Link>Most Discussed</Link>
              </li>
              <li>
                <Link>Most Viewed</Link>
              </li>
            </ul>
          </div>
        </Modal.Body>
      </Modal>
    </main>
  )
}

export default Author
