export default function Home() {
  return (
    <div className="flex text-white h-screen">
      <div className="bg-gray-800 p-3 space-y-2 overflow-y-scroll">
        {[...Array(50)].map((_, i) => (
          <div className="bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center">
            {i}
          </div>
        ))}
      </div>

      <div className="bg-gray-700 w-60 flex flex-col">
        <div className="px-4 h-12 shadow-md flex items-center">
          Tailwind CSS
        </div>
        <div className="p-4 flex-1 space-y-2 overflow-y-scroll">
          {[...Array(50)].map((_, i) => (
            <p># channel {i}</p>
          ))}
        </div>
      </div>

      <div className="bg-gray-600 flex-1 flex flex-col">
        <div className="px-4 h-12 shadow-md flex items-center">general</div>
        <div className="p-4 flex-1 space-y-4 overflow-y-scroll">
          {[...Array(50)].map((_, i) => (
            <p>
              Message {i}. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Dolorum sapiente ipsa, porro rem nihil sed quos ipsum error
              similique adipisci libero a! Delectus voluptates minima
              voluptatibus nesciunt earum nobis sit?
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
