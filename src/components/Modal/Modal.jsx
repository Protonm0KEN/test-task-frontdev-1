import React from "react";
import "./Modal.css";
const Modal = ({ product, state, setState, modalFunc, arr }) => {
  console.log(state);
  return (
    <div className={state ? "Modal_layout_active" : "Modal_layout"}>
      <div className="Modal_window">
        <div className="Modal_info">
          {product ? (
            <div>
              <p>{product.title}</p>
              <p>{product.price}</p>
              <p>{product.description}</p>
              <img src={product.thumbnail} alt="" />
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="Modal_buttons">
          <button
            onClick={() => {
              if (arr.includes(product.title)) {
              }else{
                modalFunc([...arr, product.title]);
                return setState(!state);
              }
            }}
          >
            Add To cart
          </button>
          <button onClick={() => setState(!state)}>Return</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
