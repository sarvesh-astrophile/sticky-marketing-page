"use client";

import React, { useState } from "react";

const OnboardingPage: React.FC = () => {
  const [steps, setSteps] = useState({
    duplicate: false,
    copy: false,
    add: false,
  });

  const handleDuplicateClick = () => {
    setSteps((prev) => ({ ...prev, duplicate: true }));
  };

  const handleContentDatabaseChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.value.trim() !== "") {
      setSteps({ duplicate: true, copy: true, add: true });
    } else {
      setSteps((prev) => ({ ...prev, add: false }));
    }
  };

  const getDonutClass = (step: keyof typeof steps) => {
    return `flex-shrink-0 h-6 w-6 rounded-full border-8 ${
      steps[step] ? "border-gray-900" : "border-gray-200"
    } mr-4 mt-1 bg-white z-10`;
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white rounded-2xl shadow-lg p-7 max-w-[480px] w-full">
        <header className="mb-7">
          <p className="text-purple-600 font-semibold text-sm mb-2">
            STEP 2 / 3
          </p>
          <h1 className="text-[28px] font-bold mb-2 leading-tight">
            Connect Notion database
          </h1>
          <p className="text-gray-500 text-base">
            Bring your own databases or duplicate our databases.
          </p>
        </header>

        <hr className="border-t border-gray-200 mb-1" />

        <div className="space-y-8 relative">
          <div className="absolute left-[12px] top-[40px] h-[calc(40%-40px)] w-0.5 bg-gray-200"></div>
          <div className="absolute left-[12px] top-[calc(40%+2px)] h-[calc(15%-10px)] w-0.5 bg-gray-200"></div>

          <div className="flex items-start">
            <div className={getDonutClass("duplicate")}></div>
            <div>
              <h2 className="font-semibold mb-1 text-base">
                Duplicate database
              </h2>
              <p className="text-gray-500 mb-3 text-sm">
                Duplicate our Content, Pages, Tags, and Authors databases.
              </p>
              <button
                className="flex items-center px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 text-sm font-medium"
                onClick={handleDuplicateClick}
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                Duplicate Database
              </button>
            </div>
          </div>

          <div className="flex items-start">
            <div className={getDonutClass("copy")}></div>
            <div>
              <h2 className="font-semibold mb-1 text-base">
                Copy your Notion page URL
              </h2>
              <p className="text-gray-500 text-sm">
                Make sure to make the link public.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className={getDonutClass("add")}></div>
            <div>
              <h2 className="font-semibold mb-1 text-base">
                Add your Notion page URL
              </h2>
              <p className="text-gray-500 mb-3 text-sm">
                Please enter the notion page URL of your content database.
              </p>
              <div>
                <label
                  htmlFor="contentDatabase"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Content Database
                </label>
                <input
                  type="text"
                  id="contentDatabase"
                  placeholder="Enter URL"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-sm"
                  onChange={handleContentDatabaseChange}
                />
              </div>
            </div>
          </div>
        </div>

        <button className="w-full mt-8 bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-sm flex items-center justify-center">
          Next Step
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default OnboardingPage;
