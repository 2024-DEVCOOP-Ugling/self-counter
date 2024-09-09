import React, { useState } from "react";
import "./App.css";
import Modal from "./Modal";

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
        <table className="product-info-table">
          <thead>
            <tr className="product-sort">
              <th className="product-name-header">상품이름</th>
              <th className="product-num-price">
                <th className="product-num-header">수량</th>
                <th className="product-price-header">상품 가격</th>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="product-name">슈퍼콘 민트초코</td>
              <td className="product-num">{count}</td>
              <td className="product-price">{1400 * count}</td>
              <td className="product-plus-minus">
                <button
                  className="product-plus"
                  onClick={() => setCount(count + 1)}
                >
                  +
                </button>
                <button
                  className="product-minus"
                  onClick={() => count > 1 && setCount(count - 1)}
                >
                  -
                </button>
              </td>
            </tr>
            <tr>
              <td className="product-name">꼬미볼 복숭아맛</td>
              <td className="product-num">{count2}</td>
              <td className="product-price">{600 * count2}</td>
              <td className="product-plus-minus">
                <button
                  className="product-plus"
                  onClick={() => setCount2(count2 + 1)}
                >
                  +
                </button>
                <button
                  className="product-minus"
                  onClick={() => count2 > 1 && setCount2(count2 - 1)}
                >
                  -
                </button>
              </td>
            </tr>
          </tbody>
        </table>
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
