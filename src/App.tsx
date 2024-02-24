import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout showHero>
            <Home />
          </Layout>
        }
      />

      <Route element={<ProtectedRoute />}>
        <Route
          path="/user-profile"
          element={
            <Layout>
              <UserProfilePage />
            </Layout>
          }
        />
      </Route>
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default App;
