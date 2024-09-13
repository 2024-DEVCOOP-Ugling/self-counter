import React from "react";
import { createGlobalStyle } from "styled-components";
import * as S from "./product-info-style";

const GlobalStyle = createGlobalStyle`
tbody {
  display: block;
}
thead {
  width: 1200px;
}

`;
const InfoProduct = ({ count, count2, setCount, setCount2 }) => {
  return (
    <>
      <GlobalStyle />
      <S.ProductInfoTable>
        <thead>
          <S.ProductSort>
            <S.ProductNameHeader>상품이름</S.ProductNameHeader>
            <th>
              <S.ProductNumHeader>수량</S.ProductNumHeader>
              <S.ProductPriceHeader>상품 가격</S.ProductPriceHeader>
            </th>
          </S.ProductSort>
        </thead>
        <tbody>
          <tr>
            <S.ProductName>슈퍼콘 민트초코</S.ProductName>
            <S.ProductNum>{count}</S.ProductNum>
            <S.ProductPrice>{1400 * count}</S.ProductPrice>
            <S.ProductPlusMinus>
              <S.ProductPlus onClick={() => setCount(count + 1)}>
                +
              </S.ProductPlus>
              <S.ProductMinus onClick={() => count > 1 && setCount(count - 1)}>
                -
              </S.ProductMinus>
            </S.ProductPlusMinus>
          </tr>
          <tr>
            <S.ProductName>꼬미볼 복숭아맛</S.ProductName>
            <S.ProductNum>{count2}</S.ProductNum>
            <S.ProductPrice>{600 * count2}</S.ProductPrice>
            <S.ProductPlusMinus>
              <S.ProductPlus onClick={() => setCount2(count2 + 1)}>
                +
              </S.ProductPlus>
              <S.ProductMinus
                onClick={() => count2 > 1 && setCount2(count2 - 1)}
              >
                -
              </S.ProductMinus>
            </S.ProductPlusMinus>
          </tr>
        </tbody>
      </S.ProductInfoTable>
    </>
  );
};

export default InfoProduct;
