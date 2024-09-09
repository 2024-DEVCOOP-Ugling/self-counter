import React from "react";
import "./Modal.css";
import Accept from "./image/accept.svg";

const Modal = ({ count, count2, closeModal }) => {
  return (
    <>
      <div className="modal-overlay" onClick={closeModal}></div>
      <div className="modal-box">
        <div className="modal-price">
          <img src={Accept} alt="accept" className="accept" />
          <span className="pay-modal">
            {1400 * count + 600 * count2}원이 결제되었습니다
          </span>
        </div>
        <span className="go-first-alert">
          잠시 후에 처음 화면으로 돌아갑니다.
        </span>
      </div>
    </>
  );
};

export default Modal;
