import React from "react";
import { NavLink } from "react-router";

export default function Heade() {
  return (
    <div>
      <div className="bg-fuchsia-900/20 flex min-h-11  items-center justify-between p-2">
        <div className=" flex items-center">
          <div className="w-8">
            <a href="/"><img src="/src/assets/favicon.svg" alt="" /></a>
          </div>
        </div>
        <div className="flex gap-8">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-amber-400"
                : isActive
                  ? "text-green-600 font-bold"
                  : ""
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/movie"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-amber-400"
                : isActive
                  ? "text-green-600 font-bold"
                  : ""
            }
          >
            Movie
          </NavLink>
        </div>

        <div className="px-4">
          <a href="/movie">
            <button className="flex items-center bg-red-500 p-2 font-bold rounded">Explore <span><svg xmlns="http://www.w3.org/2000/svg" width="22" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" ><path d="M13 5H19V11"/><path d="M19 5L5 19"/></svg></span></button>
          </a>
        </div>
      </div>
    </div>
  );
}
