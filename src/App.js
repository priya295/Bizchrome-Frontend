import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./pages/Client/Home.jsx";
import './assets/css/main.css';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/client" element={<HomeLayout />} />
      </Routes>

    </div>
  );
}

export default App;
