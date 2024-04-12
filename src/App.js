import './App.css';
import HomeCard from './topPage';
import Header from './Header';
import InfoCard from './otherCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header
        buttons={{
          left: ['Home', 'Contact', 'About Me']
        }}
      />
      <HomeCard />  
      <InfoCard />
      </header>
    </div>
  );
}

export default App;
