
import { Link } from 'react-router-dom';
import useimg from '../../assets/images/small-avatar-1.jpg';
import Singleuser from '../singuser/singleuser';
const Editorpicks = () => {
  return (
    <section className='section--padding'>
      <div className="container">
        <div className="row">
        <div className="col-log-12">
            <div className="heading-section text-start mb-4">
             <h1 className="sec-title pb-4">
            🧩 Editor Picks
            </h1>
            <p className="sec_decs  ">Discover the most outstanding articles in all topics of life.</p>
            </div>
        </div>  
        </div>
        <Link to='#'>
         <div className="editor-picks-wrap">
                <div className="editor-weppaer row">
                <div className=" col-lg-7">
                  <div className="editor-picks-left">
                    <div className="heading-section text-start mb-4">
                    <h1 className="sec-title pb-4">
                    Microsoft announces a five-year commitment to create bigger opportunities for people with disabilities
                    </h1>
                    <p className="sec_decs mt-3 ">Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.</p>
                    </div>
                    </div>
                </div>
                <div className=" col-lg-5">
                  <div className="editor-picks-right">

               
                  <div className="editor-user-items">
                    <Link to="#">
                       <h3 className="sec-title">360-degree video: How Microsoft deployed a datacenter to the bottom of the ocean</h3>

                    </Link>
                     <Singleuser userTitle={'Jumman Ahmed'} usersImag={useimg} postdate={"May 20.2024"}/>
                  </div>

                  <div className="editor-user-items">
                    <Link to="#">
                       <h3 className="sec-title">360-degree video: How Microsoft deployed a datacenter to the bottom of the ocean</h3>

                    </Link>
                     <Singleuser userTitle={'Jumman Ahmed'} usersImag={useimg} postdate={"May 20.2024"}/>
                  </div>

                  <div className="editor-user-items">
                    <Link to="#">
                       <h3 className="sec-title">360-degree video: How Microsoft deployed a datacenter to the bottom of the ocean</h3>

                    </Link>
                     <Singleuser userTitle={'Jumman Ahmed'} usersImag={useimg} postdate={"May 20.2024"}/>
                  </div>

                  <div className="editor-user-items">
                    <Link to="#">
                       <h3 className="sec-title">360-degree video: How Microsoft deployed a datacenter to the bottom of the ocean</h3>

                    </Link>
                     <Singleuser userTitle={'Jumman Ahmed'} usersImag={useimg} postdate={"May 20.2024"}/>
                  </div>
                  </div>

                </div>
                </div>
         </div>

        </Link>
      </div>
    </section>
  )
}

export default Editorpicks;
