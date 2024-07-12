import './App.css';
import HomeCard from './topPage';
import Header from './Header';
import {InfoCard, VerInfoCard, EndCredits} from './otherCards';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <Header
        buttons={{
          left: ['Home', 'Contact', 'About Me']
        }}
      /> */}
        <Header />
      </header>
      <HomeCard />  
      <InfoCard />
      <VerInfoCard />
      <EndCredits />
    </div>
  );
}

export default App;
