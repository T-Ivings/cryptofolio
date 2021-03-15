import './App.scss';
import SideNav from './Components/Nav/SideNav';
import Doughnut from './charts/doughnut';
import Wallet from './wallet/index';
import PerformanceLine from './charts/performanceLine';
import PerformanceBar from './charts/performanceBar';
import PerformanceMultiLine from './charts/performanceMultiLine';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="main-container">
          <div className="side-nav">
            <SideNav />
          </div>
        </div>
        <div class="chart-container">
          <PerformanceMultiLine />
          <PerformanceLine />
          <PerformanceBar />
          <Doughnut />
        </div>
        <div class="wallet-container">
          <Wallet />
        </div>
      </header>
    </div>
  );
}

export default App;
