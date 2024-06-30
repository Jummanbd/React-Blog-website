
import GeneralHeader from '../../components/common/navbar/GeneralHeader';
import Pading from '../../components/common/pading/pading';
import Editorpicks from '../../components/editorpicks/editorpicks';
import Footer from '../../components/footer/footer';
import Joninewster from '../../components/newauthors/joninewster';
import Seatravel from "../../components/travel/seatravel";
import Trendingthree from "../../components/trending/trendingthree";
import Singlevideo from '../../components/videoarticles/singlevideo';

const CategoryVideo = () => {
  return (
    <main>
      <GeneralHeader/>
      <section className='section--padding category-video-area'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading-section text-center">
              <h1 className="sec-title pb-2">
                  Video
              </h1>
                <p className="sec_decs  ">115 Podcast</p>
               </div>
            </div>
          </div>
        </div>
        <div className="container">
         <Singlevideo/>
         <Pading/>
        </div>
      </section>
      <Seatravel/>
         <Trendingthree/>
         <Editorpicks/>
         <Joninewster/>
        <Footer className={'footer-areatwo'}/>

    </main>
  )
}

export default CategoryVideo
