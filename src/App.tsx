import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import AuthCallbackPage from "./pages/AuthCallbackPage";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />

      <Route
        path="/user-profile"
        element={
          <Layout>
            <p>User Profile</p>
          </Layout>
        }
      />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default App;
