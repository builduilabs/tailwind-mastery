export default function Home() {
  return (
    <div className="flex text-white h-screen">
      <div className="bg-gray-800 p-4">
        <div className="bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center">
          TW
        </div>
      </div>
      <div className="bg-gray-700 w-60 flex flex-col">
        <div className="p-4 shadow-md">Tailwind CSS</div>
        <div className="p-4 flex-1">channels</div>
      </div>
      <div className="bg-gray-600 flex-1 flex flex-col">
        <div className="p-4 shadow-md">general</div>
        <div className="p-4 flex-1">messages</div>
      </div>
    </div>
  );
}
