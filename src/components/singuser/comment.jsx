
import audioimg01 from '../../assets/images/audio-01.jpg';
import audioimg02 from '../../assets/images/audio-02.jpg';
import audioimg03 from '../../assets/images/audio-03.jpg';
import audioimg04 from '../../assets/images/audio-04.jpg';
import smallimg05 from '../../assets/images/audio-05.jpg';
import smallimg from '../../assets/images/small-avatar-1.jpg';
import smallimg02 from '../../assets/images/small-avatar-2.jpg';
import smallimg03 from '../../assets/images/small-avatar-3.jpg';
import smallimg04 from '../../assets/images/small-avatar-4.jpg';
import Singleaudiocard from '../audio-articles/singleaudiocard';
import Singlecard from '../common/articles/singlecard';
import Singlecomment from './singlecomment';
const Comment = () => {
  return (
    <div className='comment-wrapper '>
         <div className="media">
        <div className="d-flex">
            <img src={smallimg} alt="" />
        </div>
        <div className="media-body">
            <h4 className="sec-title">Bireell Chariot</h4>
            <p className='sec-decs mt-1'>There’s no stopping the tech giant. Apple now opens its 100th store in China.There’s no stopping the tech giant.</p>
        </div>
    </div>
    <div className="resp-wrap">
        <h4 className='sec-title'>Responses(10)</h4>
        <textarea placeholder='add discussion' className='my-4 resp-textarea'></textarea>
        <div className="res-btn">
        <button className="theme-btn">Submit</button>
        <button className='theme-btn'>Cancle</button>
        </div>
    </div>
     <Singlecomment img={smallimg03} name={"Joh Don"} decs={" tech giant. Apple now opens its 100th store in China.There’s no stopping the tech giant."}/>
     <Singlecomment img={smallimg02} name={"Don Wins"} decs={'tech giant. Apple now opens its 100th store in China.There’s no stopping the tech giant.'}/>
     <Singlecomment img={smallimg03} name={"Don Wins"} decs={"tech giant. Apple now opens its 100th store in China.There’s no stopping the tech giant."}/>
     <Singlecomment img={smallimg04} name={"Don Wins"} decs={"tech giant. Apple now opens its 100th store in China.There’s no stopping the tech giant."}/>
     <Singlecomment img={smallimg05} name={"Don Wins"} decs={"tech giant. Apple now opens its 100th store in China.There’s no stopping the tech giant."}/>
     <button className='theme-btn comment--btn'>
      View full comments (+17 comments)
     </button>
     <section className='section--top'>
      <div className='container'>

    
     <div className="row mb-4">
         <div className="col-lg-12">
         <div className="heading-section text-start">
            <h1 className="sec-title pb-4">
             Related Posts
            </h1>
            </div>
         </div>
      </div>
       <div className="row">
         <div className="col-lg-3 col-md-6">
         <Singlecard title={"WNBA’s Sabrina Ionescu teams up with Xbox to empower young girls to pursue their hoop dreams "} img={audioimg01} userimg={smallimg} username={"Foulcher Nath"} postdate={'May 20,2024'}/>
         </div>

         <div className="col-lg-3 col-md-6">
         <Singlecard title={"WNBA’s Sabrina Ionescu teams up with Xbox to empower young girls to pursue their hoop dreams "} img={audioimg02} userimg={smallimg02} username={"Foulcher Nath"} postdate={'May 20,2024'}/>
         </div>

         <div className="col-lg-3 col-md-6">
         <Singlecard title={"WNBA’s Sabrina Ionescu teams up with Xbox to empower young girls to pursue their hoop dreams "} img={audioimg03} userimg={smallimg03} username={"Foulcher Nath"} postdate={'May 20,2024'}/>
         </div>

         <div className="col-lg-3 col-md-6">
         <Singlecard title={"WNBA’s Sabrina Ionescu teams up with Xbox to empower young girls to pursue their hoop dreams "} img={audioimg04} userimg={smallimg04} username={"Foulcher Nath"} postdate={'May 20,2024'}/>
         </div>
       </div>
       </div>
     </section>
     <section className='section--top'>
       <div className="container">
         <div className="row">
         <div className="col-lg-12">
         <div className="heading-section text-start">
            <h1 className="sec-title pb-4">
             More from author
            </h1>
            </div>
         </div>
         </div>

         <div className="row">
           <div className="col-lg-3 col-md-6">
             <Singleaudiocard title={"New tools and advocacy support Black Pregnant annary "} audiobgimg={audioimg01} badge={"Industrial"} place={"Foulcher Nath"} date={"May 20,2024"}/>
           </div>
           <div className="col-lg-3 col-md-6">
             <Singleaudiocard title={"New tools and advocacy support Black Pregnant annary "} audiobgimg={audioimg02} badge={"Toole"} place={"Foulcher Nath"} date={"May 20,2024"}/>
           </div>
           <div className="col-lg-3 col-md-6">
             <Singleaudiocard title={"New tools and advocacy support Black Pregnant annary "} audiobgimg={audioimg03} badge={"Electronics"} place={"Foulcher Nath"} date={"May 20,2024"}/>
           </div>
           <div className="col-lg-3 col-md-6">
             <Singleaudiocard title={"New tools and advocacy support Black Pregnant annary "} audiobgimg={audioimg04} badge={"Industrial"} place={"Foulcher Nath"} date={"May 20,2024"}/>
           </div>
         </div>
       </div>
     </section>
    </div>

  )
}

export default Comment
