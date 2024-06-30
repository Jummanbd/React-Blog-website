
import image from '../../assets/images/newster.png'
const Joninewster = () => {
  return (
    <section className='section--padding'>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="newestes-left">
              <h1 className='sec_title mb-3'>Join our newsletter 🎉</h1>
              <p className="sec_decs">
              Read and share new perspectives on just about any topic. Everyone’s welcome.
              </p>
             <ul>
              <li><span>01</span> Get more discount</li>
              <li><span>02</span> Get primium magazines</li>
             </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="newester-right">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Joninewster
