"use client";

import React, { useState } from "react";

const OneNotificationLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "viewAll" | "verified" | "mentions"
  >("viewAll");

  const tabs = [
    { id: "viewAll", label: "View all", count: 10 },
    { id: "verified", label: "Verified" },
    { id: "mentions", label: "Mentions" },
  ];

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
      <div className="px-4 py-3 bg-white flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">
          Your notifications
        </h2>
        <button className="text-gray-400 hover:text-gray-500">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="px-4 py-2 bg-white">
        <div className="flex items-center rounded-lg bg-gray-200 p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                activeTab === tab.id
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
            >
              {tab.label}
              {tab.count && (
                <span
                  className={`ml-1 px-2 py-0.5 rounded-full text-xs ${
                    activeTab === tab.id ? "bg-gray-100" : "bg-gray-300"
                  }`}
                >
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="p-4 space-y-4">
        {[
          {
            avatar: "https://randomuser.me/api/portraits/women/65.jpg",
            name: "Caitlyn",
            action: "shared two files in",
            target: "ConnectBank",
            time: "2 hours ago",
            department: "Design",
            online: true,
            content: (
              <div className="mt-2 relative">
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-3 z-10 relative">
                  <div className="flex items-center">
                    <svg
                      className="w-12 h-12 text-gray-400 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div className="flex-grow">
                      <p className="text-sm font-medium text-gray-900">
                        Sign up idea 01.jpg
                      </p>
                      <p className="text-xs text-gray-500">240 KB</p>
                    </div>
                    <svg
                      className="w-5 h-5 text-gray-400 absolute top-3 right-3 hover:text-gray-600 hover:cursor-pointer"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                      />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-1 right-1 h-2 bg-white border border-gray-200 rounded-b-lg shadow-sm transform translate-y-1"></div>
                <div className="absolute bottom-0 left-2 right-2 h-2 bg-white border border-gray-200 rounded-b-lg shadow-sm transform translate-y-2"></div>
              </div>
            ),
          },
          {
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            name: "Zaid",
            action: "commented in",
            target: "ConnectBank",
            time: "2 hours ago",
            department: "Engineering",
            online: true,
            content: (
              <div className="mt-2 p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
                <p className="text-sm text-gray-700">
                  Finished up the first crack at the new dashboard! Looks really
                  great. Let me know how it goes.
                </p>
              </div>
            ),
          },
          {
            avatar: "https://randomuser.me/api/portraits/men/75.jpg",
            name: "Marco",
            action: "requested access to",
            target: "Surface X",
            time: "6 hours ago",
            department: "Design",
            content: (
              <div className="mt-2 space-x-2">
                <button className="px-3 py-1 bg-white text-gray-700 text-sm font-medium rounded-md border border-gray-300 hover:bg-gray-50">
                  Decline
                </button>
                <button className="px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600">
                  Accept
                </button>
              </div>
            ),
          },
        ].map((notification, index) => (
          <div
            key={index}
            className="flex items-start p-2 rounded-lg transition-colors duration-200 hover:bg-gray-50"
          >
            <div className="relative mr-3 flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src={notification.avatar}
                alt={`${notification.name}'s avatar`}
              />
              {notification.online && (
                <div className="absolute top-0 left-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              )}
            </div>
            <div className="flex-grow">
              <p className="text-sm text-gray-900">
                <span className="font-semibold">{notification.name}</span>{" "}
                {notification.action}{" "}
                <span className="font-semibold">{notification.target}</span>
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {notification.time} • {notification.department}
              </p>
              {notification.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OneNotificationLayout;
