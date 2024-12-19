import { Route, Routes } from "react-router-dom";
import ClientHome from "./pages/Client/Home.jsx";
import HomeLayout from "./pages/Global/Home.jsx";
import FreelancerHome from "./pages/Freelancer/Home.jsx"
import Login from "./pages/login.jsx";
import SignUp from "./pages/SignUp.jsx";
import AboutUs from "./pages/Global/AboutUs.jsx";
import ContactUs from "./pages/Global/ContactUs.jsx";
import PrivacyPolicy from "./pages/Global/PrivacyPolicy.jsx";
import TearmsAndConditions from "./pages/Global/TearmsAndConditions.jsx";
import RefundPolicy from "./pages/Global/RefundPolicy.jsx";


import '../src/app.css'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/Client" element={<ClientHome />} />
        <Route path="/" element={<HomeLayout />} />
        <Route path="/Freelancer" element={<FreelancerHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
        <Route path="/tearmsandconditions" element={<TearmsAndConditions/>} />
        <Route path="/refundpolicy" element={<RefundPolicy/>} />

      </Routes>

    </div>
  );
}

export default App;
