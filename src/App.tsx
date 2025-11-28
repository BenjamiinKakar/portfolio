import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProfilePage from './pages/ProfilePage';
import LoadingScreen from './components/LoadingScreen';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <LoadingScreen />
      <div style={{ minHeight: '100vh' }}>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
