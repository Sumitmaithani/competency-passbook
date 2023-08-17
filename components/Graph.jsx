import Image from "next/image";
import React from "react";

export default function Graph({ h1, h2, img }) {
  return (
    <div className="border-2 px-10 py-3 bg-gray-300 w-1/5 rounded-xl	">
      <h2 className="text-lg font-bold text-blue text-blue-800 ">{h1}</h2>
      <h6 className="text-sm text-grey">{h2}</h6>
      <Image src={img} alt="image 2" className="" width={300} />
    </div>
  );
}
