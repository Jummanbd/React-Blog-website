import Audio from "../../components/audio-articles/audio";
import Authorbanner from "../../components/authorbannar/authorbanner";
import Sliders from "../../components/bannerslider/slieders";
import GeneralHeader from "../../components/common/navbar/GeneralHeader";
import Footer from "../../components/footer/footer";
import Gallery from "../../components/gallery/gallery";
import Newsauthors from "../../components/newauthors/newsauthors";
import Topauthors from "../../components/topauthors/authors";
import Trending from "../../components/trending/trending";
import Video from "../../components/videoarticles/video";
const Home = () => {
 
  return (
    <main >
      <GeneralHeader/>
     
      <div className="container">
      <div className="row">
        <div className="col-lg-12">
          
          <div className="hero-wrapper" 
            >
            <div className="heading-section">
              <h1 className="sec-title pb-4">
                Editor`s Pick
              </h1>
              <p className="sec_decs  ">Discover the most outstanding articles in all topics of life.</p>
            </div>

          </div>
        </div>
       </div>
      </div>
      <Sliders/>
      <Newsauthors/>
      <Trending/>
      <Audio/>
      <Gallery/>
      <Video/>
      <Topauthors/>
      <Authorbanner/>
      <Footer className={'footer--area'}/>
    </main>

  )
}

export default Home;
