import { BsArrowRight } from "react-icons/bs";
import sectiondata from "../../../store/store";
import Slide from "../common/slider/slider";
const Trendingtwo = () => {
  return (
    <section className='trending-area section--top'>
      <div className="container">
         <div className="row">
           <div className="col-lg-12">
           <div className="heading-section text-start">
             <h1 className="sec-title pb-4">
              Top trending topics
             </h1>
             <p className="sec_decs  ">Discover 233 topics.</p>
             </div>
             <div className="trending-two-wrapper mt-4">
             <Slide slidesToShow={5} slidesToScroll = {1} arrows=  {true} speed={500} dots = {false}>
                {sectiondata.trendingtwo.map((item) => {
                    const {id, images, title, badge} = item;
                    return(
                        <div className="trending-items" key={id}>
                        <img src={images} alt="img" />
                        <div className="trending-text">
                           <span className= {`badge-right ${id === 1 ? "badge-text1"
               : id === 2 ? "badge-text2" 
               : id === 3 ?"badge-text3" : id === 4 ? "badge-text4"
               : id === 5 ? "badge-text5" 
               : id === 6 ?"badge-text6" : ""}`}>{badge} <BsArrowRight/></span>
                           <h4>{title}</h4>
                        </div>
                      </div>
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

export default Trendingtwo
