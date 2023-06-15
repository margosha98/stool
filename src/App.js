import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import './scss/app.scss';
import Main from './components/Pages/Main';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
    </div>
  );
}

export default App;
