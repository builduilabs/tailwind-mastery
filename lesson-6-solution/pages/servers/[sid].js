import { useRouter } from "next/router";

export default function Server() {
  const router = useRouter();
  const { sid } = router.query;

  return (
    <>
      <div className="bg-gray-800 w-60 flex flex-col">
        <div className="px-3 h-12 shadow-md flex items-center font-semibold font-title text-white">
          Server {sid}
        </div>
        <div className="text-gray-300 font-medium p-3 flex-1 overflow-y-scroll space-y-2 ">
          <p className="text-white">general</p>
          {[...Array(40)].map((_, i) => (
            <p key={i}>channel {i}</p>
          ))}
        </div>
      </div>

      <div className="bg-gray-700 flex-1 flex flex-col">
        <div className="px-3 h-12 flex items-center shadow-md">general</div>
        <div className="p-3 flex-1 space-y-4 overflow-y-scroll">
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
