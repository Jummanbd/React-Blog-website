import { Link } from "react-router-dom";
import GeneralHeader from "../../components/common/navbar/GeneralHeader";
const Forgotpassword = () => {
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
                      Forgot password
                      </h1>
                      <p className="sec_decs  ">Welcome to our blog magazine Community.</p>
                  </div>
              </div>
          </div>

          <div className="row">
            <div className="col-lg-12 ">
              <div className="continue-wrap mx-auto">
              <div className="deshboard-from-item mt-4">
                  <label htmlFor="exampleFormControlInput1" className="form-label fw-medium">Email address *</label>
                 <input type="text" className="form-control py-2 px-3" placeholder="example@example.com"/>
              </div>
             <button className="theme-btn submit-btn mt-4 w-100">Continue</button>
              <p className="text-center mt-4">Go back for  <Link to={"/login"}>Sign in</Link> / <Link to={"/signup"}>Sign up</Link></p>
              </div>
            </div>
          </div>
       </div>
      </div>
    </section>
  </main>
  )
}

export default Forgotpassword
