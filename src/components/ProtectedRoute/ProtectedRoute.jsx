import { Navigate } from "react-router-dom";
import { useEffect } from "react";

function ProtectedRoute({ children, isLoggedin, onLoginClick }) {
  useEffect(() => {
    if (!isLoggedin) {
      onLoginClick();
    }
  }, [isLoggedin, onLoginClick]);

  if (!isLoggedin) {
    return <Navigate to="/" replace />;
  }
  return children;
}
export default ProtectedRoute;
