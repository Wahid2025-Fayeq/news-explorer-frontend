import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({ isOpen, onClose, onRegisterClick, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <ModalWithForm
      title="Sign in"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      formClassName="login-form"
    >
    <label htmlFor="login-email" className="login-form__label">
  Email
</label>

      <input
  id="login-email"
  className="login-form__input"
  type="email"
  placeholder="Enter email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
/>

      <label htmlFor="login-password" className="login-form__label">
        Password
      </label>

      <input
        id="login-password"
        className="login-form__input"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button
        type="submit"
        className={`login-form__button ${
          isFormValid ? "login-form__button_active" : ""
        }`}
        disabled={!isFormValid}
      >
        Sign in
      </button>

      <p className="login-form__switch">
        or{" "}
        <button
          type="button"
          className="login-form__link"
          onClick={onRegisterClick}
        >
          Sign up
        </button>
      </p>
    </ModalWithForm>
  );
}

export default LoginModal;
