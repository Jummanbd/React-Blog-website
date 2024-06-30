import Singleadio from "./singleadio"


const audio = () => {
  return (
    <section className="section--padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                 <div className="heading-section text-center">
                  <h1 className="sec-title pb-4">
                    Explore latest audio articles 
                  </h1>
                  <p className="sec_decs  ">Click on the icon to enjoy the music or podcast.</p>
                  </div>
                  <Singleadio/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default audio
