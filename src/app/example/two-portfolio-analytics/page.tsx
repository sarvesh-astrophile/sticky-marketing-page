"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { FaChartBar } from "react-icons/fa";
import { BsFlagFill } from "react-icons/bs";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const PortfolioAnalytics: React.FC = () => {
  const commonOptions: ApexOptions = {
    chart: {
      type: "area" as const,
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: "smooth",
      width: 1,
    },
    fill: {
      opacity: 0.3,
    },
    tooltip: {
      enabled: false,
    },
  };

  const portfolioViewsOptions: ApexOptions = {
    ...commonOptions,
    colors: ["#7edcac"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
        colorStops: [
          {
            offset: 0,
            color: "#7edcac",
            opacity: 0.9,
          },
          {
            offset: 100,
            color: "#f1fbf6",
            opacity: 0.5,
          },
        ],
      },
    },
  };

  const resumeDownloadedOptions: ApexOptions = {
    ...commonOptions,
    colors: ["#fa847c"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
        colorStops: [
          {
            offset: 0,
            color: "#fa847c",
            opacity: 0.9,
          },
          {
            offset: 100,
            color: "#fef8f7",
            opacity: 0.5,
          },
        ],
      },
    },
  };

  const portfolioViewsSeries = [
    {
      name: "Portfolio Views",
      data: [1000, 1250, 1150, 1100, 1200, 1250, 1300],
    },
  ];

  const resumeDownloadedSeries = [
    {
      name: "Resume Downloaded",
      data: [140, 135, 130, 132, 128, 125, 131],
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 mb-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <div className="bg-orange-100 p-2 rounded-lg mr-3">
            <FaChartBar className="text-orange-500 text-lg" />
          </div>
          <h2 className="text-lg font-semibold text-gray-800">
            Portfolio Analytics
          </h2>
        </div>
        <span className="text-gray-500 text-sm">This Week</span>
      </div>
      <div className="mb-4">
        <div className="flex justify-between items-center mb-1">
          <div>
            <div className="text-gray-500 text-base">Portfolio Views</div>
            <div className="flex items-center">
              <span className="text-lg font-semibold text-gray-800 mr-2">
                1.3k
              </span>
              <span className="text-green-500 font-semibold text-sm">↑12%</span>
            </div>
          </div>
          <div className="w-1/2 h-8">
            <Chart
              options={portfolioViewsOptions}
              series={portfolioViewsSeries}
              type="area"
              height="100%"
            />
          </div>
        </div>
      </div>
      <div className="border-t-2 border-gray-200 border-dashed pt-4">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-gray-500 text-base">Resume Downloaded</div>
            <div className="flex items-center">
              <span className="text-lg font-semibold text-gray-800 mr-2">
                131
              </span>
              <span className="text-red-500 font-semibold text-sm">↓3.4%</span>
            </div>
          </div>
          <div className="w-1/2 h-8">
            <Chart
              options={resumeDownloadedOptions}
              series={resumeDownloadedSeries}
              type="area"
              height="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const PortfolioScore: React.FC = () => {
  const score = 40;

  const options: ApexOptions = {
    chart: {
      type: "donut",
    },
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        offsetY: 0,
        donut: {
          size: "50%",
          labels: {
            show: false,
          },
        },
      },
    },
    fill: {
      colors: ["#8b5cf6", "#E2E8F0"],
    },
    stroke: {
      width: 2,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };

  const series = [score, 100 - score];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4">
      <div className="flex items-center">
        <div className="bg-purple-100 p-2 rounded-lg mr-3">
          <BsFlagFill className="text-purple-500 text-lg" />
        </div>
        <h2 className="text-lg font-semibold text-gray-800">Portfolio Score</h2>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex-1 pr-4">
          <div className="text-4xl font-bold text-gray-800 mb-2">{score}%</div>
          <p className="text-gray-600 text-sm">
            Your profile needs to be at least 70% complete to get good views.
          </p>
        </div>
        <div className="w-40 h-40">
          <Chart
            options={options}
            series={series}
            type="donut"
            height="100%"
            width="100%"
          />
        </div>
      </div>
      <div className="border-t-2 border-gray-200 border-dashed pt-4">
        <div className="text-gray-500 text-sm">Last updated: 16 Jun 2024</div>
      </div>
    </div>
  );
};

const TwoGraphs: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-6">
      <div className="container mx-auto px-4 max-w-md">
        <PortfolioAnalytics />
        <PortfolioScore />
      </div>
    </div>
  );
};

export default TwoGraphs;
