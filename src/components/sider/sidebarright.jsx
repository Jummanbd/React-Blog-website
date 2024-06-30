import { Link } from "react-router-dom";
import smallimg01 from '../../assets/images/design01.jpg';
import smallimg02 from '../../assets/images/design02.jpg';
import smallimg03 from '../../assets/images/design03.jpg';
import smallimg04 from '../../assets/images/design04.jpg';
import smallimg05 from '../../assets/images/design05.jpg';
import userimg01 from '../../assets/images/small-avatar-1.jpg';
import userimg02 from '../../assets/images/small-avatar-2.jpg';
import userimg03 from '../../assets/images/small-avatar-3.jpg';
import userimg04 from '../../assets/images/small-avatar-4.jpg';

import Singleuser from "../singuser/singleuser";
const Sidebarright = () => {
  return (
    <div className="sidebar-right">
     <div className="sidebar-right-item p-25">
       <div className="section-heading d-flex justify-content-between align-items-center pb-3">
        <h3 className="sec-title">💡 More tags</h3>
        <p className="sec_decs">View all</p>
        </div> 
          <hr />
        <ul>
           <li className="tag-item">
            <Link to ="#">Garden(13)</Link>
           </li>
           <li className="tag-item">
            <Link to="#">Jewelry (16)</Link>
           </li >
           <li className="tag-item">
             <Link to="#">Industrial(15)</Link>
           </li>
           <li className="tag-item">
             <Link>Tools(21)</Link>
           </li>
           <li className="tag-item">
             <Link>Automotive(16)</Link>
           </li>
           <li className="tag-item">
             <Link>Toys(25)</Link>
           </li>
           <li className="tag-item">
             <Link>Outdoors(14)</Link>
           </li>
           <li className="tag-item">
             <Link>Health(4)</Link>
           </li>
           <li className="tag-item">
             <Link>Electronics(7)</Link>
           </li>

        </ul>
     </div>
      
      <div className="sidebar-right-item">
        <div className="section-heading d-flex justify-content-between align-items-center pb-3 px-25">
           <h3 className="sec-title">✨ Trending topic</h3>
           <p className="sec_decs">View all</p>
           </div> 
           <hr />

           <div className="sidebar-wrap-item">
             <Link to={'#'} >
               <Singleuser usersImag={smallimg01} userTitle = {"Electronics"} postdate={"7 Artcles"}/>
             </Link>
           </div>
           <div className="sidebar-wrap-item">
             <Link to={'#'} >
               <Singleuser usersImag={smallimg02} userTitle = {"Electronics"} postdate={"7 Artcles"}/>
             </Link>
           </div>
           <div className="sidebar-wrap-item">
             <Link to={'#'} >
               <Singleuser usersImag={smallimg03} userTitle = {"Electronics"} postdate={"7 Artcles"}/>
             </Link>
           </div>
           <div className="sidebar-wrap-item">
             <Link to={'#'} >
               <Singleuser usersImag={smallimg04} userTitle = {"Electronics"} postdate={"7 Artcles"}/>
             </Link>
           </div>
           <div className="sidebar-wrap-item">
             <Link to={'#'} >
               <Singleuser usersImag={smallimg05} userTitle = {"Electronics"} postdate={"7 Artcles"}/>
             </Link>
           </div>


      </div>

      <div className="sidebar-right-item">
        <div className="section-heading d-flex justify-content-between align-items-center pb-3 px-25">
           <h3 className="sec-title">🎭 Discover Authors</h3>
           <p className="sec_decs">View all</p>
           </div> 
           <hr />

           <div className="sidebar-wrap-item">
             <Link to={'/author-page'} >
               <Singleuser usersImag={userimg01} userTitle = {"win Jon"} postdate={"@Authors"}/>
             </Link>
           </div>
           <div className="sidebar-wrap-item">
             <Link to={'/author-page'} >
               <Singleuser usersImag={userimg02} userTitle = {"kembin"} postdate={"@Authors"}/>
             </Link>
           </div>
           <div className="sidebar-wrap-item">
             <Link to={'/author-page'} >
               <Singleuser usersImag={userimg03} userTitle = {"John don"} postdate={"@Authors"}/>
             </Link>
           </div>
           <div className="sidebar-wrap-item">
             <Link to={'/author-page'} >
               <Singleuser usersImag={userimg04} userTitle = {"well cembin"} postdate={"@Authors"}/>
             </Link>
           </div>
           <div className="sidebar-wrap-item">
             <Link to={'/author-page'} >
               <Singleuser usersImag={userimg03} userTitle = {"John well"} postdate={"@Authors"}/>
             </Link>
           </div>


      </div>
    </div>
  )
}

export default Sidebarright
