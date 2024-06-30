import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import sectiondata from '../../../store/store';

function Sliders() {
  const [people, setPeople] = useState(sectiondata.headermenu);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);


  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="hero-slider-track">
              {sectiondata.herobanners.map((person, personIndex) =>{
              
                const {id, badgeText, title, usersImag, userTitle, userDecs, bannerImg,heartIcon, commentIcon, heartCount, commentCount} = person;

                let position = 'nextSlide';
                if (personIndex === index) {
                 position = 'activeSlide';
                 }
                if (
                  personIndex === index - 1 ||
                  (index === 0 && personIndex === people.length - 1)
                 ) {
                  position = 'lastSlide';
                }
                 return(
                  <article className={position} key={id} >
                    <div className="slider-item d-flex margin-top-60">
                  <div className="hero-wrap" >
                    <div className="card-item">
                    <span className="badge rounded-pill text-bg-warning">{badgeText}</span>
                    <Link to='#' className="heading-section">
                      <h3 className="sec-title line-height-34 fw-semibold mt-4">
                        {title}</h3>
                    </Link>
                    <div className="media pt-3">
                      <div className="d-flex">
                        <img src={usersImag} alt="" />
                      </div>
                      <div className="media-body">
                        <div className="heading--section">
                          <h4 className="sec-title">{userTitle}</h4>
                          <p className="sec_decs">{userDecs}</p>
                        </div>
                      </div>
                    </div>
                      <ul className="mate-icons mt-4">
                        <li className="mate-icon-item-1">{heartIcon} {heartCount}</li>
                        <li className="mate-icon-item-2">{commentIcon} {commentCount}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="hero-wrap-img">
                    <img src={bannerImg} alt="hero" />
                  </div>
                    </div>
                  </article>
                 )
                })}
                <button className="prev silder-btn" onClick={() => setIndex(index - 1)}>
                <FiChevronRight />
                </button>
                <button className="next silder-btn" onClick={() => setIndex(index + 1)}>
                <FiChevronLeft />
                
                </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}


export default Sliders; 