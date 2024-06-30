
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
import sectiondata from "../../../../store/store";
const Modales = () => {
  const [categori, setCategori] = useState(false);
  const [tags, setTags] = useState(false);
  const [recent, setRecent] = useState(false);

  const handleClose = () => setCategori(false);
  const handleHide = () => setCategori(true);
  const tagsClose = () => setTags(false);
  const tagsHide = () => setTags(true);
  const recentClose = () => setRecent(false);
  const recentHide = () => setRecent(true);
  return (
    <>
   <div className="garden--wrap">
     <div className="garden--btn d-flex justify-content-between align-items-center">
      <div className="garden-btn-left ">
        <button className='theme-btn me-3' onClick={handleHide}>Other Categories</button>
        <button className='theme-btn' onClick={tagsHide}>Other Tags</button>
      </div>
      <div className="garden-btn-right ">
        <button className='theme-btn me-3' onClick={recentHide}>Most Recent</button>
      </div>
     </div>
  </div>

  
      {/* --------------------Modal------------------------ */}
      <Modal show={categori} onHide={handleClose} className="categori-model"  dialogClassName="modal-60w">
            <Modal.Header closeButton>
              <Modal.Title>Discover other categories</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="categori-wrapper">
                {sectiondata.category.map((item) => {
                  const {id, images,title, decs } = item
                  return(
                    <div className="categori-items" key={id}>
                     <div className="media">
                    <div className="d-flex">
                      <img src={images} alt="img" />
                    </div>
                    <div className="media-body">
                    <div className="heading--section ms-3">
                       <h4 className="sec-title">{title}</h4>
                       <p className="sec_decs">{decs}</p>
                    </div>
                    </div>
                 </div>
                    </div>
                  )
                })}

              </div>
            </Modal.Body>
    </Modal>
    {/* --------------------Modal------------------------ */}
    <Modal show={tags} onHide={tagsClose} className="categori-model"  dialogClassName="modal-60w" >
            <Modal.Header closeButton>
              <Modal.Title className="text-center">Discover Other tags</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="tags-wrap">
                <ul>
                  <li>
                    <Link>Garden(13)</Link>
                  </li>
                  <li>
                    <Link>Jewelry(16)</Link>
                  </li>
                  <li>
                    <Link>Industrial(15)</Link>
                  </li>
                  <li>
                    <Link>Tools(21)</Link>
                  </li>
                  <li>
                    <Link>Automotive(16)</Link>
                  </li>
                  <li>
                    <Link>Toys(25)</Link>
                  </li>
                  <li>
                    <Link>Outdoors(14)</Link>
                  </li>
                  <li>
                    <Link>Health(14)</Link>
                  </li>
                  <li>
                    <Link>Electronics(7)</Link>
                  </li>
                  <li>
                    <Link>Industrial(26)</Link>
                  </li>
                  <li>
                    <Link>Health(20)</Link>
                  </li>
                  <li>
                    <Link>Toys(22)</Link>
                  </li>
                  <li>
                    <Link>Sports(15)</Link>
                  </li>
                  <li>
                    <Link>Automotive(26)</Link>
                  </li>
                  <li>
                    <Link>Computers(28)</Link>
                  </li>
                  <li>
                    <Link>Design(15)</Link>
                  </li>
                  <li>
                    <Link>Beauty(27)</Link>
                  </li>
                  <li>
                    <Link>Books(25)</Link>
                  </li>
                  <li>
                    <Link>Codes(23)</Link>
                  </li>
                  <li>
                    <Link>Graphic Design(22)</Link>
                  </li>

                </ul>
              </div>
            </Modal.Body>
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
    </>

  )
}

export default Modales
