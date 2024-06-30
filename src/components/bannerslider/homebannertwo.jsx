
import { Link } from 'react-router-dom'
import sectiondata from '../../../store/store'
import Singleuser from '../singuser/singleuser'
const Homebannertwo = () => {
  return (
    <section className='section--padding hero-two-area'>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 p-0">
                    {sectiondata.herobanners02.map((item) => {
                        const {id, bannerImg, title, decs,btn} = item;
                        return(
                            <div className="hero-two-wrapper" key={id}>
                            <img src={bannerImg} className='bannerhero-bg' alt="img" />
                            <div className="overlay"></div>
                            <div className="hero-two-wrap">
                                <div className="heading-section text-start">
                                    <h1 className="sec-title pb-4">{title}</h1>
                                    <p className="sec_decs  ">{decs}</p>
                                </div>
                                <button className='theme-btn mt-4'>
                                    {btn}
                                </button>
                            </div>
                           
                        </div>
                        )
                    })}

                    
                </div>
                <div className="user-Items-wrapper">
                   
                    {sectiondata.herobanners02.map((item) => {
                        const {userItems} = item;
                        return(
                            userItems.map((itemss) => {
                                const {id, title, badge, usersImag, userTitle, postdate} = itemss;
                                console.log(title);
                                return(
                                    <Link key={id} ><Singleuser  title={title}  badge={badge} usersImag={usersImag} userTitle={userTitle} postdate={postdate} /> </Link>
                                )
                            })
                        )
                    })}
                  
                </div>
            </div>
        </div>
    </section>
  )
}

export default Homebannertwo
