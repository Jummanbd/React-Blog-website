import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiOutlineDelete } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { FaRegFlag } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { IoReturnUpBack } from "react-icons/io5";
import { PiBoxArrowUpBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import Hearticon from "../common/icons-box/hearticon";


// eslint-disable-next-line react/prop-types
const Singlecomment = ({img, name, decs, }) => {
  const [threedot, setThreedot] = useState(false);
  const [hide, setHide] = useState(false);
  const [report, setReport] = useState(false);
  const [reply, setReply] = useState(false);
  const [deletes, setDeletes] = useState(false); 

  const handleClose = () => setHide(false);
  const handleHide = () => setHide(true);
  const reportClose = () => setReport(false);
  const reportHide = () => setReport(true);
  const replyClose = () => setReply(false);
  const replyHide = () => setReply(true);
  const deleteClose = () => setDeletes(false);
  const deleteHide = () => setDeletes(true);
  return (
    <div className="comment-items-wrapper">
      <div className="user-comment-items">
        <div className="media">
          <div className="d-flex">
            <img src={img} alt="" />
            <div className="media-body">
              <div className="d-flex justify-content-between">
              <div className="d-flex">
                <h4 className="sec-title mb-2">
                  {name}
                </h4>
                  <p className="comment-date ms-2 mb-2">May20.2024</p>
              </div>
              <div className="dot-icon-item">
                      <div className="social-icons "onClick={() => setThreedot(!threedot)}>
                      <BsThreeDots />
                      </div>
                      <div className={`dots-icon-dropdowns ${threedot === true ? "d-block": null}`}>
                        <ul>
                            <li onClick={handleHide}><Link to = "#" ><FiEdit /> Editor</Link></li>
                            <li onClick={replyHide}><Link to="#"> <PiBoxArrowUpBold/>Reply</Link></li>
                            <li onClick={reportHide}> <Link to="#" ><FaRegFlag/> Repot </Link></li>
                            <li onClick={deleteHide}> <Link to="#"><AiOutlineDelete/> Delete</Link></li>
                          </ul>
                      </div>

                      <div>
                      </div>
                    </div>
              </div>

              <p className="sec-decs">
               {decs}
              </p>
              <ul>
                <li><Hearticon/></li>
                <li onClick={replyHide}><IoReturnUpBack/> Repoly</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------Modal------------------------ */}
    <Modal show={hide} onHide={handleClose} className="editor-area">
            <Modal.Header closeButton>
              <Modal.Title>Editing comment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <textarea className="editor-input" value={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi consequuntur perferendis maxime quia, quisquam eveniet asperiores fuga laudantium necessitatibus assumenda!'}/>
            </Modal.Body>
            <Modal.Footer>
              <Button  onClick={handleClose}>
                Close
              </Button>
              <Button variant="info" className="model-btn" onClick={handleClose}>
                Submit
              </Button>
            </Modal.Footer>
    </Modal>
    {/* --------------------Modal------------------------ */}
    <Modal show={report} onHide={reportClose} className="report-area">
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
      <Modal show={reply} onHide={replyClose} className="editor-area">
        <Modal.Header closeButton>
          <Modal.Title>Reply</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea className="editor-input" placeholder="Add to discussion"/>
        </Modal.Body>
        <Modal.Footer>
          <Button  onClick={replyClose}>
            Close
          </Button>
          <Button variant="info" className="model-btn" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      {/* --------------------Modal------------------------ */}
      <Modal show={deletes} onHide={deleteClose} className="editor-area">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <h4 className="text-black">Delete Comment</h4>
          <p className="fs-14">Are you sure you want to delete this comment? You cannot undo this action.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button  onClick={deleteClose}>
            Close
          </Button>
          <Button variant="info" className="model-btn" onClick={deleteClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    
  )
}

export default Singlecomment
