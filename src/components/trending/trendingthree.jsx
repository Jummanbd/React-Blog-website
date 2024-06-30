
import { Link } from 'react-router-dom';
import sectiondata from '../../../store/store';
const Trendingthree = () => {
  return (
    <section className='section--padding trending-three-area'>
        <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="heading-section text-start">
                   <h1 className="sec-title pb-4">
                    Top trending topics
                  </h1>
                  <p className="sec_decs  ">Discover 233 topics.</p>
                </div>
               </div>
               <div className="trendingthree-wrapper">
                {sectiondata.trending.map((item) => {
                    const{id,badgeText, images, title ,decs } = item;
                    return(
                        <div className="top-trending-item mt-3" key={id}>
                        <Link to={"#"} className="top-trending-wrap">
                            <span className='badge trend-badge1'>{badgeText}</span>
                            <img src={images} alt="img" />
                            <div className="heading--section ms-2">
                            <h4 className="sec-title mt-3">{title}</h4>
                            <p className="sec_decs mt-1">{decs}</p>
                            </div>
                        </Link>
                    </div>
                    )
                })}

               </div>
            </div>
        </div>
    </section>
  )
}

export default Trendingthree
