import { BsArrowRight } from "react-icons/bs";
import sectiondata from "../../../store/store";
const Topauthors = () => {
  return (
    <section className='section--padding authore-area'>
      <div className="container">
      <div className="row">
            <div className="col-lg-12">
            <div className="heading-section text-center">
                  <h1 className="sec-title pb-4">
                    Top 10 author of the month
                  </h1>
                  <p className="sec_decs">Rating based on customer reviews.</p>
            </div>
                  <div className="authors-wrapper">
                  {sectiondata.topauthor.map((item) => {
                    const {id, authorImg, authorName, jobTitle} = item
                    return(
                      <div className="author-item" key={id}>
                      <div className="newest-body ">
                        <div className="d-block">
                          <div className="user-img mt-0 mb-2" >
                            <img src={authorImg} alt="usersImg" />
                          </div>
                          <div className="newest-body mt-1 p-0">
                            <div className="heading--section">
                              <h4 className="sec-title mb-1">{authorName}</h4>
                              <p className="sec_decs">{jobTitle}</p>
                            </div>
                            <div className="author-icons mt-2">
                              <p> 43 <BsArrowRight /></p>
                            </div>
                          </div>
                        </div>
                     </div>
                      </div>
                    )
                  })}
                  </div>

            </div>
        </div>
      </div>

    </section>
  )
}

export default Topauthors
