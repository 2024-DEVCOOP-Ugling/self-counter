import React, { useState } from "react";
import "./App.css";
import Modal from "./Modal";
import InfoProduct from "./component/product-info";

function App() {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(2);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="container">
      <div className="main-box">
        <div className="nav">
          <div className="nav-name">박현준 | 잔액 : 20000원</div>
          <button className="nav-select">상품선택</button>
        </div>
        <InfoProduct
          count={count}
          count2={count2}
          setCount={setCount}
          setCount2={setCount2}
        />
        <div className="product-sum">
          <span className="sum-price-num">총 가격 및 합계</span>
          <div className="product-num-price">
            <span className="sum-num">{count + count2}</span>
            <span className="sum-price">{1400 * count + 600 * count2}</span>
          </div>
        </div>
        <div className="add-button">
          <button className="event-product">행사상품</button>
          <button className="all-delete">전체삭제</button>
          <button className="go-first">처음으로</button>
          <button className="calculate" onClick={toggleModal}>
            계산하기
          </button>
        </div>
      </div>
      {isModalOpen && <Modal count={count} count2={count2} />}
    </div>
  );
}

export default App;
