import { Route, Routes } from "react-router-dom";
import ClientHome from "./pages/Client/Home.jsx";
import HomeLayout from "./pages/Global/Home.jsx";
import '../src/app.css'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/Client" element={<ClientHome />} />
        <Route path="/" element={<HomeLayout />} />
      </Routes>
    </div>
  );
}

export default App;
