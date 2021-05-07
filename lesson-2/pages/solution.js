import { useState } from "react";

export default function Home() {
  let [showingMembers, setShowingMembers] = useState(false);

  return (
    <div>
      <main className="flex h-screen overflow-hidden text-white">
        {/* Servers */}
        <div className="p-3 bg-gray-800 space-y-2 overflow-y-scroll">
          {[...Array(40).keys()].map((x, i) => (
            <div className="w-12 h-12 bg-white rounded-full text-gray-900 flex items-center justify-center">
              {i}
            </div>
          ))}
        </div>

        {/* Channels */}
        <div className="bg-gray-700 w-60 flex flex-col">
          <div className="h-12 shadow-md p-3">Tailwind CSS</div>
          <div className="p-3 overflow-y-scroll">
            <div className="space-y-3">
              {[...Array(40).keys()].map((x, i) => (
                <p>Channel {i}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Main chat area */}
        <div className="flex-1 bg-gray-600 flex flex-col">
          <div className="h-12 shadow-md p-3 flex justify-between">
            <p>Welcome</p>
            <button onClick={() => setShowingMembers(!showingMembers)}>
              Show members
            </button>
          </div>
          <div className="flex flex-1 overflow-hidden">
            {/* Messages */}

            <div className="p-3 flex-1 overflow-y-scroll space-y-2">
              {[...Array(40).keys()].map((x, i) => (
                <>
                  <p>Message {i}</p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptatem eum ad magnam quam rem! Delectus esse ab vitae
                    aperiam optio accusantium maxime vel accusamus, sunt dolorum
                    dolor id possimus fugit.
                  </p>
                </>
              ))}
            </div>

            {showingMembers && (
              // Members
              <div className="flex-shrink-0 w-64 p-3 bg-gray-700 overflow-y-scroll space-y-2">
                {[...Array(50).keys()].map((x, i) => (
                  <p>Member {i}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

function Lorem() {
  return [...Array(40).keys()].map(() => (
    <p className="pt-4">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo blanditiis
      minus soluta ducimus sint quas deleniti quia magni sapiente adipisci,
      harum labore. Quis nemo itaque numquam iure et! Ullam, totam?
    </p>
  ));
}
