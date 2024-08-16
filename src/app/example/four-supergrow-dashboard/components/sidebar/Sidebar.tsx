import React from "react";
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";
import UpgradePlan from "./UpgradePlan";

export default function Sidebar() {
  return (
    <div className="bg-white w-64 h-full shadow-lg flex flex-col border-r-[1px] border-gray-200">
      <Logo />
      <nav className="flex-grow px-4 pt-2 flex flex-col">
        <div className="mb-4">
          <SidebarItem icon="HiPencilAlt" label="Write Post" isButton />
        </div>
        <div className="mb-auto">
          <SidebarItem icon="HiSparkles" label="Post Generator" />
          <SidebarItem icon="HiLightBulb" label="Ideas Generator" />
          <SidebarItem icon="HiPhotograph" label="Carousel Maker" />
          <SidebarItem icon="HiDocument" label="Posts" />
          <SidebarItem icon="HiFire" label="Content Inspiration" />
          <SidebarItem icon="HiCollection" label="Posts for You" />
          <SidebarItem icon="HiCalendar" label="Schedule" />
        </div>
        <div>
          <SidebarItem icon="HiCog" label="Preferences" />
          <SidebarItem icon="HiStar" label="Feature Request" />
        </div>
      </nav>
      <UpgradePlan
        wordsGenerated={1250}
        totalWords={5000}
        daysUntilReset={29}
      />
    </div>
  );
}
