import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import Register from './pages/Register';
import Login from './pages/Login.js';
import Admin from './pages/Admin';
import ManageMoney from './pages/ManageMoney';
import SavingsCalculator from './pages/SavingsCalculator';
import BudgetCalculator from './pages/BudgetCalculator';
import Contact from './pages/Contact';
import AboutUs from './pages/About';
import LearningPage from './pages/LearningPage.js';
import DailyTips from './pages/DailyTips.js';
import FAQs from './pages/FAQs';
import PrivacyPolicy from './pages/PrivacyPolicy.js';
import Footer from './components/Footer';
import { useLocation } from 'react-router-dom';
import SearchResults from './pages/SearchResults';

function App() {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });


  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const location = useLocation();

  const hideFooterRoutes = ['/login', '/register'];
  const showFooter = !hideFooterRoutes.includes(location.pathname);

  return (
    <>

      <Routes>
        
        <Route path="/" element={<HomePage user={user} onLogout={handleLogout} />} />
        <Route path="/about" element={<AboutUs user={user} onLogout={handleLogout} />} />
        <Route path="/learning" element={<LearningPage user={user} onLogout={handleLogout} />} />
        <Route path="/daily-tips" element={<DailyTips user={user} onLogout={handleLogout} />} />
        <Route path="/contact" element={<Contact user={user} onLogout={handleLogout} />} />
        <Route path="/faqs" element={<FAQs user={user} onLogout={handleLogout} />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy user={user} onLogout={handleLogout} />} />

        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />

        <Route path="/admin" element={user ? <Admin user={user} onLogout={handleLogout} /> : <Navigate to="/" />} />
        <Route path="/manage-money" element={user ? <ManageMoney user={user} onLogout={handleLogout} /> : <Navigate to="/" />} />
        <Route path="/budget-calculator" element={user ? <BudgetCalculator user={user} onLogout={handleLogout} /> : <Navigate to="/" />} />
        <Route path="/savings-calculator" element={user ? <SavingsCalculator user={user} onLogout={handleLogout} /> : <Navigate to="/" />} />

        <Route path="/search" element={<SearchResults user={user} onLogout={handleLogout} />} />
        
      </Routes>
    
    {showFooter && <Footer />}
    </>
  );
}

export default App;


