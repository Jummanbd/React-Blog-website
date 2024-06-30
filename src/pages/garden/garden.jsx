import heroimg from '../../assets/images/hero-4.jpg';
import Modales from "../../components/common/categorymodales/modales";
import GeneralHeader from "../../components/common/navbar/GeneralHeader";
import Pading from '../../components/common/pading/pading';
import Footer from "../../components/footer/footer";
import Joninewster from "../../components/newauthors/joninewster";
import Newsauthors from "../../components/newauthors/newsauthors";
import Gardencard from "../../components/other/gardencard";
import Trendingthree from "../../components/trending/trendingthree";
const Garden = () => {

  return (
    <main>
     <GeneralHeader/>
     <section className="section--padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 p-0">
                   <div className="garden--werp">
                    <img src={heroimg} alt="img" />
                     <div className="overlay"></div>
                    <div className="garden-text">
                      <div className="heading-section text-center">
                    <h1 className="sec-title pb-2">
                        Garden 
                    </h1>
                      <p className="sec_decs  ">115 Articles</p>
                    </div>
                    </div>
                   </div>
                </div>
            </div>
            <Modales/>
            <Gardencard/>
            <Pading/>
        </div>
     </section>
     <Trendingthree/>
     <Newsauthors/>
     <Joninewster/>
     <Footer className={'footer-areatwo'}/>
     
    </main>
  )
}

export default Garden
