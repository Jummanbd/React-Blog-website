import Sidebarleft from './sidebarleft'
import Sidebarright from './sidebarright'

const Sidebar = () => {
  return (
    <section className='section--padding'>
     <div className="container">
        <div className="row">
            <div className="col-lg-7">
             <Sidebarleft/>
            </div>
            <div className="col-lg-5">
              <Sidebarright/>
            </div>
        </div>
     </div>
    </section>
  )
}

export default Sidebar
