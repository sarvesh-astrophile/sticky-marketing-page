import Image from "next/image";
import Navbar from "@/app/components/navbar";
import Core from "@/app/components/core";

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative">
      <Navbar />
      <Core />
      <div className="relative bg-white border-t border-slate-200 rounded-b-xl pb-8 -mb-8 dark:bg-slate-800 dark:border-slate-900/50">
        <iframe
          src="/example"
          title="Mobile-first Demo"
          className="w-full h-[30.625rem]"
          sandbox="allow-scripts allow-same-origin"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
