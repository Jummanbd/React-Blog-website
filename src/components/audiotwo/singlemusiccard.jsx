import { Link } from 'react-router-dom'
import sectiondata from '../../../store/store'
const Singlemusiccard = () => {
  return (
   <div className='music--wrpper'>
   {sectiondata.singlemusiccard.map((item) => {
    const {id, title, images, playtime, episode} = item
    return(
      <Link to={'/singles-page-audio'} key={id}>
      <div className="audio-card">
          <div className="media">
            <div className="d-flex">
              <img src={images} alt="img" />
            </div>
            <div className="media-body">
              <h3 className="sec-title mb-1">
                  {title}
              </h3>
              <ul>
                  <li>{episode}</li>
                  <li>{playtime}</li>
              </ul>
            </div>
          </div>
      </div>
      </Link>
    )
   })}
   </div>

  )
}

export default Singlemusiccard
