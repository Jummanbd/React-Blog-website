import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// eslint-disable-next-line react/prop-types
const SlideTwo = ({ children, slidesToShow, slidesToScroll , arrows, dots, centerPadding, fade, waitForAnimate, infinite, speed }) => {

    const slide_responsivetwo = {
        responsive: [

          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            }
          },

        ]
      }

  function NextBtn(props) {
    // eslint-disable-next-line react/prop-types, no-unused-vars
    const {className,  onClick} = props
    return (
        <div
            className="arrow-next arrow"  
            onClick={onClick}>
            <SlArrowRight/>
        </div>
    );
}

function PrevBtn(props) {
  
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const {className, onClick} = props
  return (
      <div
          className="arrow-prev arrow"
          onClick={onClick}>
          < SlArrowLeft/>
      </div>
  );
}
  return (
    <div className="slide">
        <div className="slide-wrap">
        <Slider { ...slide_responsivetwo} slidesToShow={slidesToShow} slidesToScroll = {slidesToScroll} arrows=  {arrows} speed={speed} dots = {dots} centerPadding = {centerPadding} fade ={fade} waitForAnimate = {waitForAnimate} infinite = {infinite}  nextArrow={<NextBtn/> }  prevArrow ={<PrevBtn/>}>
          {children}
          </Slider>
        </div>
    </div>
  )
}

export default SlideTwo;