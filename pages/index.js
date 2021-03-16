import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Discord Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen">
        {/* Server selector */}
        <div className="px-3 pt-6 space-y-2 bg-gray-800">
          <div className="w-12 h-12 bg-white rounded-full"></div>
          <div className="w-12 h-12 bg-white rounded-full"></div>
          <div className="w-12 h-12 bg-white rounded-full"></div>
          <div className="w-12 h-12 bg-white rounded-full"></div>
          <div className="w-12 h-12 bg-white rounded-full"></div>
          <div className="w-12 h-12 bg-white rounded-full"></div>
        </div>

        {/* Channel selector */}
        <div className="space-y-1 bg-gray-700 w-60">
          <a
            href="#"
            className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-white border-b border-gray-800 hover:bg-gray-700"
          >
            <span className="flex items-center">
              <span className="relative">
                <VerifiedIcon className="w-4 h-4 mr-1 text-gray-350" />
                <span className="absolute inset-0">
                  <CheckIcon className="w-4 h-4" />
                </span>
              </span>
              Tailwind CSS
            </span>
            <ChevronDownIcon className="w-6 h-6 text-gray-50" />
          </a>

          <div className="px-2 pt-3 space-y-1">
            <a
              href="#"
              className="flex items-center px-2 py-1 text-sm font-medium text-gray-200 rounded hover:bg-gray-500 hover:text-white"
            >
              <WelcomeIcon className="inline w-5 h-5 mr-1 text-gray-300" />
              <span>welcome</span>
            </a>
            <a
              href="#"
              className="flex px-2 py-1 text-sm font-medium text-gray-200 rounded hover:bg-gray-500 hover:text-white"
            >
              <PoundIcon className="inline w-5 h-5 mr-1 text-gray-300" />
              <span>announcements</span>
            </a>
          </div>

          <div className="pt-6">
            <a
              href="#"
              className="flex items-center ml-1 mr-1 text-xs font-semibold text-gray-200 uppercase hover:text-gray-100"
            >
              <ChevronDownIcon className="w-3 h-3" />
              Tailwind CSS
            </a>

            <div className="px-2 pt-1 space-y-1">
              <a
                href="#"
                className="flex px-2 py-1 text-sm font-medium text-white bg-gray-400 rounded"
              >
                <PoundIcon className="inline w-5 h-5 mr-1 text-gray-300" />
                <span>general</span>
              </a>
              <a
                href="#"
                className="flex px-2 py-1 text-sm font-medium text-gray-200 rounded hover:text-gray-100 hover:bg-gray-500"
              >
                <PoundIcon className="inline w-5 h-5 mr-1 text-gray-300" />
                <span>plugins</span>
              </a>
              <a
                href="#"
                className="flex px-2 py-1 text-sm font-medium text-gray-200 rounded hover:text-gray-100 hover:bg-gray-500"
              >
                <PoundIcon className="inline w-5 h-5 mr-1 text-gray-300" />
                <span>help</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main chat area */}
        <div className="flex-1 bg-gray-600">
          <div className="flex items-center px-4 py-3">
            <PoundIcon className="w-6 h-6 mr-2 text-gray-300" />
            <span className="text-sm font-semibold text-white">general</span>
            <span className="self-stretch w-px mx-4 bg-light-accent"></span>
          </div>
        </div>

        <div className="w-16 bg-gray-700"></div>
      </main>
    </div>
  );
}

function PoundIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"
      ></path>
    </svg>
  );
}

function WelcomeIcon(props) {
  return (
    <svg viewBox="0 0 40 40" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33 34.5833V7.49998H35V36.6666H9C6.791 36.6666 5 34.801 5 32.5V7.49998C5 5.19894 6.791 3.33331 9 3.33331H31V30.4166H9C7.8955 30.4166 7 31.3485 7 32.5C7 33.6515 7.8955 34.5833 9 34.5833H33ZM23.9718 9.99998L15.8889 17.9915L12.7086 14.8441L10 17.5058L15.8885 23.3333L26.6667 12.6669L23.9718 9.99998Z"
      ></path>
    </svg>
  );
}

function VerifiedIcon(props) {
  return (
    <svg
      aria-label="Verified"
      aria-hidden="false"
      viewBox="0 0 16 15.2"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
      ></path>
    </svg>
  );
}

function CheckIcon(props) {
  return (
    <svg
      className="icon-1ihkOt"
      aria-hidden="false"
      viewBox="0 0 16 15.2"
      {...props}
    >
      <path
        d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

function ChevronDownIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"
      ></path>
    </svg>
  );
}
