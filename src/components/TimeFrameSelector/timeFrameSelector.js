
const ranges = ['1d', '3d', '1w', '1m', '6m', '1y', 'max'];


export default function TimeframeSelector({ selected, onSelect }) {
    return (
      <div className="flex justify-end">
        {ranges.map((range) => (
          <button
            key={range}
            onClick={() => onSelect(range)}
            className={`text-sm px-3 py-1 rounded ${
                range === selected
                ? 'bg-[#5F4DEE] text-white'
                : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            {range}
          </button>
        ))}
      </div>
    );
  }

