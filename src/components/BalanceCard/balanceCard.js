import React from "react";


export default function BalanceCard () {
    return (
    <>
   
        <div className="p-8">
        <h2 className="text-4xl font-bold mb-2">$63,179.71 <span className="text-gray-500 text-lg">USD</span></h2>
        <p className="text-green-600 mb-6 text-sm">+2,161.42 (3.54%)</p>
        <div className="flex space-x-6 border-b border-gray-300">
            <button className="text-gray-400 pb-2">Summary</button>
            <button className="text-gray border-b-2 border-purple-500 pb-2">Chart</button>
            <button className="text-gray-400 pb-2">Statistics</button>
            <button className="text-gray-400 pb-2">Analysis</button>
            <button className="text-gray-400 pb-2">Settings</button>
        </div>
        </div>
        
            </> 
      );
}