import './App.scss';
import Button from './components/Button';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        <Button />
      </header>
    </div>
  );
}

export default App;
