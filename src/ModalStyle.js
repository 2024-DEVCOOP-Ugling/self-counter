import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.45);
  z-index: 999;
`;

export const ModalBox = styled.div`
  width: 600px;
  height: 400px;
  position: fixed;
  top: calc(50%-300px);
  left: calc(50%-200px);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  background-color: #fff;
  z-index: 1000;
`;

export const ModalPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  background-color: #fff;
  margin-bottom: 10px;
`;

export const Accept = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 90px;
`;

export const PayModal = styled.span`
  color: #000;
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const GoFirstAlert = styled.span`
  color: #000;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
