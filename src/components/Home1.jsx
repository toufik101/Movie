import React from "react";
import mv from '/src/assets/Img/Mv.jpg'

export default function Home1() {
  return (
    <div className="homeBg">
      <div className="  p-4  grid grid-cols-2">
        <div className="flex flex-col justify-center ">
          <h1 className="font-bold text-5xl ">Your next great escape.</h1>

          <div className="py-6">
            <a href="/movie">
              <button className=" cursor-pointer flex items-center bg-red-500 p-2 font-bold rounded">
                Explore Now{" "}
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

        <div>
          <img src={mv} alt="" className="  w-[100%] h-[700px] object-cover"/>
        </div>
      </div>
    </div>
  );
}
