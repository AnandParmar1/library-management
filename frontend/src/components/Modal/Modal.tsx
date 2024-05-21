import React from "react";
import "./Modal.css";

interface ModalProps {
  toggleModal(): void;
  content: JSX.Element;
}

export const Modal: React.FC<ModalProps> = ({ toggleModal, content }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="relative bg-blue-50 rounded-lg shadow-lg p-2 w-full max-w-md">
        <h5
          className="absolute top-0 right-0 p-2 font-bold text-2xl cursor-pointer text-gray-600 hover:text-gray-800"
          onClick={toggleModal}
        >
          x
        </h5>
        {content}
      </div>
    </div>
  );
};
