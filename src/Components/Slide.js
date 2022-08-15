import "./Slide.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
function Slide() {
  useEffect(() => {
    const slider = document.querySelector(".slider");
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");
    const slides = document.querySelectorAll(".slide");
    const numberOfSlides = slides.length;
    var slideNumber = 0;
    //image slider next button
    nextBtn.addEventListener("click", () => {
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });
      slideNumber++;
      if (slideNumber > numberOfSlides - 1) {
        slideNumber = 0;
      }
      slides[slideNumber].classList.add("active");
    });
    //image slider previous button
    prevBtn.addEventListener("click", () => {
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });
      slideNumber--;
      if (slideNumber < 0) {
        slideNumber = numberOfSlides - 1;
      }
      slides[slideNumber].classList.add("active");
    });
    //image slider autoplay
    var playSlider;
    var repeater = () => {
      playSlider = setInterval(function () {
        slides.forEach((slide) => {
          slide.classList.remove("active");
        });
        slideNumber++;
        if (slideNumber > numberOfSlides - 1) {
          slideNumber = 0;
        }
        slides[slideNumber].classList.add("active");
      }, 2000);
    };
    repeater();
    //stop the image slider autoplay on mouseover
    slider.addEventListener("mouseover", () => {
      clearInterval(playSlider);
    });
    //start the image slider autoplay again on mouseout
    slider.addEventListener("mouseout", () => {
      repeater();
    });
  });

  return (
    <div className="containerSlide">
      <div className="slider">
        <div className="slide active">
          <Link to="/product">
            <img
              src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4RBHW?ver=a523&q=0&m=8&h=472&w=1259&b=%2523FFFFFFFF&l=f&x=0&y=0&s=1898&d=712&aim=true"
              alt=""
            />
          </Link>
          <div className="info">
            <h2>PC Game Pass</h2>
            <p>
              Khám phá 100+ games hay EA play, dùng tháng đầu tiên chỉ với
              26.000đ. Ưu đãi chỉ cho người dùng đăng ký mới
            </p>
            <Link to="/product">
              <button>Tham gia ngay</button>
            </Link>
          </div>
        </div>
        <div className="slide">
          <Link to="/product">
            <img
              src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4RJ6W?ver=0809&q=0&m=8&h=472&w=1259&b=%2523FFFFFFFF&l=f&x=144&y=350&s=2622&d=983&aim=true"
              alt=""
            />
          </Link>

          <div className="info2">
            <h2>Microsoft 365</h2>
            <p>
              Các ứng dụng office cao cấp, lưu trữ đám mây bổ sung, bảo mật nâng
              cao cùng nhiều tính năng khác. Tất cả trong một gói tiện lợi.
            </p>
            <button>Sản phẩm cho 6 người dùng</button>
          </div>
        </div>

        <div className="navigation">
          <i className="fas fa-chevron-left prev-btn"></i>
          <i className="fas fa-chevron-right next-btn"></i>
        </div>
      </div>
    </div>
  );
}
export default Slide;
