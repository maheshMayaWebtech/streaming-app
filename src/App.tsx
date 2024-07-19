import { FC} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFoundPage from "./pages/NotFoundPage";
import Sidebar from "./components/Sidebar/Sidebar";

const App: FC = () => {
  return (
    <>
    <Sidebar />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
