import { List, Text } from "@chakra-ui/react";
import { LuCircleCheck } from "react-icons/lu";
import Link from "../Link/Link";

type Configs = {
  resumeLink: string;
};
type AboutProps = {
  configs: Configs;
};

const About = ({ configs }: AboutProps) => {
  const linkStyles="text-[#0056B3] hover:text-[#111] underline underline-offset-2"
  return (
    <>
      <Text textStyle="2xl" mb="4">About</Text>
      <List.Root gap="2" variant="plain" align="center">
        <List.Item className="text-sm sm:text-base">
          <List.Indicator asChild color="green.500">
            <LuCircleCheck />
          </List.Indicator>
          I'm a full-stack software engineer from India
        </List.Item>
        <List.Item className="text-sm sm:text-base">
          <List.Indicator asChild color="green.500">
            <LuCircleCheck />
          </List.Indicator>
          <p>
             Explore my professional journey in {" "}
            <Link href="https://www.linkedin.com/in/raksh1tnayak/details/experience/" styles={linkStyles}>detail</Link>{" "}
          </p>
        </List.Item>
        <List.Item className="text-sm sm:text-base">
          <List.Indicator asChild color="green.500">
            <LuCircleCheck />
          </List.Indicator>
          <p>
            If you are looking to hire me, this is my {" "}
            <Link href={configs.resumeLink} styles={linkStyles}>professional resume</Link>{" "}
          </p>
        </List.Item>
      </List.Root>
    </>
  );
};

export default About;
