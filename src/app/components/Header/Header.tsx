import React from "react";
import { Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Header() {
  return (
    <div className="flex justify-between mt-8">
      <div>
        <a href="/" className="font-semibold no-underline hover:underline">Rakshit Nayak</a>
      </div>
      <nav className="flex gap-4 items-center">
        <a
          href="https://github.com/rakshitnayak"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon fontSize="20px">
            <FaGithub />
          </Icon>
        </a>
        <a
          href="https://www.linkedin.com/in/raksh1tnayak/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon fontSize="20px">
            <FaLinkedin />
          </Icon>
        </a>
        <a href="mailto:rakshitnayak13@gmail.com">
          <Icon fontSize="20px">
            <FaEnvelope />
          </Icon>
        </a>
      </nav>
    </div>
  );
}

export default Header;
