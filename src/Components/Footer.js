import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
      <div className="footerItem">
        <h3>What's New</h3>
        <Link to="/product">
          <span>Surface Pro X</span>
        </Link>
        <Link to="/product">
          <span>Surface Laptop 3</span>
        </Link>
        <Link to="/product">
          <span>Surface Pro 7</span>
        </Link>
        <Link to="/product">
          <span>Windows 10 apps</span>
        </Link>
        <Link to="/product">
          <span>Office app</span>
        </Link>
      </div>

      <div className="footerItem">
        <h3>Microsoft Store</h3>
        <Link to="/product">
          <span>Account Profile</span>
        </Link>
        <Link to="/product">
          <span>Download Center</span>
        </Link>
        <Link to="/product">
          <span>Microsoft Store support</span>
        </Link>
        <Link to="/product">
          <span>Returns</span>
        </Link>
        <Link to="/product">
          <span>older Tracking</span>
        </Link>
      </div>

      <div className="footerItem">
        <h3>Education</h3>
        <Link to="/product">
          <span>Microsoft in education</span>
        </Link>
        <Link to="/product">
          <span>Office for student</span>
        </Link>
        <Link to="/product">
          <span>Office 365 for school</span>
        </Link>
        <Link to="/product">
          <span>Deal for student</span>
        </Link>
        <Link to="/product">
          <span>Microsoft Azure</span>
        </Link>
      </div>

      <div className="footerItem">
        <h3>Enterprise</h3>
        <Link to="/product">
          <span>Azure</span>
        </Link>
        <Link to="/product">
          <span>AppSource</span>
        </Link>
        <Link to="/product">
          <span>Automotive</span>
        </Link>
        <Link to="/product">
          <span>Government</span>
        </Link>
        <Link to="/product">
          <span>Healthcare</span>
        </Link>
      </div>

      <div className="footerItem">
        <h3>Developer</h3>
        <Link to="/product">
          <span>Visual Studio</span>
        </Link>
        <Link to="/product">
          <span>Windows Dev Center</span>
        </Link>
        <Link to="/product">
          <span>Developer Network</span>
        </Link>
        <Link to="/product">
          <span>TeachNet</span>
        </Link>
        <Link to="/product">
          <span>Microsoft Developper</span>
        </Link>
      </div>

      <div className="footerItem">
        <h3>Company</h3>
        <Link to="/product">
          <span>Carres</span>
        </Link>
        <Link to="/product">
          <span>About Microsoft</span>
        </Link>
        <Link to="/product">
          <span>Company news</span>
        </Link>
        <Link to="/product">
          <span>Privacy at Microsoft</span>
        </Link>
        <Link to="/product">
          <span>Invenstors</span>
        </Link>
      </div>
    </div>
  );
}
export default Footer;
