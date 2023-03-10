import React, { useState } from "react";
import MemesData from "../MemesData";
import MemeImage from "./MemeImage";

export default function MemeForm() {
  const [bgImage, setbgImage] = useState("/memeimg.png")
  const arr = MemesData.data.memes;
  const handleClick = (e) => {
    e.preventDefault();
    const randomImage = Math.floor(Math.random() * arr.length);
    setbgImage(arr[randomImage].url);
  };
  return (
    <>
      <section>
        <div className="max-w-3xl mx-auto  py-10 px-3  ">
          <form action="" className="">
            <div className="flex justify-between items-center gap-4">
              <input
                type="text"
                className="w-full px-3 py-3 border border-gray-800"
              />
              <input
                type="text"
                className="w-full px-3 py-3 border border-gray-800"
              />
            </div>
            <button
              onClick={handleClick}
              className="w-full py-4 text-center mt-10 bg-[#711F8D] text-white font-semibold text-md"
              type="submit"
            >
              Get a new meme image
            </button>
          </form>
        </div>
      </section>
      <MemeImage bgImage = {bgImage}/>
    </>
  );
}
