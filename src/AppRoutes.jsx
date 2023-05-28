import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import RedirectComponent from "./components/Redirect";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<RedirectComponent />} />
    </Routes>
  );
};

export default AppRoutes;
