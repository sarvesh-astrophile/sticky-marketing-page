import React from "react";
import { IconType } from "react-icons";
import * as Icons from "react-icons/hi";

interface SidebarItemProps {
  icon: keyof typeof Icons;
  label: string;
  active?: boolean;
  isButton?: boolean;
}

export default function SidebarItem({
  icon,
  label,
  active = false,
  isButton = false,
}: SidebarItemProps) {
  const IconComponent = Icons[icon] as IconType;

  if (isButton) {
    return (
      <button className="bg-[#0ba5ed] text-white py-3 w-full rounded-full font-medium flex items-center justify-center hover:bg-[#00A8E6] transition-colors shadow-md">
        <IconComponent className="w-5 h-5 mr-2" />
        {label}
      </button>
    );
  }

  return (
    <a
      href="#"
      className={`flex items-center px-2 py-2 text-sm font-semibold rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-700 transition-colors ${
        active ? "bg-gray-100 text-gray-700" : ""
      }`}
    >
      <IconComponent className="w-5 h-5 mr-3 text-gray-400" />
      <span>{label}</span>
    </a>
  );
}
