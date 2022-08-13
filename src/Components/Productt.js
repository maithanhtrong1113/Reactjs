import { Link } from "react-router-dom";
import "./Product.css";
function Productt() {
  return (
    <div className="cardList">
      <div className="card">
        <Link to="/product">
          <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWLJ3u?ver=7dcf&q=90&m=6&h=278&w=494&b=%23FFFFFFFF&l=f&o=t&x=755&y=404&aim=true" />
          <h2>Tải miễn phí Microsoft Teams</h2>
        </Link>
        <Link to="/product">
          <span>
            Hội họp, trò chuyện trực tuyến và dung lượng lưu trữ đám mây được
            chia sẻ — tất cả ở cùng một nơi.
          </span>
        </Link>
        <Link to="/product" className="learnMore">
          <p>Đăng ký miễn phí </p>
        </Link>
      </div>

      <div className="card">
        <Link to="/product">
          <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4E4rT?ver=2072&q=90&m=6&h=278&w=494&b=%23FFFFFFFF&l=f&o=t&aim=true" />
          <h2>Microsoft 365 dành cho doanh nghiệp</h2>
        </Link>
        <Link to="/product">
          <span>
            Đi trước một bước với các ứng dụng mạnh mẽ giúp tăng năng suất, kết
            nối và bảo mật.
          </span>
        </Link>
        <Link to="/product" className="learnMore">
          <p>Mua sắm ngay</p>
        </Link>
      </div>
      <div className="card">
        <Link to="/product">
          <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWRDt7?ver=48fd&q=90&m=6&h=278&w=494&b=%23FFFFFFFF&l=f&o=t&aim=true" />
          <h2>Giải pháp tuyệt vời cho trường học của bạn</h2>
        </Link>
        <Link to="/product">
          <span>
            Đẩy nhanh tốc độ lĩnh hội kiến thức nhờ các thiết bị Windows 11 và
            Windows 11 SE toàn diện, dễ tiếp cận và có giá phải chăng cho học
            sinh và các ngôi trường bậc phổ thông.
          </span>
        </Link>
        <Link to="/product" className="learnMore">
          <p>Tìm hiểu thêm</p>
        </Link>
      </div>
      <div className="card">
        <Link to="/product">
          <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWGaY8?ver=2545&q=90&m=6&h=278&w=494&b=%23FFFFFFFF&l=f&o=t&aim=true" />
          <h2>Chào mừng bạn đến với PC trên đám mây Windows 365</h2>
        </Link>
        <Link to="/product">
          <span>
            Truyền phát trải nghiệm Windows của bạn một cách an toàn từ đám mây
            Microsoft sang mọi thiết bị.
          </span>
        </Link>
        <Link to="/product" className="learnMore">
          <p>Tải ngay hôm nay </p>
        </Link>
      </div>
    </div>
  );
}
export default Productt;
