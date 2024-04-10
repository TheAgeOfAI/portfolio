import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header
        buttons={{
          left: ['Home', 'Contact', 'About Me']
        }}
      />
      </header>
    </div>
  );
}

export default App;
