import { Link } from "react-router-dom";
import "./Product.css";
function Product() {
  return (
    <div className="cardList">
      <div className="card">
        <Link to="/product">
          <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWLSJa?ver=0450&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" />
          <h2>Được thiết kế cho cuộc sống hôm nay và mai sau</h2>
        </Link>
        <Link to="/product">
          <span>
            Trò chơi thế hệ tiếp theo. Mục tiêu của bạn. Gia đình và bạn bè.
            Windows 11 được thiết kế để đưa bạn đến gần hơn với mọi thứ bạn yêu
            thích.
          </span>
        </Link>
        <Link to="/product" className="learnMore">
          <p>Xem PC của bạn đã sẵn sàng chưa</p>
        </Link>
      </div>

      <div className="card">
        <Link to="/product">
          <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4rzE2?ver=aa0b&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" />
          <h2>Microsoft Edge</h2>
        </Link>
        <Link to="/product">
          <span>
            Hiệu suất đẳng cấp thế giới với độ bảo mật lớn hơn, năng suất cao
            hơn và nhiều giá trị hơn trong khi duyệt web.
          </span>
        </Link>
        <Link to="/product" className="learnMore">
          <p>Tải xuống ngay</p>
        </Link>
      </div>
      <div className="card">
        <Link to="/product">
          <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3hD2k?ver=6539&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" />
          <h2>Microsoft OneDrive</h2>
        </Link>
        <Link to="/product">
          <span>
            Lưu tệp và ảnh của bạn vào OneDrive và truy cập từ mọi nơi, mọi
            thiết bị.
          </span>
        </Link>
        <Link to="/product" className="learnMore">
          <p>Tìm hiểu thêm</p>
        </Link>
      </div>
      <div className="card">
        <Link to="/product">
          <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/REGxSz?ver=5bf8&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" />
          <h2>OneNote</h2>
        </Link>
        <Link to="/product">
          <span>Sắp xếp khoa học các ghi chú và cuộc sống của bạn.</span>
        </Link>
        <Link to="/product" className="learnMore">
          <p>Tìm hiểu thêm </p>
        </Link>
      </div>
    </div>
  );
}
export default Product;
