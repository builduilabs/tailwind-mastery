export default function Home() {
  return (
    <>
      <div className="flex flex-col bg-gray-800 w-60">
        <div className="flex items-center h-12 px-3 font-semibold text-white shadow-md font-title">
          Dashboard
        </div>
        <div className="flex-1 p-3 space-y-2 overflow-y-scroll font-medium text-gray-300 ">
          <p className="text-white">Friends</p>
        </div>
      </div>

      <div className="flex flex-col flex-1 bg-gray-700"></div>
    </>
  );
}
