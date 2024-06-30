/* eslint-disable react/prop-types */

import { useState } from "react";
import { CiLight, CiLogin, CiUser } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";
import { FiChevronDown } from 'react-icons/fi';
import { IoMdClose } from "react-icons/io";
import { IoHeartOutline, IoHelpBuoyOutline, IoNotificationsOutline, IoSearchOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { SlNotebook } from "react-icons/sl";
import { Link } from "react-router-dom";
import sectiondata from '../../../../store/store';
import logosrc from '../../../assets/images/logo2.png';
import smallimg1 from '../../../assets/images/small-avatar-1.jpg';
import smallimg2 from '../../../assets/images/small-avatar-2.jpg';
import smallimg3 from '../../../assets/images/small-avatar-3.jpg';
import Logo from './Logo';
import Navbar from "./Navbar";

const GeneralHeader = () => {
 const [search, setSearch] = useState(false);
 const [notifiction, setNotifiction] = useState(false);
 const [profile, setProfile] = useState(false);
 const [openMenu, setopenMenu] = useState(false);



  return (
    <>
     <header className='header-area fixed-top' >
        <div className='header-menu-wrapper'>
          <div className='container'>
            <div className='row'>
             <div className="col-lg-12">
                <div className="main-menu-wrapper d-flex justify-content-between align-items-center">
                   <div className="menu--bar-icon" onClick={() => setopenMenu(!openMenu)}>
                    <FaBars/>
                   </div>
                    <div className="logo">
                    <Logo url={logosrc} />
                    </div>
                   
                              <div className={`slide-menu-bar ${openMenu ? "menu-bar-open" : ''}`}>
                              <div className="menu-bar-close-btn" onClick={() => setopenMenu(false)}>
                                <IoMdClose/>
                              </div>
                            <nav className='menu--res-bar'>
                            <Navbar/>
                    
                        </nav>
                        </div>
                    
                    
                    
                    <nav className='menu-bar'>
                      <ul>
                          {sectiondata.headermenu.map((item, index) => {
                          return (
                              <li key={index} className="d-inline-block">
                              <Link to={item.path}>{item.title} {item.dropdown ? <FiChevronDown /> : ''}</Link>
                              {
                                  item.dropdown ? (
                                      <ul className="dropdown-menu-item ">
                                          {item.dropdown.map((ditem, index2) => {
                                              return (
                                                  <li key={index2}><Link to={ditem.path}>{ditem.title}</Link></li>
                                              )
                                          })}
                                  </ul>
                                  ) : ''
                              }

                          </li>
                          )
                          })}
                      </ul>
                    </nav>



                    <div className="menu-right position-relative d-flex justify-content-between align-items-center">
                      <div className="menu-search  menu-right-icon ms-3">
                        <div className="search-btn" onClick={() => setSearch(!search)}>
                        <IoSearchOutline/>
                        </div>
                        <form method="post" className="menu-search-box">
                        <div className={`input-group  mb-3 ${search === true ? "d-block": ""}` }>
                        <input type="text" className="form-control " placeholder="Search by keywords..." aria-label="seach by keywords" aria-describedby="basic-addon1"/>
                        <div className="from-btn">
                         <IoSearchOutline/>
                        </div>
                        </div>
                        </form>
                      </div>
                      <div className="menu-notifiction menu-right-icon position-relative ms-3">
                        <div className="notifictin-btn"  onClick={() => setNotifiction(!notifiction)}>
                          <IoNotificationsOutline/> 
                          <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                            </span>
                        </div>
                        <div className={`notifiction-box  ${notifiction === true ? "d-block" : ''}`}>
                          <div className="heading-section">
                            <h3 className="sec-title fw-semibold">Notifictions</h3>
                          </div>

                          <div className="media mt-4">
                            <div className="d-flex align-items-center">
                              <img src={smallimg1} alt="small-avtar-img" />
                            </div>
                            <div className="media-body">
                              <div className="heading--section">
                                <h4 className="sec-title">Jeson Tuan</h4>
                                <p className="sec_decs">Keep track of your growth</p>
                                <p className="sec_meta">
                                  3 minutes ago
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="media mt-4">
                            <div className="d-flex align-items-center">
                              <img src={smallimg2} alt="small-avtar-img" />
                            </div>
                            <div className="media-body">
                            <div className="heading--section">
                                <h4 className="sec-title">Jeson Tuan</h4>
                                <p className="sec_decs">Keep track of your growth</p>
                                <p className="sec_meta">
                                  3 minutes ago
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="media mt-4">
                            <div className="d-flex align-items-center">
                              <img src={smallimg3} alt="small-avtar-img" />
                            </div>
                            <div className="media-body">
                            <div className="heading--section">
                                <h4 className="sec-title">Jeson Tuan</h4>
                                <p className="sec_decs">Keep track of your growth</p>
                                <p className="sec_meta">
                                  3 minutes ago
                                </p>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                      <div className="menu-user menu-right-icon ms-3">
                       <div className="user-btn" onClick={() => setProfile(!profile)}>
                        <LuUser2 />
                       </div>
                       <div className={`user-box ${profile === true ? "d-block" : ''}`}>
                         <div className="user-profile pb-3">
                         <div className="media">
                           <div className="d-flex">
                             <img src={smallimg1} alt="" />
                           </div>
                           <div className="media-body">
                            <div className="heading--section">
                              <h4 className="sec-title">Jeson Tuan</h4>
                              <p className="sec_decs">Los Angeles, CA</p>
                            </div>
                           </div>
                         </div>
                         </div>
                         <div className="overy-border"></div>
                         <div className="user-profile-icons pt-3">
                          <Link className="user-wrap-icons">
                            <div className="user-item">
                             <CiUser />
                            </div>
                            <div className="user-item">
                              <p>My Accuont</p>
                            </div>
                          </Link>

                          <Link className="user-wrap-icons">
                            <div className="user-item">
                            <SlNotebook />
                            </div>
                            <div className="user-item">
                              <p>My Posts</p>
                            </div>
                          </Link>

                          <Link className="user-wrap-icons">
                            <div className="user-item">
                            <IoHeartOutline />
                            </div>
                            <div className="user-item">
                              <p>Wishlist</p>
                            </div>
                          </Link>
                        </div>     

                        <div className="overy-border"></div>
                         <div className="user-profile-icons pt-3">
                          <Link className="user-wrap-icons">
                            <div className="user-item">
                            <CiLight />
                            </div>
                            <div className="user-item">
                              <p>Dark Theme</p>
                            </div>
                          </Link>

                          <Link className="user-wrap-icons">
                            <div className="user-item">
                            <IoHelpBuoyOutline />
                            </div>
                            <div className="user-item">
                              <p>Help</p>
                            </div>
                          </Link>

                          <Link className="user-wrap-icons">
                            <div className="user-item">
                            <CiLogin />

                            </div>
                            <div className="user-item">
                              <p>Log Out</p>
                            </div>
                          </Link>
                        </div>     
                       </div>
                      </div>
                    </div>
                    
                </div>
             </div>
            </div>
          </div>
        </div>
     </header>
    </>
  )
}

export default GeneralHeader;
