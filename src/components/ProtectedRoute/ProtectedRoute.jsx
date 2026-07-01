import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ children, isLoggedin, openLoginOnRedirect = true }) {
  const location = useLocation();

  if (!isLoggedin) {
    return (
      <Navigate
        to="/"
        replace
        state={{ openLogin: openLoginOnRedirect, from: location.pathname }}
      />
    );
  }

  return children;
}

export default ProtectedRoute;
