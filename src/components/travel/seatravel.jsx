
import { RiMessage2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import sectiondata from "../../../store/store";
import Bookicon from '../common/icons-box/bookicon';
import Hearticon from '../common/icons-box/hearticon';
import Slide from "../common/slider/slider";
import Singleuser from '../singuser/singleuser';
const Seatravel = () => {
  return (
    <section className='section--top travel-area'>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="heading-section text-center">
                <h1 className="sec-title pb-4">
                Sea travel enthusiast
                </h1>
                <p className="sec_decs  ">Over 218 articles about sea travel.</p>
                  </div>
                  <div className="travel-wrapper">
                  <Slide slidesToShow={4} slidesToScroll = {1} arrows=  {true} speed={500} dots = {false}>

                  
                    {sectiondata.seatravel.map((item) => {
                        const {id, title, badge, userTitle, usersImag, postdate,bgImages}  = item
                        return (
                            <Link to="#" key={id}>
                            <div className="travel-item" >
                            <img src={bgImages} alt="img" className='travel-bg'/>
                            <div className="overlay"></div>
                            <Singleuser title={title} badge={badge}  usersImag = {usersImag} userTitle={userTitle} postdate={postdate}/>
                            <div className="aduio-item-icons  d-flex justify-content-between">
                          <div className="aduio-left-icons d-flex">
                           <div className="aduio-icons me-3 ms-2 mt-2" >
                            <Hearticon />
                          </div>
                          <div className="aduio-icons me-3 ms-2 mt-2" >
                           <RiMessage2Line /> 120
                          </div>
                          </div>
                        <div className="aduio-right-icons aduio-icons  me-3 mt-2" >
                        <Bookicon />
                        </div>
                        </div>
                         </div>
                         </Link>
                        )
                    })}
                    </Slide>
                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Seatravel
