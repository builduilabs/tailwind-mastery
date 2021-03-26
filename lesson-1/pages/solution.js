export default function Home() {
  return (
    <div className="bg-gray-700 text-white min-h-screen flex items-center justify-center">
      <div className="max-w-2xl">
        <div className="flex hover:bg-gray-800 hover:bg-opacity-30 px-4 py-1">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src="/adamwathan.jpeg"
            alt=""
          />
          <div>
            <div className="flex items-baseline">
              <span className="text-green-500 text-sm mr-2 font-medium">
                adamwathan
              </span>
              <span className="text-gray-500 text-xs">01/15/2021</span>
            </div>
            <p className="text-gray-300">
              You should never use something like leading relaxed with a big
              font size, it goes against all typography best practices. Line
              height should decrease as font size gets bigger
            </p>
          </div>
        </div>
        <div className="hover:bg-gray-800 hover:bg-opacity-30 px-4 py-1">
          <p className="text-gray-300 pl-14">
            You can override it in your config if you want but ultimately we
            chose the defaults they did because they let you get results closest
            to what a professional designer would do more easily
          </p>
        </div>
        <div className="hover:bg-gray-800 hover:bg-opacity-30 px-4 py-1">
          <p className="text-gray-300 pl-14">
            Since we changed this in tailwind 2 I’ve almost never used a leading
            class at all
          </p>
        </div>
      </div>
    </div>
  );
}
