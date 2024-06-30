import Singlevideo from "./singlevideo";


const Video = () => {
  return (
    <div className="section--padding vedio-area margin-top-60">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="heading-section text-center">
                  <h1 className="sec-title pb-4">
                    Explore latest video articles 
                  </h1>
                  <p className="sec_decs  ">Haver on the post card and preview video.</p>
                  </div>
                  <Singlevideo/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Video;
