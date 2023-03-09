import React from "react";

export default function Hero() {
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
              className="w-full py-4 text-center mt-10 bg-[#711F8D] text-white font-semibold text-md"
              type="submit"
            >
              Get a new meme image
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
