import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

function RegisterModal({ isOpen, onClose, onLoginClick, onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const isFormValid =
    email.trim() !== "" && password.trim() !== "" && username.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ email, password, name: username });
  };

  return (
    <ModalWithForm
      title="Sign up"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      formClassName="register-form"
    >
      <label htmlFor="register-email" className="register-form__label">
        Email
      </label>

      <input
        id="register-email"
        className="register-form__input"
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="register-password" className="register-form__label">
        Password
      </label>

      <input
        id="register-password"
        className="register-form__input"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <label htmlFor="register-username" className="register-form__label">
        Username
      </label>

      <input
        id="register-username"
        className="register-form__input"
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <button
        type="submit"
        className={`register-form__button ${
          isFormValid ? "register-form__button_active" : ""
        }`}
        disabled={!isFormValid}
      >
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
    </ModalWithForm>
  );
}

export default RegisterModal;
