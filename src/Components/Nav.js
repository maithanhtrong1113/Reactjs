import "./Nav.css";
import { Link } from "react-router-dom";
function Nav() {
  function myFunction() {
    var x = document.getElementById("idMenu");
    if (x.className === "menu") {
      x.className += " responsive";
    } else {
      x.className = "menu";
    }
  }
  const myFunction1 = () => {
    var x = document.getElementById("more");
    if (x.className === "More") {
      x.className += " activee";
    } else {
      x.className = "More";
    }
  };

  return (
    <div className="nav">
      <div className="leftNav">
        <Link to="/">
          <img
            className="imgLogo"
            alt="img"
            src="https://i.ibb.co/wwLhz98/logo.png"
          />
        </Link>
        <div className="menu" id="idMenu">
          <div className="cover">
            <Link to="/">Microsoft 365</Link>
            <Link to="/product">Office</Link>
            <Link to="/product">Windows</Link>
            <Link to="/product">Xbox</Link>
            <Link to="/support">Hỗ trợ</Link>
          </div>
          <a className="icon" onClick={myFunction}>
            &#9776;
          </a>
        </div>
      </div>
      <div className="faIcon">
        <span onClick={myFunction1} className="All">
          Tất cả Microsoft
        </span>
        <Link to="/search">
          <i className="fa-solid fa-magnifying-glass"></i>
        </Link>
        <Link to="/cart">
          <i className="fa-solid fa-cart-arrow-down"></i>
        </Link>
        <Link to="/user">
          <i className="fa-solid fa-user"></i>
        </Link>
      </div>
      <div className="More" id="more">
        <div className="moreItem">
          <h4>Phần mềm</h4>
          <Link to="/product">Ứng dụng cho Windows</Link>
          <Link to="/product">Outlook</Link>
          <Link to="/product">Ứng dụng cho Windows</Link>
          <Link to="/product">Outlook</Link>
          <Link to="/product">Microsoft team</Link>
        </div>
        <div className="moreItem">
          <h4>Phần mềm</h4>
          <Link to="/product">Ứng dụng cho Windows</Link>
          <Link to="/product">Outlook</Link>
          <Link to="/product">Outlook</Link>
          <Link to="/product">Microsoft team</Link>
          <Link to="/product">Microsoft team</Link>
        </div>
        <div className="moreItem">
          <h4>Phần mềm</h4>
          <Link to="/product">Ứng dụng cho Windows</Link>
          <Link to="/product">Outlook</Link>
          <Link to="/product">Ứng dụng cho Windows</Link>
          <Link to="/product">Outlook</Link>
          <Link to="/product">Microsoft team</Link>
        </div>
        <div className="moreItem">
          <h4>Phần mềm</h4>
          <Link to="/product">Ứng dụng cho Windows</Link>
          <Link to="/product">Outlook</Link>
          <Link to="/product">Outlook</Link>
          <Link to="/product">Microsoft team</Link>
          <Link to="/product">Microsoft team</Link>
        </div>
        <div className="moreItem">
          <h4>Phần mềm</h4>
          <Link to="/product">Ứng dụng cho Windows</Link>
          <Link to="/product">Outlook</Link>
          <Link to="/product">Ứng dụng cho Windows</Link>
          <Link to="/product">Outlook</Link>
          <Link to="/product">Microsoft team</Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
