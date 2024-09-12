import React from "react";
import "./product-info.css";

const InfoProduct = ({ count, count2, setCount, setCount2 }) => {
  return (
    <>
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
    </>
  );
};

export default InfoProduct;
