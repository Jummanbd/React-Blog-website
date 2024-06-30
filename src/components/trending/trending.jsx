import Singletrending from "./singletrending";

const trending = () => {
  return (
    <section className='trending-area section--padding'>
      <div className="container">
         <div className="row">
           <div className="col-lg-12">
           <div className="heading-section text-start">
             <h1 className="sec-title pb-4">
              Top trending topics
             </h1>
             <p className="sec_decs  ">Discover 233 topics.</p>
             </div>
             <div className="trending-wrapper">
            <Singletrending/>
            </div>
           </div>
         </div>
      </div>
    </section>
  )
}

export default trending
