
import heroimg3 from '../../assets/images/hero-right3.png'
const Hemebannerthree = () => {
  return (
    <section className="section--padding hero-three-area">
        <div className="container">
            <div className="row">
              <div className="col-lg-5">
                 <div className="heading-section hero-three-section">
                   <h1 className="sec-title  pb-4">
                      Far from face <br /> but  not from heart
                     </h1>
                      <p className="sec_decs  ">Let stay at home and share with everyone the most beautiful stories in your hometown 🎈</p>
                      <button className="theme-btn mt-4">
                      Getting Started
                     </button>
                 </div>
              </div>
              <div className="col-lg-7">
                <div className="img-right">
                    <img src={heroimg3} alt="img" />
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Hemebannerthree
