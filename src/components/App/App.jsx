import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import LoginModal from "../LoginModal/LoginModal";
import "./App.css";

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const closeModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Main onLoginClick={handleLoginClick} />} />
        <Route path="/saved-news" element={<SavedNews />} />
      </Routes>

      <LoginModal isOpen={isLoginModalOpen} onClose={closeModal} />
    </>
  );
}

export default App;
