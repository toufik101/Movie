import { useEffect, useState } from "react";
import "/src/assets/css/App.css";

import Modal from "../components/Modal";

export default function Movie() {
  const [shows, setShows] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState("");
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    async function loadShows() {
      try {
        const response = await fetch("https://api.tvmaze.com/shows");

        if (!response.ok) {
          throw new Error("Shows could not be loaded");
        }

        const data = await response.json();
        setShows(data.slice(0, 20));
      } catch (error) {
        setError(error.message);
      }
    }

    loadShows();
  }, []);

  async function handleSearch(event) {
    event.preventDefault();

    const searchValue = searchText.trim();

    if (!searchValue) {
      setError("Please enter a show name");
      return;
    }

    try {
      setError("");

      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${searchValue}`,
      );

      if (!response.ok) {
        throw new Error("Search failed");
      }

      const data = await response.json();
      const searchResults = data.map((item) => item.show);

      setShows(searchResults);

      if (searchResults.length === 0) {
        setError("No shows found");
      }
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <main className="container">
      <h1>Movie Explorer</h1>
      <p>Search and discover your favourite shows.</p>

      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="Search for a show..."
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />

        <button type="submit">Search</button>
      </form>

      {/* {shows && <p className="message">Loading...</p>} */}

      {error && (
        <p className="error-message" role="alert">
          {error}
        </p>
      )}

      {shows && (
        <div className="show-grid">
          {shows.map((show) => (
            <article className="show-card" key={show.id}>
              {show.image?.medium ? (
                <img src={show.image.medium} alt={show.name} />
              ) : (
                <div className="no-image">No image available</div>
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
      )}

      <Modal selectedShow={selectedShow} setSelectedShow={setSelectedShow} />
    </main>
  );
}
