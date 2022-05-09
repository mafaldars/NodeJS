import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { LoginModal } from './components/modals/LoginModal';
import { Customers } from './pages/Customers';
import { Dashboard } from './pages/Dashboard';
import { Products } from './pages/Products';

export function App() {

  const [isLoginVisible, setIsLoginVisible] = useState(false);

  function handleCloseLogin() {
    setIsLoginVisible(false);
  }

  function handleOpenLogin() {
    setIsLoginVisible(true);
  }

  return (
    <>
      <Header openLoginModal={handleOpenLogin} />
      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>
      <Footer />

      <LoginModal isOpen={isLoginVisible} onRequestClose={handleCloseLogin} />
    </>   
  );
}