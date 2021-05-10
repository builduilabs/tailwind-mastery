import { useState } from "react";

export default function Home() {
  let [showingMembers, setShowingMembers] = useState(false);

  return (
    <div>
      <main className="flex h-screen text-white">
        {/* Servers */}
        <div className="p-3 bg-gray-800">
          <div className="w-12 h-12 bg-white rounded-full text-gray-900 flex items-center justify-center">
            TW
          </div>
        </div>

        {/* Channels */}
        <div className="bg-gray-700 w-60">
          <div className="h-12 shadow-md flex-shrink-0 flex items-center px-3">
            Tailwind CSS
          </div>

          <div className="p-3">
            <p>general</p>
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
          <div className="flex flex-1">
            <div className="p-3">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatem eum ad magnam quam rem! Delectus esse ab vitae
                aperiam optio accusantium maxime vel accusamus, sunt dolorum
                dolor id possimus fugit.
              </p>
            </div>

            {showingMembers && (
              // Members
              <div className="w-64 p-3 bg-gray-700 space-y-2">
                <p>Sam Selikoff</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
