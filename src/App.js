import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import './scss/app.scss';
import Main from './components/Pages/Main';
import CartPage from './components/Pages/CartPage';
import NotFoundPage from './components/Pages/NotFoundPage';
import { Routes, Route } from 'react-router-dom';

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
