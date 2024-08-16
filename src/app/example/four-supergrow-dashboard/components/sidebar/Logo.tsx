import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center justify-start h-16 px-4">
      <Image src="/logo.svg" alt="Supergrow Logo" width={132} height={32} />
    </div>
  );
}
