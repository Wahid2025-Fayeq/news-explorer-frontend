import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, isLoggedin }) {
  if (!isLoggedin) {
    return <Navigate to="/" replace />;
  }
  return children;
}
export default ProtectedRoute;
