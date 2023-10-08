import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
