
import sectiondata from '../../../store/store';
import Slide from '../common/slider/slider';
import Singleaudiocard from "./singleaudiocard";
const Singleadio = () => {
  return (
    <div className="aduio-wrapper">
      <Slide slidesToShow={4} slidesToScroll = {1} arrows=  {true} speed={500} dots = {false}>
      {sectiondata.audioarticles.map((item) => {
            const {id,  audiobgimg, badge, title, place, date} = item;
            return(
              <Singleaudiocard key={id} id={id} audiobgimg={audiobgimg} badge={badge} title={title} place={place} date={date}/>
            )
        })}
      </Slide>
    </div>
  )
}

export default Singleadio
