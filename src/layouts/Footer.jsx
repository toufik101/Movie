import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="bg-fuchsia-900 flex min-h-11  items-center justify-between p-2">
        <div className=" flex items-center">
          <div className="w-8">
            <a className=" items-center gap-1.5 flex" href="/">
              <img src="/src/assets/favicon.svg" alt="" />
              <p className="flex f">
                {" "}
                <span>Movie </span> <strong>Explorer</strong>
              </p>
            </a>
          </div>
        </div>
        <div className="flex gap-8">© 2026 MovieExplorer</div>

        <div className="px-4">
          <a href="/movie">
            <button className=" cursor-pointer flex items-center border-2 text-white p-2 font-bold rounded">
              Explore{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 5H19V11" />
                  <path d="M19 5L5 19" />
                </svg>
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
