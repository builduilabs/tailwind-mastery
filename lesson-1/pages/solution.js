export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700">
      <div className="max-w-2xl">
        <div className="flex px-4 py-2 hover:bg-gray-800 hover:bg-opacity-30">
          <img
            className="w-10 h-10 mr-4 rounded-full"
            src="/adamwathan.jpeg"
            alt=""
          />
          <div className="flex flex-col">
            <div className="flex items-center text-sm font-medium text-green-500">
              <span className="mr-2">adamwathan</span>
              <span className="text-xs text-gray-500">01/15/2021</span>
            </div>
            <div className="text-gray-300">
              <p>
                You should never use something like leading-relaxed with a big
                font size, it goes against all typography best practices. Line
                height should decrease as font size gets bigger
              </p>
            </div>
          </div>
        </div>
        <div className="px-4 py-2 hover:bg-gray-800 hover:bg-opacity-30">
          <div className="text-gray-300 ml-14">
            <p>
              You can override it in your config if you want but ultimately we
              chose the defaults we did because they let you get results closest
              to what a professional designer would do more easily
            </p>
          </div>
        </div>
        <div className="px-4 py-2 hover:bg-gray-800 hover:bg-opacity-30">
          <div className="text-gray-300 ml-14">
            <p>
              Since we changed this in tailwind 2 I’ve almost never used a
              leading class at all
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
