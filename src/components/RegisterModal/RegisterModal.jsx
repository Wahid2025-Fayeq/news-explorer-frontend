import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import "./RegisterModal.css";

function RegisterModal({ isOpen, onClose, onLoginClick, onRegister }) {
  const { values, errors, isValid, handleChange, resetForm } =
    useFormAndValidation();
  const [serverError, setServerError] = useState("");

  useEffect(() => {
    if (isOpen) {
      resetForm();
      setServerError("");
    }
  }, [isOpen, resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onRegister({
      email: values.email,
      password: values.password,
      name: values.username,
    }).catch((err) => {
      setServerError(
        err.message || "Something went wrong. Please try again later.",
      );
    });
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
        name="email"
        className="register-form__input"
        type="email"
        placeholder="Enter email"
        value={values.email || ""}
        onChange={handleChange}
        required
      />
      <span className="register-form__error">{errors.email}</span>

      <label htmlFor="register-password" className="register-form__label">
        Password
      </label>

      <input
        id="register-password"
        name="password"
        className="register-form__input"
        type="password"
        placeholder="Enter password"
        value={values.password || ""}
        onChange={handleChange}
        minLength="8"
        required
      />

      <span className="register-form__error">{errors.password}</span>

      <label htmlFor="register-username" className="register-form__label">
        Username
      </label>

      <input
        id="register-username"
        name="username"
        className="register-form__input"
        type="text"
        placeholder="Enter username"
        value={values.username || ""}
        onChange={handleChange}
        minLength="2"
        maxLength="30"
        required
      />

      <span className="register-form__error">{errors.username}</span>
      <span className="register-form__server-error">{serverError}</span>

      <button
        type="submit"
        className={`register-form__button ${
          isValid ? "register-form__button_active" : ""
        }`}
        disabled={!isValid}
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
