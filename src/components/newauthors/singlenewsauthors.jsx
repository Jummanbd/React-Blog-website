
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import sectiondata from "../../../store/store";
import Slide from "../common/slider/slider";
const Singlenewsauthors = () => {
  return (
    <section className='newsauthors-area bg-gray-40'>
    <div className="heading-section text-center">
      <h1 className="sec-title pb-4">
        Newest Authors
      </h1>
      <p className="sec_decs  ">Say hello to future creator potentials.</p>
     </div>
     <div className="newest-wrapper">
         <Slide slidesToShow={4} slidesToScroll = {1} arrows=  {true} speed={500} dots = {false}>
        {sectiondata.newestauthors.map((item) => {
          const {id, authorBgImg, authorName, authorImg, jobTitle} = item;
          return(
            <div className="newest-items mt-5" key={id}>
            <Link to='#'>
               <div className="newest-bgimg">
                  <img src={authorBgImg} alt="" />
                  <div className="newest-badge">
                      40 <BsArrowRight />
                  </div>
               </div>
               <div className="newest-body">
                  <div className="media pt-3 d-block align-items-center text-center">
                    <div className="user-img">
                      <img src={authorImg} alt="usersImg" />
                    </div>
                    <div className="newest-body mt-3">
                      <div className="heading--section">
                        <h4 className="sec-title">{authorName}</h4>
                        <p className="sec_decs">{jobTitle}</p>
                      </div>
                    </div>
                  </div>
               </div>
            </Link>
          </div>
          )
        })}

        
         </Slide>

     </div>
    </section>
  )
}

export default Singlenewsauthors
