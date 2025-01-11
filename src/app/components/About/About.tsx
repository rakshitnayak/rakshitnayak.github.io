import { List, Text } from "@chakra-ui/react";
import { LuCircleCheck } from "react-icons/lu";
import Link from "../Link/Link";
import { About } from "@/types";

type Configs = {
  about: About[];
};
type AboutProps = {
  configs: Configs;
};

const AboutList = ({ configs }: AboutProps) => {
  const linkStyles =
    "text-[#0056B3] hover:text-[#111] underline underline-offset-2";

  return (
    <>
      <Text textStyle="2xl" mb="4">
        About
      </Text>
      <List.Root gap="2" variant="plain" align="center">
        {configs?.about &&
          configs.about.map((list) => (
            <List.Item className="text-sm sm:text-base" key={list.list}>
              <List.Indicator asChild color="green.500">
                <LuCircleCheck />
              </List.Indicator>
              <span>
                {list.list}
                {list.linkWord && list.link && (
                  <>
                    {" "}
                    <Link href={list.link} styles={linkStyles}>
                      {list.linkWord}
                    </Link>
                  </>
                )}
              </span>
            </List.Item>
          ))}
      </List.Root>
    </>
  );
};

export default AboutList;
