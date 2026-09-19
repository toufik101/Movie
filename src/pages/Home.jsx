import React from "react";
import "/src/assets/css/App.css";
import Home1 from "../components/Home1";
import HomeCard1 from "../components/HomeCard1";
export default function Home() {
  return (
    <main className="mainHome">
      <Home1 />

      <HomeCard1 />
    </main>
  );
}
