import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
