import { useEffect, useState } from 'react';
import './App.css';
import './index.css';
import BalanceCard from './components/BalanceCard/balanceCard';
import LineChartComponent from './components/Chart/chart';
import TimeframeSelector from './components/TimeFrameSelector/timeFrameSelector';
import { generateMockData, RANGE_TO_POINTS } from './utils/generateMockData';

export default function App() {
  const [selectedRange, setSelectedRange] = useState('1w');
  const [chartData, setChartData] = useState([]);
  const [isFullscreen, setIsFullscreen] = useState(false); 

  useEffect(() => {
    const points = RANGE_TO_POINTS[selectedRange] || 40;
    const data = generateMockData(points);
    setChartData(data);
  }, [selectedRange]);

  const toggleFullscreen = () => setIsFullscreen(prev => !prev);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f9f9fb]">
      <div
        className={`
          ${isFullscreen ? 'fixed top-0 left-0 w-screen h-screen z-[9999] bg-white' : 'w-[800px] h-[600px]'}
          rounded-xl shadow-lg p-4 flex flex-col transition-all duration-300
        `}
      >
        <BalanceCard />
        <TimeframeSelector selected={selectedRange} onSelect={setSelectedRange} />
        <LineChartComponent data={chartData} onFullscreen={toggleFullscreen} isFullscreen={isFullscreen} />
      </div>
    </div>
  );
}
