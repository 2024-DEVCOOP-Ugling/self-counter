import React from "react";
import "./Modal.css";

const Modal = ({ count, count2 }) => {
  return (
    <div className="modal-container">
      <div className="modal-main-box">
        <div className="modal-nav">
          <div className="modal-nav-name">박현준 | 잔액 : 20000원</div>
          <button className="modal-nav-select">상품선택</button>
        </div>
        <table className="modal-product-info-table">
          <thead>
            <tr className="modal-product-sort">
              <th className="modal-product-name-header">상품이름</th>
              <div className="modal-product-num-price">
                <th className="modal-product-num-header">수량</th>
                <th className="modal-product-price-header">상품 가격</th>
              </div>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="modal-product-name">슈퍼콘 민트초코</td>
              <td className="modal-product-num">{count}</td>
              <td className="modal-product-price">{1400 * count}</td>
              <td className="modal-product-plus-minus">
                <button className="modal-product-plus">+</button>
                <button className="modal-product-minus">-</button>
              </td>
            </tr>
            <tr>
              <td className="modal-product-name">꼬미볼 복숭아맛</td>
              <td className="modal-product-num">{count2}</td>
              <td className="modal-product-price">{600 * count2}</td>
              <td className="modal-product-plus-minus">
                <button className="modal-product-plus">+</button>
                <button className="modal-product-minus">-</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="modal-product-sum">
          <span className="modal-sum-price-num">총 가격 및 합계</span>
          <div className="modal-product-num-price">
            <span className="modal-sum-num">{count + count2}</span>
            <span className="modal-sum-price">
              {1400 * count + 600 * count2}
            </span>
          </div>
        </div>
        <div className="modal-add-button">
          <button className="modal-event-product">행사상품</button>
          <button className="modal-all-delete">전체삭제</button>
          <button className="modal-go-first">처음으로</button>
          <button className="modal-calculate">계산하기</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
