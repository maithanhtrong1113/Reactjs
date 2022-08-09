import "./NavBar.css";
import React, { useState } from "react";
function NavBar(props) {
  const [price, setPrice] = useState(props.price); // useState sẽ nhận đối số là giá trị ban đầu và trả về một mảng bao gồm giá trị ban đầu đó và một hàm để thay đổi giá trị
  const clickHandler = () => {
    setPrice(0); // dùng hàm này thay đổi giá trị sau khi React render hết component nó sẽ xem xét khi hàm này được kêu thì render lại component này
    console.log(price); // nhận giá trị ban đầu vì lúc render nó chỉ lên lịch để cập nhập trạng thái này còn render thì từ A-Z trước
  };
  return (
    <div className="Item">
      <h3>{props.name}</h3>
      <button onClick={clickHandler} className="ButtonPrice">
        ${price}
      </button>
    </div>
  );
}
export default NavBar;
