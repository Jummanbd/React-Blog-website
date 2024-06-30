import GeneralHeader from '../../components/common/navbar/GeneralHeader'
import Footer from '../../components/footer/footer'
import Joninewster from '../../components/newauthors/joninewster'

const Contact = () => {
  return (
    <main>
     <GeneralHeader/>
      <section className="section--padding">
        <div className="container">
         <div className="deshboard-wrapper">
            <div className="row">
                <div className="col-lg-12">
                    <div className="heading-section text-center mb-4">
                        <h1 className="sec-title fw-bold pb-3">
                        Contact us
                        </h1>
                        <p className="sec_decs  ">Drop us message and we will get back for you.</p>
                    </div>
                </div>
            </div>

            <div className="contact-wrap">
              <div className="row">
                <div className="col-lg-4">
                <div className="heading-section  mb-3">
                        <h1 className="sec-title fw-bold pb-2">
                        🗺 ADDRESS
                        </h1>
                        <p className="sec_decs  ">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter.</p>
                </div>

                <div className="heading-section  mb-3">
                    <h1 className="sec-title fw-bold pb-2">
                    💌 EMAIL
                    </h1>
                    <p className="sec_decs  ">nc.example@example.com.</p>
                </div>

                <div className="heading-section  mb-3">
                    <h1 className="sec-title fw-bold pb-2">
                    ☎ PHONE
                    </h1>
                    <p className="sec_decs">000-123-456-7890</p>
                </div>
                </div>
                <div className="col-lg-7 ms-auto">

                    <div className="deshboard-from-item mt-4">
                    <label htmlFor="exampleFormControlInput1" className="form-label fw-medium">Full name *</label>
                    <input type="text" className="form-control py-2 px-3" placeholder='Example Doe'/>
                    </div>

                    <div className="deshboard-from-item mt-4">
                    <label htmlFor="exampleFormControlInput1" className="form-label fw-medium">Email address *</label>
                    <input type="text" className="form-control py-2 px-3" placeholder='example@example.com'/>
                    </div>

                    <div className="deshboard-from-item mt-4">
                    <label htmlFor="exampleFormControlInput1" className="form-label fw-medium">Message *</label>
                    <textarea className="form-control mt-0"rows="5"></textarea>
                    </div>

                    <button className="theme-btn submit-btn mt-4 w-100">Sumit post</button>
                </div>
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

export default Contact
