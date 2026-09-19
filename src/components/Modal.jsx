import React from "react";

export default function Modal({selectedShow,setSelectedShow}) {
  return (
    <div>
      {selectedShow && (
        <div className="modal-overlay" onClick={() => setSelectedShow(null)}>
          <div
            className="modal"
          >
            <button
              className="close-button"
              onClick={() => setSelectedShow(null)}
            >
              ×
            </button>

            {selectedShow.image?.original && (
              <img
                className="modal-image"
                src={selectedShow.image.original}
                alt={selectedShow.name}
              />
            )}

            <div className="modal-content">
              <h2 id="modal-title">{selectedShow.name}</h2>

              <p>
                <strong className="flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#f7ea1f" stroke="#ffffff" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-star preview-icon"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>Rating:</strong>{" "}
                {selectedShow.rating?.average ?? "Not rated"}/10
              </p>

              <p>
                <strong>Language:</strong> {selectedShow.language ?? "Unknown"}
              </p>

              <p>
                <strong>Status:</strong> {selectedShow.status ?? "Unknown"}
              </p>

              <p>
                <strong>Genres:</strong>{" "}
                {selectedShow.genres?.length
                  ? selectedShow.genres.join(", ")
                  : "Not available"}
              </p>

              <div
                className="summary"
                dangerouslySetInnerHTML={{
                  __html:
                    selectedShow.summary ?? "<p>No description available.</p>",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
