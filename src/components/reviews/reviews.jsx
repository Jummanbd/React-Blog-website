
import { Rating } from 'react-simple-star-rating'
const Reviewed = () => {
   
  return (
    <>
    <div
  style={{
    direction: 'ltr',
    fontFamily: 'sans-serif',
    touchAction: 'none',
    }}
    className='review-start'
>
  <Rating
    allowFraction
    onClick={function noRefCheck(){}}
    showTooltip
    className='d-block'
    tooltipArray={[
      'Terrible',
      'Terrible+',
      'Bad',
      'Bad+',
      'Average',
      'Average+',
      'Great',
      'Great+',
      'Awesome',
      'Awesome+'
    ]}
    transition
  />
</div>
    </>
  )
}

export default Reviewed
