import React from "react";
import { useState, useEffect } from "react";
import Modal from "./Modal";

export default function HomeCard1() {
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    async function loadShows() {
      try {
        const response = await fetch("https://api.tvmaze.com/shows");

        if (!response.ok) {
          throw new Error("Data could not be loaded");
        }

        const data = await response.json();

        setShows(data.slice(0, 20));
      } catch (error) {
        setError(error.message);
      }
    }

    loadShows();
  }, []);
  return (
    <>
    <main>
      <div className="show-grid m-5 ">
        {shows.map((show) => (
          <article className="show-card" key={show.id}>
            {show.image?.medium ? (
              <img src={show.image.medium} alt={show.name} />
            ) : (
              <div className="no-image">No Image</div>
            )}

            <div className="card-content">
              <h2>{show.name}</h2>
              <p>⭐ {show.rating?.average ?? "Not rated"}</p>

              <button
                className="details-button"
                onClick={() => setSelectedShow(show)}
              >
                View Details
              </button>
            </div>
          </article>
        ))}
      </div>

      <Modal selectedShow={selectedShow} setSelectedShow={setSelectedShow}/>

      </main>
    </>
  );
}
