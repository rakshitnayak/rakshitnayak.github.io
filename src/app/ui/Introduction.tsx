import React from "react";
import Image from "next/image";

import developerImage from "../assets/svgs/undraw_Developer_activity_re_39tg.svg";

function Introduction() {
  return (
    <div className="md:flex md:justify-center md:items-center md:mt-[80px] xl:mx-auto md:m-[32px] m-[16px]">
      <div className="md:w-[800px]">
        <h1 className="md:text-[2.8em] font-bold max-md:text-[2.4em]">Hey folks I'm Rakshit</h1>
        <p className="text-[18px] text-stone-500 font-light">
          Building a successful product is a challenge. I’m skilled in creating
          & scaling efficient Full stack applications. I’ve always demonstrated
          the capacity to design lively and compelling consumer experiences
          while maintaining high coding standards.
        </p>
      </div>
      <div className="max-md:mt-20">
        <Image
          src={developerImage}
          width={400}
          height={400}
          alt="rakshit-coding"
        />
      </div>
    </div>
  );
}

export default Introduction;
