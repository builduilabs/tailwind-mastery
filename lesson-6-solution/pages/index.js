export default function Home() {
  return (
    <div className="flex text-gray-100 h-screen">
      <div className="bg-gray-900 p-3 space-y-2 overflow-y-scroll">
        <div className="bg-gray-700 text-gray-100 hover:bg-brand hover:text-white transition-all w-12 h-12 rounded-3xl hover:rounded-2xl flex items-center justify-center duration-200">
          <DiscordLogo className="w-7 h-5" />
        </div>

        {[...Array(40)].map((_, i) => (
          <div className="bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center">
            {i}
          </div>
        ))}
      </div>

      <div className="bg-gray-800 w-60 flex flex-col">
        <div className="px-3 h-12 shadow-md flex items-center font-semibold font-title text-white">
          Tailwind CSS
        </div>
        <div className="text-gray-300 font-medium p-3 flex-1 overflow-y-scroll space-y-2 ">
          <p className="text-white">general</p>
          {[...Array(40)].map((_, i) => (
            <p>channel {i}</p>
          ))}
        </div>
      </div>

      <div className="bg-gray-700 flex-1 flex flex-col">
        <div className="px-3 h-12 flex items-center shadow-md">general</div>
        <div className="p-3 flex-1 space-y-4 overflow-y-scroll">
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

function DiscordLogo(props) {
  return (
    <svg aria-hidden="false" viewBox="0 0 28 20" {...props}>
      <path
        fill="currentColor"
        d="M23.021 1.677A21.227 21.227 0 0017.658 0c-.252.462-.483.935-.687 1.418a19.931 19.931 0 00-5.943 0C10.82.935 10.59.462 10.337.005c-1.856.32-3.659.88-5.37 1.677C1.567 6.78.65 11.754 1.111 16.652A21.504 21.504 0 007.691 20c.532-.726 1.004-1.5 1.407-2.309a13.582 13.582 0 01-2.221-1.078c.188-.137.37-.274.547-.428a15.232 15.232 0 0013.152 0c.177.148.36.291.541.428-.707.424-1.453.787-2.22 1.078.408.808.875 1.578 1.405 2.303a21.5 21.5 0 006.58-3.347h.007c.541-5.674-.922-10.6-3.868-14.97zM9.681 13.638c-1.283 0-2.34-1.193-2.34-2.644S8.37 8.35 9.68 8.35c1.308 0 2.359 1.193 2.338 2.644 0 1.451-1.036 2.644-2.339 2.644zm8.635 0c-1.283 0-2.34-1.193-2.34-2.644s1.036-2.644 2.34-2.644c1.302 0 2.36 1.193 2.338 2.644 0 1.451-1.036 2.644-2.338 2.644z"
      />
    </svg>
  );
}
