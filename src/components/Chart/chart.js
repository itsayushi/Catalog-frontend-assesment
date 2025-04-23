import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    Area,
    AreaChart,
  } from 'recharts';

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white shadow-md rounded px-3 py-1 text-sm text-black">
          ${payload[0].value.toLocaleString()}
        </div>
      );
    }
    return null;
  };
  
export default function LineChartComponent({
    data,
    color = '#5F4DEE',
    height = 300,
    onFullscreen,
    isFullscreen, 
  }) {
    return (
      <div className="mt-4">
        <div className="flex items-center gap-4 pb-4 text-sm font-medium text-gray-600">
          <button
            onClick={onFullscreen}
            className="flex items-center gap-1 hover:text-black transition"
          >
            <span className="text-lg">
              {isFullscreen ? '↙' : '↗'}
            </span>
            {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          </button>
          <span className="hover:text-black transition cursor-pointer">+ Compare</span>
        </div>
  
        <ResponsiveContainer width="100%" height={height}>
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.2} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="time" hide />
            <YAxis hide domain={['auto', 'auto']} />
            <Tooltip content={<CustomTooltip />} />
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <Area
              type="monotone"
              dataKey="value"
              stroke={color}
              fillOpacity={1}
              fill="url(#chartGradient)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
  