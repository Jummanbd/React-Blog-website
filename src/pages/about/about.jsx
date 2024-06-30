import img01 from '../../assets/images/founder01.jpg';
import img02 from '../../assets/images/founder02.jpg';
import img03 from '../../assets/images/founder03.jpg';
import img04 from '../../assets/images/founder04.jpg';
import heroImg from '../../assets/images/hero-right3.png';
import GeneralHeader from "../../components/common/navbar/GeneralHeader";
import Footer from '../../components/footer/footer';
import Joninewster from '../../components/newauthors/joninewster';
const About = () => {
  return (
    <main>
       <GeneralHeader/>
      <section className='section--padding'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
               <div className="heading-section text-start mb-4">
                <h1 className="sec-title pb-4">
                   👋 About Us.
                </h1>
                <p className="sec_decs  ">We’re impartial and independent, and every day we create distinctive, world-class programmes and content which inform, educate and entertain millions of people in the around the world.</p>
               </div>
            </div>
            <div className="col-lg-6">
               <div className="img-right">
                  <img src={heroImg} alt="img" />
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className='padding-top-30 padding-bottom-65'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
            <div className="heading-section text-start mb-4">
                <h1 className="sec-title pb-4">
                  ⛱ Founder
                </h1>
                <p className="sec_decs  ">We’re impartial and independent, and every day we create distinctive, world-class programmes and content.</p>
               </div>
            </div>  
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="founder-item">
                <div className="founder-img">
                  <img src={img01} alt="img" />
                </div>
                <div className="founder-wrap">
                  <h3 className="sec-title mt-4">
                    Niamh O`Shea
                  </h3>
                  <p className="sec_decs">Co-founder and Chief Executive</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="founder-item">
                <div className="founder-img">
                  <img src={img02} alt="img" />
                </div>
                <div className="founder-wrap">
                  <h3 className="sec-title mt-4">
                    Danien Jame
                  </h3>
                  <p className="sec_decs">Co-founder and Chief Executive</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="founder-item">
                <div className="founder-img">
                  <img src={img03} alt="img" />
                </div>
                <div className="founder-wrap">
                  <h3 className="sec-title mt-4">
                    Orla Dwyer
                  </h3>
                  <p className="sec_decs">Co-founder and Chief Executive</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="founder-item">
                <div className="founder-img">
                  <img src={img04} alt="img" />
                </div>
                <div className="founder-wrap">
                  <h3 className="sec-title mt-4">
                    Dara Frazier
                  </h3>
                  <p className="sec_decs">Co-founder and Chief Executive</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section className='section--padding facts-area'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="heading-section text-start mb-4">
                  <h1 className="sec-title pb-4">
                  🚀 Fast Facts
                  </h1>
                  <p className="sec_decs  ">We’re impartial and independent, and every day we create distinctive, world-class programmes and content.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="facts-item">
                <h2 className="sec-title mb-2">
                  10 million
                </h2>
                <p className="sec_decs">
                  Articles have been public around the world (as of Sept. 30, 2021)
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="facts-item">
                <h2 className="sec-title mb-2">
                  10,000
                </h2>
                <p className="sec_decs">
                  Registered users account (as of Sept. 30, 2021)
                </p>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="facts-item">
                <h2 className="sec-title mb-2">
                  220+
                </h2>
                <p className="sec_decs">
                  Countries and regions have our presence (as of Sept. 30, 2021)
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>
      <Joninewster/>
      <Footer className={'footer-areatwo'}/>
      
    </main>
  )
}

export default About
