import authorbanner from '../../assets/images/BecomeAnAuthor.png';
const Authorbanner = () => {
  return (
    <section className='section--padding authors-banner-area'>
        <div className="container">
            <div className="authors-banner-wrap">
            <div className="row">
                <div className="col-lg-6">
                    <div className="authore-banner-left ">  
                        <p className="meta-decs mb-3">SUPPER CHANGE YOUR PLANNING POWERS</p>
                        <h1 className='sec_title mb-3'>Become an author and share your great stories.</h1>
                        <p className="sec_decs">
                        Become an author you can earn extra income by writing articles. Read and share new perspectives on just about any topic. Everyone’s welcome.
                        </p>
                        <button className="theme-btn mt-3">
                            Become an author
                        </button>
                      
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="authore-banner-right">
                        <img src={authorbanner} alt="img" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Authorbanner;
