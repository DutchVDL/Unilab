import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Authorization/Login";

import Auth from "./components/Authorization/Auth";

import FormPage from "./components/FormPage/FormPage";
import Navigation from "./components/Header/Navigation";
import Posts from "./components/Posts/Posts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/authorization" element={<Login />} />

        <Route
          path="/profile"
          element={
            <Auth>
              <Navigation />
            </Auth>
          }
        >
          <Route index element={<FormPage />} />
          <Route path="api" element={<Posts />} />
        </Route>

        <Route
          path="*"
          element={<h1 style={{ backgroundColor: "white" }}>Error</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
