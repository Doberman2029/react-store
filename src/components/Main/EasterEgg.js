import React from "react";

export default function EasterEgg() {
  return (
    <div className="about">
      <iframe
        className="egg"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?&autoplay=1"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        title="easterEgg"
      ></iframe>
    </div>
  );
}
