import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import { DataProvider } from '../Context';
import Feed from '../pages/Feed';
import Post from '../pages/Post';
import { AuthProvider } from '../providers/AuthProvider';
import ProtectedRoutes from '../components/ProtectedRoutes';


const SiteRouterProvider = () => {

  return (
    <AuthProvider>
      <DataProvider>
        <Router>
          <Routes>
              <Route index element={<Login />} />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={
                <ProtectedRoutes>
                  <Profile />
                </ProtectedRoutes>
                } />
              <Route path="/feed" element={
                <ProtectedRoutes>
                  <Feed />
              </ProtectedRoutes>
                } />
              <Route path="/post/:id" element={
                <ProtectedRoutes>
                  <Post />
                </ProtectedRoutes>
                } />
          </Routes>
        </Router>
      </DataProvider>
    </AuthProvider>
  );
}

export default SiteRouterProvider;