import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="main-box">
        <div className="nav">
          <div className="nav-name">박현준 | 잔액 : 20000원</div>
          <button className="nav-select">상품선택</button>
        </div>
        <div className="product-info">
          <span className="product-name">상품이름</span>
          <div className="product-num-price">
            <span className="product-num">수량</span>
            <span className="product-price">상품 가격</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
