import * as Icons from "../../components/icons";
import data from "../../data.json";

export default function Server() {
  return (
    <>
      <div className="flex flex-col bg-gray-800 w-60">
        <button className="flex items-center h-12 px-4 font-semibold text-white shadow-sm font-title text-[15px] hover:bg-gray-550/[0.16] transition">
          <div className="relative w-4 h-4 mr-1">
            <Icons.Verified className="absolute w-4 h-4 text-gray-550" />
            <Icons.Check className="absolute w-4 h-4" />
          </div>
          Tailwind CSS
          <Icons.Chevron className="w-[18px] h-[18px] ml-auto opacity-80" />
        </button>

        <div className="flex-1 overflow-y-scroll font-medium text-gray-300 pt-3 space-y-[21px]">
          {data["1"].categories.map((category) => (
            <div key={category.id}>
              {category.label && (
                <button className="flex items-center px-0.5 text-xs uppercase font-title tracking-wide">
                  <Icons.Arrow className="w-3 h-3 mr-0.5" />
                  {category.label}
                </button>
              )}

              <div className="space-y-0.5 mt-[5px]">
                {category.channels.map((channel) => (
                  <ChannelLink channel={channel} key={channel.id} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col flex-1 bg-gray-700">
        <div className="flex items-center h-12 px-3 shadow-sm">general</div>
        <div className="flex-1 p-3 space-y-4 overflow-y-scroll">
          {[...Array(40)].map((_, i) => (
            <p key={i}>
              Message {i}. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Vel saepe laudantium sed reprehenderit incidunt! Hic rem
              quos reiciendis, fugit quae ratione beatae veniam laborum
              voluptatem, iusto dolorum, voluptates suscipit quia.
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

function ChannelLink({ channel }) {
  let Icon = channel.icon ? Icons[channel.icon] : Icons.Hashtag;

  return (
    <a
      key={channel.id}
      href="#"
      className="flex items-center px-2 mx-2 py-1 text-gray-300 hover:text-gray-100 hover:bg-gray-550/[0.16] rounded group"
    >
      <Icon className="w-5 h-5 mr-1.5 text-gray-400" />
      {channel.label}
      <Icons.AddPerson className="w-4 h-4 ml-auto text-gray-200 opacity-0 hover:text-gray-100 group-hover:opacity-100" />
    </a>
  );
}
