export const generateMockData = (points = 40) => {
    const data = [];
    const now = new Date();
    for (let i = 0; i < points; i++) {
      data.unshift({
        time: new Date(now.getTime() - i * 3600 * 1000).toLocaleDateString(), // hourly steps
        value: (Math.random() * 10000 + 50000).toFixed(2),
      });
    }
    return data;
  };
  
  export const RANGE_TO_POINTS = {
    '1d': 10,
    '3d': 20,
    '1w': 40,
    '1m': 60,
    '6m': 100,
    '1y': 200,
    max: 365,
  };
  
  export const ranges = Object.keys(RANGE_TO_POINTS);