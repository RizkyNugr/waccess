import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingpage';
import HomePage from './pages/homepage';
import LoginPage from './pages/login';
import SignUpPage from './pages/signin';
import ProjectSection from './pages/fiturproject';
import MapPage from './pages/petapersebaran';
import AdminDashboard from './admin/admin';
import Forum from './pages/forum';
import SuperAdmin from './admin/superadmin';
import EditUser from './admin/edituser';
import TermsAndConditions from './pages/termscondition';
import AdminBerita from './admin/adminberita';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/admin" element={<AdminDashboard/>} />
          <Route path="/superadmin" element={<SuperAdmin/>} />
          <Route path="/adminberita" element={<AdminBerita/>}/>
          <Route path="/edituser" element={<EditUser/>} />

          <Route path="/termscon" element={<TermsAndConditions/>} />
          <Route path="/" element={<LandingPage/>} />
          <Route path="/signin" element={<SignUpPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/Homepage" element={<HomePage />} />
          <Route path="/fiturproject" element={<ProjectSection/>} />
          <Route path="/petapersebaran" element={<MapPage/>} />
          <Route path="/forum" element={<Forum/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
