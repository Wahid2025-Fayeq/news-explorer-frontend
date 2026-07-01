import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import "./LoginModal.css";

function LoginModal({ isOpen, onClose, onRegisterClick, onLogin }) {
  const { values, errors, isValid, handleChange, resetForm } =
    useFormAndValidation();
  const [serverError, setServerError] = useState("");

  useEffect(() => {
    if (isOpen) {
      resetForm();
      setServerError("");
    }
  }, [isOpen, resetForm]);

  const handleInputChange = (e) => {
    handleChange(e);
    setServerError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) {
      return;
    }
    onLogin({
      email: values.email,
      password: values.password,
    }).catch(() => {
      setServerError("Incorrect email or password");
    });
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
        name="email"
        className="login-form__input"
        type="email"
        placeholder="Enter email"
        value={values.email || ""}
        onChange={handleInputChange}
        required
      />

      <span className="login-form__error">{errors.email}</span>

      <label htmlFor="login-password" className="login-form__label">
        Password
      </label>

      <input
        id="login-password"
        className="login-form__input"
        type="password"
        name="password"
        placeholder="Enter password"
        value={values.password || ""}
        onChange={handleInputChange}
        required
      />
      <span className="login-form__error">{errors.password}</span>
      <span className="login-form__server-error">{serverError}</span>

      <button
        type="submit"
        className={`login-form__button ${
          isValid ? "login-form__button_active" : ""
        }`}
        disabled={!isValid}
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
