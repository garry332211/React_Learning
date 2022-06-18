
import './App.css';
import Header from './components/Header/Header';
import MainPage from './components/MainPage';
import Meals from './components/Meals/Meals';

function App() {
  return (
    <div>
      <Header/>
      <MainPage />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
