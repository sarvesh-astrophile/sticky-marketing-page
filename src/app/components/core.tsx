const Core = () => {
  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-lg border border-[#D4D4D8] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.25),_0px_1px_2px_0px_rgba(0,0,0,0.24)] overflow-clip relative z-10 -mt-16">
      <div className="px-4 py-2 border border-[#D4D4D8] bg-white shadow-[0px_1px_3px_0px_rgba(0,0,0,0.25),_0px_1px_2px_0px_rgba(0,0,0,0.24)]">
        <div className="flex justify-between items-center">
          <div className="bg-[#E8FFF3] text-[#00BA7C] px-3 py-1 rounded-full text-xs font-semibold">
            #1 of 48hr Design Challenge
          </div>
          <div className="text-[#6E7191] text-xs">Made by @AshishM9301</div>
          <div className="flex items-center space-x-4">
            <div className="text-[#6E7191] text-xs flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 8V12L15 15"
                  stroke="#6E7191"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="#6E7191"
                  strokeWidth="2"
                />
              </svg>
              Turnaround time: 28hrs
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-64 bg-gray-200"></div>
    </div>
  );
};

export default Core;
