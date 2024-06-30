import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import GeneralHeader from "../../components/common/navbar/GeneralHeader";
const Login = () => {
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
                        Login
                        </h1>
                        <p className="sec_decs  ">Welcome to our blog magazine Community.</p>
                    </div>
                </div>
            </div>

            <div className="row">
              <div className="col-lg-12 ">
                <div className="continue-wrap mx-auto">
                <Link className="d-flex  continue-item">
                   <p className="flex-shrink-0"><FaFacebook/></p>
                   <p className="flex-grow-1 text-center">Continue with Facebook</p>
                </Link>

                <Link className="d-flex  continue-item">
                  <FaSquareXTwitter/>
                  <p className="flex-grow-1 text-center">Continue with Twitter</p>
                </Link>

                <Link className="d-flex  continue-item">
                  <FcGoogle/>
                  <p className="flex-grow-1 text-center">Continue with Google</p>
                </Link>
                <p className="or-overlay text-center fw-medium">OR</p>

                <div className="deshboard-from-item mt-4">
                    <label htmlFor="exampleFormControlInput1" className="form-label fw-medium">Email address *</label>
                   <input type="text" className="form-control py-2 px-3" placeholder="example@example.com"/>
                </div>

                <div className="deshboard-from-item mt-4">
                    <div className="d-flex justify-content-between flex-wrap">
                      <label htmlFor="exampleFormControlInput1" className="form-label fw-medium">Email address *</label>
                      <Link to={"/forgot"}>
                        Forgot password
                      </Link>
                    </div>
                   <input type="text" className="form-control py-2 px-3" placeholder="example@example.com"/>
                </div>
               <button className="theme-btn submit-btn mt-4 w-100">Continue</button>
               <p className="text-center mt-4">New user?<Link to={'/signup'}>Create an account</Link></p>
                </div>
              </div>
            </div>
         </div>
        </div>
      </section>
    </main>
  )
}

export default Login
