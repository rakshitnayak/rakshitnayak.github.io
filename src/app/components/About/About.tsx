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
    "text-[#6e57e0] font-semibold hover:text-[#111] underline underline-offset-2";

  return (
    <section className="px-4 py-10 md:px-8 md:py-14">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#6e57e0]">About</p>
      <h2 className="mb-6 max-w-lg text-2xl font-bold tracking-[-0.02em] md:text-3xl">
        Product thinking, backed by engineering craft.
      </h2>
      <ul className="divide-y divide-[#ededed] border-y border-[#ededed]">
        {configs?.about &&
          configs.about.map((list, index) => (
            <li className="flex gap-4 py-4 text-sm leading-6 sm:text-base" key={list.list}>
              <span className="pt-0.5 text-xs font-bold text-[#aaa]">0{index + 1}</span>
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
            </li>
          ))}
      </ul>
    </section>
  );
};

export default AboutList;
