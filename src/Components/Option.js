import "./Option.css";
import { Link } from "react-router-dom";
function Option() {
  return (
    <div className="option">
      <div className="optionItem">
        <Link to="/product">
          <img
            src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4sQDc?ver=30c2&q=90&m=6&h=40&w=40&b=%23FFFFFFFF&l=f&o=t&aim=true"
            alt=""
          />
        </Link>
        <Link to="/product">
          <h3>Chọn Microsoft 365 của bạn</h3>
        </Link>
      </div>

      <div className="optionItem">
        <Link to="/product">
          <img
            src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4DGd4?ver=82ae&q=90&m=6&h=40&w=40&b=%23FFFFFFFF&l=f&o=t&aim=true"
            alt=""
          />
        </Link>
        <Link to="/product">
          <h3>Khám phá trò chơi trên PC</h3>
        </Link>
      </div>

      <div className="optionItem">
        <Link to="/product">
          <img
            src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4sQDc?ver=30c2&q=90&m=6&h=40&w=40&b=%23FFFFFFFF&l=f&o=t&aim=true"
            alt=""
          />
        </Link>
        <Link to="/product">
          <h3>Tải Windows</h3>
        </Link>
      </div>
    </div>
  );
}
export default Option;
