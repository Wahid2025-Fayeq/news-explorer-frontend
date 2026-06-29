import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./InfoTooltip.css";

function InfoTooltip({ isOpen, onClose, onLoginClick }) {
  return (
    <ModalWithForm
      title="Registration successfully completed!"
      isOpen={isOpen}
      onClose={onClose}
      formClassName="info-tooltip"
      containerClassName="info-tooltip__container"
    >
      <button
        type="button"
        className="info-tooltip__link"
        onClick={onLoginClick}
      >
        Sign in
      </button>
    </ModalWithForm>
  );
}

export default InfoTooltip;
