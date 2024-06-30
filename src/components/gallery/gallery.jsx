
import { Link } from "react-router-dom";
import sectiondata from "../../../store/store";
import gallery01 from '../../assets/images/gallery01.jpg';
import gallery02 from '../../assets/images/gallery02.jpg';
import gallery03 from '../../assets/images/gallery03.jpg';
import gallery04 from '../../assets/images/gallery04.jpg';
import smallimg from '../../assets/images/small-avatar-1.jpg';
import Bookicon from "../common/icons-box/bookicon";
import SlideTwo from "../common/slider/slidertwo";

const Gallery = () => {
  return (
    <section className='margin-top-60 gallery-area'>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                 <div className="heading-section text-start">
                   <h1 className="sec-title pb-4">
                      View more gallery articles 
                   </h1>
                    <p className="sec_decs  ">Click Over 218 articles has gallery type.</p>
                 </div>
                </div>


                <div className="col-lg-6 col-sm-12 gallery-img-wrap">
                  <div className="gallery-img-left mt-4">
                    <div className="gallery-grid-img">
                      <div className="gallery-img">
                        <img src={gallery01} alt="gallery img" className='gallery-img-1' />
                      </div>
                      <div className="gallery-img">
                      <span className='badge-text badge  text-bg-light'>Industial</span>
                        <img src={gallery02} alt="gallery img" className='gallery-img-2'/>
                      </div>
                      <div className="gallery-img">
                      <span className='badge-text2 badge  text-bg-light '><Bookicon /></span>
                        <img src={gallery03} alt="gallery img" className='gallery-img-3'/>
                      </div>
                      <div className="gallery-img">
                        <img src={gallery04} alt="gallery img"className='gallery-img-4' />
                      </div>

                    </div>
                    <div className="gallery-wrap">
                    <h5 className="sec-title line-height-34 fw-semibold mt-2">Lenovo`s smarter devices stoke  professional passions</h5>

                    <div className="media pt-2">
                  <div className="d-flex">
                    <img src={smallimg} alt="img" className="user_img" />
                  </div>
                  <div className="media-body">
                    <div className="heading--section">
                      <h4 className="sec-title">Jumman Ahmed</h4>
                      <ul>
                        <li>May 20.2021</li>
                        <li>
                          2 min read
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-12 gallery-img-wrap">
                  <div className="gallery-img-right mt-4">
                    <div className="gallery-grid-img">
                      <div className="gallery-img">
                        <img src={gallery01} alt="gallery img" className='gallery-img-1' />
                      </div>
                      <div className="gallery-img">
                      <span className='badge-text badge  text-bg-light'>Toole</span>
                        <img src={gallery02} alt="gallery img" className='gallery-img-2'/>
                      </div>
                      <div className="gallery-img">
                      <span className='badge-text2 badge  text-bg-light'><Bookicon /></span>
                        <img src={gallery03} alt="gallery img" className='gallery-img-3'/>
                      </div>
                      <div className="gallery-img">
                        <img src={gallery04} alt="gallery img"className='gallery-img-4' />
                      </div>

                    </div>
                    <div className="gallery-wrap">
                    <h5 className="sec-title line-height-34 fw-semibold mt-2">Lenovo`s smarter devices stoke  professional passions</h5>

                    <div className="media pt-2">
                  <div className="d-flex">
                    <img src={smallimg} alt="img" className="user_img" />
                  </div>
                  <div className="media-body">
                    <div className="heading--section">
                      <h4 className="sec-title">Jumman Ahmed</h4>
                      <ul>
                        <li>May 20.2021</li>
                        <li>
                          2 min read
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <Link className="gallery-card  d-flex flex-wrap">
                    {
                      sectiondata.gallery.map((item) => {
                        const {id, title, usersImag, userTitle, date,galleryimg } = item
                        return(
                          <div className="gallery-items" key={id}>
                            <div className="slider-img">
                                <span className='badge-text badge  text-bg-light'>Industial</span>
                                <span className='badge-text2 badge  text-bg-light'><Bookicon/></span>
                              <SlideTwo slidesToShow={1} slidesToScroll = {1} arrows=  {true} speed={500} dots = {true}>
                                <img src={galleryimg.img1} alt="img" />
                                <img src={galleryimg.img2} alt="img" />
                                <img src={galleryimg.img3} alt="img" />
                                <img src={galleryimg.img4} alt="img" />
                              </SlideTwo>
                             <div className="heading-section mete-heading mt-4">
                              <div className="media">
                                <img src={usersImag} alt="" />
                                <div className="media-body">
                                <h6>{title}</h6>
                                <ul>
                                  <li className="user-title">{userTitle}</li>
                                  <li className="date">{date}</li>
                                </ul>
                              </div>
                              </div>

                             </div>
                            </div>

                          </div>
                        )

                      })
                    }
                  </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Gallery
