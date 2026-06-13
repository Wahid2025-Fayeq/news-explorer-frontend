import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({ isOpen, onClose }) {
  return (
    <ModalWithForm title="Sign in" isOpen={isOpen} onClose={onClose}>
      <form className="login-form">
        <label className="login-form__label">Email</label>

        <input
          className="login-form__input"
          type="email"
          placeholder="Enter email"
        />

        <label className="login-form__label">Password</label>

        <input
          className="login-form__input"
          type="password"
          placeholder="Enter password"
        />

        <button type="submit" className="login-form__button">
          Sign in
        </button>

        <p className="login-form__switch">
          or{" "}
          <button type="button" className="login-form__link">
            Sign up
          </button>
        </p>
      </form>
    </ModalWithForm>
  );
}

export default LoginModal;
