import React from "react";

export default function Header() {
  return (
    <section>
      <div className="max-w-4xl mx-auto  py-4 px-3 bg-[#684276] text-white flex justify-between items-center">
        <div>
          <img
            src="/Logo.png"
            alt=""
            className="object-center aspect-video"
          />
        </div>
        <div>
          <h1>React course - Project 3</h1>
        </div>
      </div>
    </section>
  );
}
