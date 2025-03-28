import React from "react";
import Image from "next/image";

import developerImage from "../../assets/svgs/undraw_Developer_activity_re_39tg.svg";
import "./Introduction.css";
import Button from "../Button/Button";

type Labels = {
  description: string;
};
type Configs = {
  resumeLink: string;
};

type IntroductionProps = {
  labels: Labels;
  configs: Configs;
};

function Introduction({ labels }: IntroductionProps) {
  return (
    <div className="md:flex md:justify-center md:items-center md:mt-[80px] xl:mx-auto md:m-[32px] m-[16px] gap-10">
      <div className="md:w-[80%]">
        <h1 className="md:text-[2.8em] font-bold text-[1.8em] animated animated-text">
          <span className="mr-2">Hey folks, I'm</span>
          <div className="animated-info min-w-fit flex relative md:inline-block md:align-top  md:min-w-[400px]">
            <span className="animated-item">Rakshit</span>
            <span className="animated-item">Software Engineer</span>
            <span className="animated-item">Cricket aficionado</span>
          </div>
        </h1>
        <p className="dark:text-white mt-12 md:mt-5">
          {labels.description}
        </p>
      </div>
      <div className="max-md:mt-20">
        <Image
          src={developerImage}
          width={400}
          height={400}
          alt="rakshit-coding"
          priority
        />
      </div>
    </div>
  );
}

export default Introduction;
