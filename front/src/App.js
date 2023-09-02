import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Callback from "./components/Callback";
import Test from "./components/Test";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login/oauth2/callback/kakao" element={<Callback />} />
        <Route path="/about" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
