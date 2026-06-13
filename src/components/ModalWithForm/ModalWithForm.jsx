import { useEffect } from "react";
import closeIcom from "../../assets/close.svg";
import "./ModalWithForm.css";

function ModalWithForm({ isOpen, onClose, title, children }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`} onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal__close" onClick={onClose}>
          <img src={closeIcom} alt="Close" className="modal__close-icon" />
        </button>

        <h2>{title}</h2>

        {children}
      </div>
    </div>
  );
}

export default ModalWithForm;
