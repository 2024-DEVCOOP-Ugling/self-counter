import React from "react";
import Accept from "./image/accept.svg";
import * as S from "./ModalStyle";

const Modal = ({ count, count2 }) => {
  return (
    <>
      <S.ModalOverlay></S.ModalOverlay>
      <S.ModalBox>
        <S.ModalPrice>
          <S.Accept src={Accept} />
          <S.PayModal>
            {1400 * count + 600 * count2}원이 결제되었습니다
          </S.PayModal>
        </S.ModalPrice>
        <S.GoFirstAlert> 잠시 후에 처음 화면으로 돌아갑니다.</S.GoFirstAlert>
      </S.ModalBox>
    </>
  );
};

export default Modal;
