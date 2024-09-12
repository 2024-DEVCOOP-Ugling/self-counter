// src/App.jsx
import React, { useState } from "react";
import Modal from "./Modal";
import * as S from "./AppStyle"; // Styled-components import
import InfoProduct from "./component/product-info";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`;

function App() {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(2);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <GlobalStyle />
      <S.Container>
        <S.MainBox>
          <S.Nav>
            <S.NavName>박현준 | 잔액 : 20000원</S.NavName>
            <S.NavSelect>상품선택</S.NavSelect>
          </S.Nav>
          <InfoProduct
            count={count}
            count2={count2}
            setCount={setCount}
            setCount2={setCount2}
          />
          <S.ProductSum>
            <S.SumPriceNum>총 가격 및 합계</S.SumPriceNum>
            <div>
              <S.SumNum>{count + count2}</S.SumNum>
              <S.SumPrice>{1400 * count + 600 * count2}</S.SumPrice>
            </div>
          </S.ProductSum>
          <S.AddButton>
            <S.EventProudct>행사상품</S.EventProudct>
            <S.AllDelete>전체삭제</S.AllDelete>
            <S.GoFirst>처음으로</S.GoFirst>
            <S.Calculate onClick={toggleModal}>계산하기</S.Calculate>
          </S.AddButton>
        </S.MainBox>
        {isModalOpen && <Modal count={count} count2={count2} />}
      </S.Container>
    </>
  );
}

export default App;
