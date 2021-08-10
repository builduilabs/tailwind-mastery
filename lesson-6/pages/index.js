export default function Home() {
  return (
    <div className="flex h-screen text-gray-100">
      <div className="p-3 space-y-2 overflow-y-scroll bg-gray-900">
        {[...Array(40)].map((_, i) => (
          <div className="flex items-center justify-center w-12 h-12 text-gray-800 bg-white rounded-full">
            {i}
          </div>
        ))}
      </div>

      <div className="flex flex-col bg-gray-800 w-60">
        <div className="flex items-center h-12 px-3 font-semibold text-white shadow-md font-title">
          Tailwind CSS
        </div>
        <div className="flex-1 p-3 space-y-2 overflow-y-scroll font-medium text-gray-300 ">
          <p className="text-white">general</p>
          {[...Array(40)].map((_, i) => (
            <p>channel {i}</p>
          ))}
        </div>
      </div>

      <div className="flex flex-col flex-1 bg-gray-700">
        <div className="flex items-center h-12 px-3 shadow-md">general</div>
        <div className="flex-1 p-3 space-y-4 overflow-y-scroll">
          {[...Array(40)].map((_, i) => (
            <p>
              Message {i}. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Vel saepe laudantium sed reprehenderit incidunt! Hic rem
              quos reiciendis, fugit quae ratione beatae veniam laborum
              voluptatem, iusto dolorum, voluptates suscipit quia.
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
