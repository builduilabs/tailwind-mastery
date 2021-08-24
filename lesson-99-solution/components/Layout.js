import Link from "next/link";
import { useRouter } from "next/router";

let servers = [
  { id: "1", img: "tailwind.png" },
  { id: "2", img: "next.png" },
  { id: "3", img: "mirage.png" },
];

export default function Layout({ children }) {
  const router = useRouter();
  const { sid } = router.query;

  return (
    <div className="flex h-screen text-gray-100">
      <div className="p-3 space-y-2 overflow-y-scroll bg-gray-900">
        <NavLink href="/" active={router.pathname === "/"}>
          <div
            className={`${
              router.pathname === "/"
                ? "bg-indigo-500 text-white"
                : "bg-gray-700 hover:bg-indigo-500 text-gray-100 hover:text-white"
            } w-12 h-12 duration-200 transition-colors flex items-center justify-center`}
          >
            <DiscordIcon className="h-5 w-7" />
          </div>
        </NavLink>

        <hr className="border-t-white/[.06] border-t-2 rounded-full w-8 m-auto" />

        {servers.map((server) => (
          <NavLink
            key={server.id}
            href={`/servers/${server.id}`}
            active={server.id === sid}
          >
            <img src={`/servers/${server.img}`} />
          </NavLink>
        ))}
      </div>

      {children}
    </div>
  );
}

function NavLink({ href, children, active }) {
  return (
    <Link href={href}>
      <a className="relative block group">
        <div className="absolute inset-y-0 flex items-center -left-3">
          <div
            className={`${
              active
                ? "h-10"
                : "h-5 scale-0 group-hover:scale-100 origin-left opacity-0 group-hover:opacity-100"
            } transition-all w-1 bg-white rounded-r-md `}
          />
        </div>

        <div className="active:translate-y-px">
          <div
            className={`${
              active ? "rounded-2xl" : "rounded-3xl hover:rounded-2xl"
            } w-12 h-12 duration-200 transition-all flex items-center justify-center overflow-hidden`}
          >
            {children}
          </div>
        </div>
      </a>
    </Link>
  );
}

function DiscordIcon(props) {
  return (
    <svg aria-hidden="false" viewBox="0 0 28 20" {...props}>
      <path
        fill="currentColor"
        d="M23.021 1.677A21.227 21.227 0 0017.658 0c-.252.462-.483.935-.687 1.418a19.931 19.931 0 00-5.943 0C10.82.935 10.59.462 10.337.005c-1.856.32-3.659.88-5.37 1.677C1.567 6.78.65 11.754 1.111 16.652A21.504 21.504 0 007.691 20c.532-.726 1.004-1.5 1.407-2.309a13.582 13.582 0 01-2.221-1.078c.188-.137.37-.274.547-.428a15.232 15.232 0 0013.152 0c.177.148.36.291.541.428-.707.424-1.453.787-2.22 1.078.408.808.875 1.578 1.405 2.303a21.5 21.5 0 006.58-3.347h.007c.541-5.674-.922-10.6-3.868-14.97zM9.681 13.638c-1.283 0-2.34-1.193-2.34-2.644S8.37 8.35 9.68 8.35c1.308 0 2.359 1.193 2.338 2.644 0 1.451-1.036 2.644-2.339 2.644zm8.635 0c-1.283 0-2.34-1.193-2.34-2.644s1.036-2.644 2.34-2.644c1.302 0 2.36 1.193 2.338 2.644 0 1.451-1.036 2.644-2.338 2.644z"
      />
    </svg>
  );
}
