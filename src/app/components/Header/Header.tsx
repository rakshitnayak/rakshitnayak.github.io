import React from "react";
import { Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "../Link/Link";
import { Social } from "@/types";


type Configs = {
  socials: Social[];
};

type HeaderProps = {
  configs: Configs;
};

function Header({ configs }: HeaderProps) {
  const mapIcons = {
    github: <FaGithub />,
    linkedIn: <FaLinkedin />,
    mail: <FaEnvelope />,
  };

  return (
    <div className="flex justify-between mt-8 xl:mx-auto md:m-[32px] m-[16px]">
      <div>
        <a
          href="/"
          className="font-semibold hover:underline hover:underline-offset-4"
        >
          @rakshitnayak
        </a>
      </div>
      <nav className="flex gap-4 items-center">
        {configs.socials && configs.socials.length > 0 && (
          configs.socials.map((social) => (
            <Link href={social.link} key={social.name}>
              <Icon fontSize="20px">
                {mapIcons[social.name as keyof typeof mapIcons]}
              </Icon>
            </Link>
          ))
        )}
      </nav>
    </div>
  );
}

export default Header;
