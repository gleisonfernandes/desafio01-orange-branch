import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import { DataProvider } from '../Context';


const SiteRouterProvider = () => {

  return (
    <DataProvider>
      <Router>
        <Routes>
            <Route index element={<Login />} />
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default SiteRouterProvider;