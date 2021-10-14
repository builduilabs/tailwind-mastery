export default function Message() {
  return (
    <div className="leading-[22px] pr-12">
      <div className="flex px-4 py-0.5 hover:bg-gray-950/[.07]">
        <img
          className="w-10 h-10 mr-4 rounded-full mt-0.5"
          src="/users/adamwathan.jpeg"
          alt=""
        />
        <div>
          <p className="flex items-baseline">
            <span className="mr-2 font-medium text-green-500">adamwathan</span>
            <span className="text-xs font-medium text-gray-400">
              01/15/2021
            </span>
          </p>
          <p className="text-gray-100">
            You should never use something like leading relaxed with a big font
            size, it goes against all typography best practices. Line height
            should decrease as font size gets bigger
          </p>
        </div>
      </div>
      <div className="px-4 py-0.5 hover:bg-gray-950/[.07]">
        <p className="text-gray-100 pl-14">
          You can override it in your config if you want but ultimately we chose
          the defaults they did because they let you get results closest to what
          a professional designer would do more easily
        </p>
      </div>
      <div className="px-4 py-0.5 hover:bg-gray-950/[.07]">
        <p className="text-gray-100 pl-14">
          Since we changed this in tailwind 2 I’ve almost never used a leading
          class at all
        </p>
      </div>
    </div>
  );
}
