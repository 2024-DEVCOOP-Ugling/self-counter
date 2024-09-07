import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  return (
    <div className="container">
      <div className="main-box">
        <div className="nav">
          <div className="nav-name">박현준 | 잔액 : 20000원</div>
          <button className="nav-select">상품선택</button>
        </div>
        <table className="product-info-table">
          <thead>
            <tr className="product-sort">
              <th className="product-name-header">상품이름</th>
              <div className="product-num-price">
                <th className="product-num-header">수량</th>
                <th className="product-price-header">상품 가격</th>
              </div>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="product-name">슈퍼콘 민트초코</td>
              <td className="product-num">1</td>
              <td className="product-price">1400</td>
              <td className="product-plus-minus">
                <button className="product-plus">+</button>
                <button className="product-minus">-</button>
              </td>
            </tr>
            <tr>
              <td className="product-name">꼬미볼 복숭아맛</td>
              <td className="product-num">2</td>
              <td className="product-price">1200</td>
              <td className="product-plus-minus">
                <button className="product-plus">+</button>
                <button className="product-minus">-</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
