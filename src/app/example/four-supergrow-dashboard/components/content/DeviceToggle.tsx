"use client";

import React, { useState } from "react";
import { CiMobile3, CiDesktop } from "react-icons/ci";
import { FaTabletAlt } from "react-icons/fa";

interface DeviceIconProps {
  Icon: React.ElementType;
  isSelected: boolean;
  onClick: () => void;
}

const DeviceIcon: React.FC<DeviceIconProps> = ({
  Icon,
  isSelected,
  onClick,
}) => (
  <button
    className={`p-2 rounded-full ${
      isSelected
        ? "bg-blue-100 text-blue-500"
        : "text-gray-400 hover:bg-gray-100"
    }`}
    onClick={onClick}
  >
    <Icon size={20} />
  </button>
);

export default function DeviceToggle() {
  const [selectedDevice, setSelectedDevice] = useState<string>("mobile");

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-500 mr-2">Devices:</span>
      <DeviceIcon
        Icon={CiMobile3}
        isSelected={selectedDevice === "mobile"}
        onClick={() => setSelectedDevice("mobile")}
      />
      <DeviceIcon
        Icon={FaTabletAlt}
        isSelected={selectedDevice === "tablet"}
        onClick={() => setSelectedDevice("tablet")}
      />
      <DeviceIcon
        Icon={CiDesktop}
        isSelected={selectedDevice === "desktop"}
        onClick={() => setSelectedDevice("desktop")}
      />
    </div>
  );
}
