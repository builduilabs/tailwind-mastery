export default function Home() {
  return (
    <div className="flex text-white h-screen">
      <div className="bg-gray-900 px-3 pt-3 space-y-2 overflow-y-scroll">
        {[...Array(40).keys()].map((x, i) => (
          <div className="w-12 h-12 bg-white rounded-full text-gray-900 flex items-center justify-center">
            {i}
          </div>
        ))}
      </div>

      <div className="bg-gray-700 w-60 flex flex-col">
        <div className="h-12 flex-shrink-0 shadow-md flex items-center px-3">
          Tailwind CSS
        </div>
        <div className="p-3 space-y-2 overflow-y-scroll">
          {[...Array(40).keys()].map((x, i) => (
            <p>Channel {i}</p>
          ))}
        </div>
      </div>

      {/* <div className="bg-gray-500 flex-1 flex flex-col">
        <div className="h-12 flex-shrink-0 shadow-md flex items-center px-3">
          Messages
        </div>
        <div className="p-3 space-y-2 overflow-y-scroll">
          {[...Array(40).keys()].map((x, i) => (
            <p>Message {i}</p>
          ))}
        </div>
      </div> */}
    </div>
  );
}
