import React from "react";
import { Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "../Link/Link";
import { Social } from "@/types";

type HeaderProps = {
  socials: Social[];
};

function Header({ socials }: HeaderProps) {

  const mapIcons = {
    github: <FaGithub />,
    linkedIn: <FaLinkedin />,
    mail: <FaEnvelope />,
  }

  return (
    <div className="flex justify-between mt-8">
      <div>
        <a
          href="/"
          className="font-semibold hover:underline hover:underline-offset-4"
        >
          Rakshit Nayak
        </a>
      </div>
      <nav className="flex gap-4 items-center">
        {socials?.map((social) => (
          <Link href={social.link} key={social.name}>
            <Icon fontSize="20px">{mapIcons[social.name as keyof typeof mapIcons]}</Icon>
          </Link>
        ))}
      </nav>
    </div>
  );
}

Header.defaultProps = {
  socials: [],
};

export default Header;
