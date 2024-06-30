
import { RiMessage2Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import sectiondata from '../../../store/store';
import Bookicon from '../common/icons-box/bookicon';
import Hearticon from '../common/icons-box/hearticon';
import Slide from '../common/slider/slider';
const Seatraveltwo = () => {
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

                  <div className="aduio-wrapper">
                    <Slide slidesToShow={4} slidesToScroll = {1} arrows=  {true} speed={500} dots = {false}>
                    {sectiondata.seatraveltwo.map((item) => {
                            const {id,  images, badge, title, place, date} = item;
                            return(
                                <Link to="#" className="aduio-items" key={id}>
                                <div className="aduio-bgimg">
                                <img src={images} alt="audio" />
                                <div className="aduio-wrap-icons">
                                    <div className=" align-items-center aduio-item-icons  d-flex justify-content-between">
                                    <div className="aduio-left-icons d-flex">
                                    <div className="aduio-icons me-3 ms-2 mt-2" >
                                        <Hearticon/>
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
                                <div className="aduio-wrap">
                                {badge ? <span className=' badge text-bg-light '>{badge}</span> : ""}
                                <h3 className="sec-title my-2">{title}</h3>
                                <ul>
                                    <li>{place}</li>
                                    <li>{date}</li>
                                </ul>
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

export default Seatraveltwo
