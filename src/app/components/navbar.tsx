import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-purple-900 bg-opacity-90 bg-pattern relative z-0">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center w-full bg-[#7E22CE] overflow-hidden pb-16 shadow-[0px_3px_6px_0px_rgba(0,0,0,0.15),_0px_2px_4px_0px_rgba(0,0,0,0.12)] p-6">
          <Link
            href="/"
            className="bg-white text-purple-700 px-2 py-1 rounded-md transform -rotate-3 inline-block text-5xl font-bold tracking-wider"
          >
            REETLAB
          </Link>
          <div className="ml-8 py-8 md:p-12 md:ml-8">
            <h1 className="text-white text-2xl font-bold font-inter mb-4">
              Transform Your Website from Bland to Grand with Our Expert
              Services!
            </h1>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-purple-700 px-[24px] py-[8px] rounded-[100px] font-semibold hover:bg-opacity-90 transition shadow-[0px_10px_20px_0px_rgba(0,0,0,0.15),_0px_3px_6px_0px_rgba(0,0,0,0.10)]">
                Book a Call
              </button>
              <button className="bg-transparent text-white px-[24px] py-[8px] rounded-full font-semibold hover:underline transition flex items-center gap-2 group">
                Codebase @GitHub
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.72 7.72001C16.8606 7.57956 17.0512 7.50067 17.25 7.50067C17.4488 7.50067 17.6394 7.57956 17.78 7.72001L21.53 11.47C21.6705 11.6106 21.7493 11.8013 21.7493 12C21.7493 12.1988 21.6705 12.3894 21.53 12.53L17.78 16.28C17.7113 16.3537 17.6285 16.4128 17.5365 16.4538C17.4445 16.4948 17.3452 16.5168 17.2445 16.5186C17.1438 16.5204 17.0438 16.5019 16.9504 16.4641C16.857 16.4264 16.7722 16.3703 16.701 16.299C16.6297 16.2278 16.5736 16.143 16.5359 16.0496C16.4982 15.9562 16.4796 15.8562 16.4814 15.7555C16.4832 15.6548 16.5052 15.5555 16.5462 15.4635C16.5872 15.3715 16.6463 15.2887 16.72 15.22L19.19 12.75H3C2.80109 12.75 2.61032 12.671 2.46967 12.5303C2.32902 12.3897 2.25 12.1989 2.25 12C2.25 11.8011 2.32902 11.6103 2.46967 11.4697C2.61032 11.329 2.80109 11.25 3 11.25H19.19L16.72 8.78001C16.5795 8.63939 16.5007 8.44876 16.5007 8.25001C16.5007 8.05126 16.5795 7.86064 16.72 7.72001Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
