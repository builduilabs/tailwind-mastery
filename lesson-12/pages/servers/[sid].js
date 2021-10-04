import { useRouter } from "next/router";
import { CheckIcon, ChevronIcon, VerifiedIcon } from "../../components/icons";

export default function Server() {
  let router = useRouter();

  return (
    <>
      <div className="flex flex-col bg-gray-800 w-60">
        <button className="flex items-center h-12 px-4 font-semibold text-white shadow-sm font-title text-[15px] hover:bg-gray-550/[0.16] transition">
          <div className="relative w-4 h-4 mr-1">
            <VerifiedIcon className="absolute w-4 h-4 text-gray-550" />
            <CheckIcon className="absolute w-4 h-4" />
          </div>
          Tailwind CSS
          <ChevronIcon className="w-[18px] h-[18px] ml-auto opacity-80" />
        </button>
        <div className="flex-1 p-3 space-y-2 overflow-y-scroll font-medium text-gray-300 ">
          <p className="text-white">general</p>
          {[...Array(40)].map((_, i) => (
            <p key={i}>channel {i}</p>
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
