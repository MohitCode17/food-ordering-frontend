import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <p>Home Page</p>
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

      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default App;
