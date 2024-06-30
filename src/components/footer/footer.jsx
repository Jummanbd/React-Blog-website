
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo2.png';
// eslint-disable-next-line react/prop-types
const Footer = ({className}) => {
  return (
    <section className={`section--padding footer-area ${className}`}>
      <div className="container">
      <div className="row  justify-content-between mb-4">
        <div className="col-lg-2 col-md-4">
          <div className="footer-item">
            <div className="logo">
              <img src={logo} alt="img" />
            </div>
            <ul>
              <li><Link to = "#"><FaFacebook /> Facebook</Link></li>
              <li><Link to="#"><FaSquareXTwitter />Twitter</Link></li>
              <li> <Link to="#"><IoLogoLinkedin /> Linkedin </Link></li>
              <li> <Link to="#"><FaInstagram /> Instogram </Link></li>
            </ul>
          </div>
        </div>

        <div className="col-lg-2 col-md-4">
           <div className="footer-item">
            <h5>Getting Started</h5>
            <ul>
              <li> <Link to="#">Installation </Link></li>
              <li> <Link to="#">Release Notes </Link></li>
              <li> <Link to="#">Upgrode Guide </Link></li>
              <li> <Link to="#">Browser Suppert </Link></li>
              <li> <Link to="#">Editor Support </Link></li>
            </ul>
           </div>
        </div>

        <div className="col-lg-2 col-md-4">
          <div className="footer-item">
            <h5>Explore</h5>
            <ul>
              <li> <Link to="#">Design Features </Link></li>
              <li> <Link to="#">Phototyping </Link></li>
              <li> <Link to="#">Design Systems </Link></li>
              <li> <Link to="#">Price </Link></li>
              <li> <Link to="#">Customers </Link></li>
            </ul>
          </div>
        </div>

        <div className="col-lg-2 col-md-4">
           <div className="footer-item">
            <h5>Resources</h5>
            <ul>
              <li> <Link to="#">Best Practices </Link></li>
              <li> <Link to="#">Support </Link></li>
              <li> <Link to="#">Developers </Link></li>
              <li> <Link to="#">Learn Design </Link></li>
              <li> <Link to="#">What`s new </Link></li>
            </ul>
           </div>
        </div>

        <div className="col-lg-2 col-md-4">
          <div className="footer-item">
            <h5>Community</h5>
            <ul>
              <li> <Link to="#">Discussion Forums </Link></li>
              <li> <Link to="#">Code of Conduct </Link></li>
              <li> <Link to="#">Community Resources </Link></li>
              <li> <Link to="#">Contributing </Link></li>
              <li> <Link to="#">Concrrent Mode </Link></li>
            </ul>
          </div>
        </div>

     </div>
        <hr />
        <p className="text-center">Copyright 	&copy;  2024 JPDevs Inc.</p>
      </div>
    </section>
  )
}

export default Footer;
