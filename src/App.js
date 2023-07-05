import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import './scss/app.scss';
import Main from './components/Pages/Main';
import CartPage from './components/Pages/CartPage';
import NotFoundPage from './components/Pages/NotFoundPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
