import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import { DataProvider } from '../Context';
import Feed from '../pages/Feed';


const SiteRouterProvider = () => {

  return (
    <DataProvider>
      <Router>
        <Routes>
            <Route index element={<Login />} />
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/feed" element={<Feed />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default SiteRouterProvider;