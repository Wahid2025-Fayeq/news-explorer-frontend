import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

function RegisterModal({ isOpen, onClose, onLoginClick }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
  };

  return (
    <ModalWithForm title="Sign up" isOpen={isOpen} onClose={onClose}>
      <form className="register-form" onSubmit={handleSubmit}>
        <label className="register-form__label">Email</label>

        <input
          className="register-form__input"
          type="email"
          placeholder="Enter email"
          required
        />

        <label className="register-form__label">Password</label>

        <input
          className="register-form__input"
          type="password"
          placeholder="Enter password"
          required
        />

        <label className="register-form__label">Username</label>

        <input
          className="register-form__input"
          type="text"
          placeholder="Enter username"
          required
        />

        <button type="submit" className="register-form__button">
          Sign up
        </button>

        <p className="register-form__switch">
          or{" "}
          <button
            type="button"
            className="register-form__link"
            onClick={onLoginClick}
          >
            Sign in
          </button>
        </p>
      </form>
    </ModalWithForm>
  );
}

export default RegisterModal;
