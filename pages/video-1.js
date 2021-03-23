export default function Video1() {
  return (
    <div className="mt-3">
      <div className="flex px-4 py-1 hover:bg-gray-900 hover:bg-opacity-10">
        <img
          className="w-10 h-10 mr-4 rounded-full"
          src="/adamwathan.jpeg"
          alt=""
        />
        <div className="flex flex-col">
          <div className="flex items-center text-sm font-medium text-teal-500">
            <span className="mr-2">adamwathan</span>
            <span
              className="tracking-wide text-gray-300"
              style={{ fontSize: 11 }}
            >
              01/15/2021
            </span>
          </div>
          <div className="text-sm text-gray-100">
            <p>
              You should never use something like leading-relaxed with a big
              font size, it goes against all typography best practices. Line
              height should decrease as font size gets bigger
            </p>
          </div>
        </div>
      </div>
      <div className="flex px-4 py-1 hover:bg-gray-900 hover:bg-opacity-10">
        <div className="flex flex-col">
          <div className="text-sm text-gray-100 ml-14">
            <p>
              You can override it in your config if you want but ultimately we
              chose the defaults they did because they let you get results
              closest to what a professional designer would do more easily
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
