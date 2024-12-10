import { Route, Routes } from "react-router-dom";
import HomeLayout from "./pages/Client/Home.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
      </Routes>
    </div>
  );
}

export default App;
