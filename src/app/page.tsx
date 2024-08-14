import Image from "next/image";
import Navbar from "@/app/components/navbar";
import Core from "@/app/components/core";

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative">
      <Navbar />
      <Core />
    </div>
  );
}
