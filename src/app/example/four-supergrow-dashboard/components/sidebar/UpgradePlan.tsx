import React from "react";
import { HiLightningBolt, HiInformationCircle } from "react-icons/hi";

interface UpgradePlanProps {
  wordsGenerated: number;
  totalWords: number;
  daysUntilReset: number;
}

export default function UpgradePlan({
  wordsGenerated,
  totalWords,
  daysUntilReset,
}: UpgradePlanProps) {
  const percentage = (wordsGenerated / totalWords) * 100;

  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200 m-2">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <span className="text-sm font-medium text-gray-700">
            Words generated
          </span>
          <HiInformationCircle className="w-4 h-4 ml-1 text-gray-400" />
        </div>
        <span className="text-sm font-medium text-gray-700">
          {(wordsGenerated / 1000).toFixed(2)}k / {totalWords / 1000}k
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
        <div
          className="bg-[#0ba5ed] h-2 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="text-xs text-gray-500 mb-4">
        Monthly usage resets in {daysUntilReset} days
      </div>
      <button className="w-full bg-white text-gray-600 border border-gray-300 hover:border-[#0ba5ed] rounded-full py-2 px-4 text-sm font-medium flex items-center justify-center  hover:text-[#0ba5ed] transition-colors group">
        <HiLightningBolt className="w-4 h-4 mr-2 group-hover:text-[#0ba5ed]" />
        Upgrade Plan
      </button>
    </div>
  );
}
