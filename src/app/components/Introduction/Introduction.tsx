import Image from "next/image";
import NextLink from "next/link";

import developerImage from "../../assets/svgs/undraw_Developer_activity_re_39tg.svg";
import "./Introduction.css";

type IntroductionProps = {
  labels: { description: string };
  configs: { resumeLink?: string };
};

export default function Introduction({ labels, configs }: IntroductionProps) {
  return (
    <section className="home-hero px-4 pb-10 pt-12 md:px-8 md:pb-14 md:pt-20">
      <div className="grid items-center gap-10 md:grid-cols-[1.4fr_0.6fr]">
        <div>
          <p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#666]">
            <span className="h-2 w-2 rounded-full bg-[#3a9d8f]" aria-hidden="true" />
            Software engineer · Bengaluru
          </p>
          <h1 className="max-w-[620px] text-[2.55rem] font-bold leading-[1.08] tracking-[-0.04em] sm:text-5xl md:text-[3.6rem]">
            I build reliable products for the web<span className="text-[#6e57e0]">.</span>
          </h1>
          <p className="mt-6 max-w-[570px] text-base leading-7 text-[#555] md:text-lg md:leading-8">
            {labels.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <NextLink href="/career" className="rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6e57e0]">
              Explore my career <span aria-hidden="true">→</span>
            </NextLink>
            {configs.resumeLink && (
              <a href={configs.resumeLink} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#ddd] px-5 py-2.5 text-sm font-semibold transition-colors hover:border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6e57e0]">
                View résumé <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-image-shell">
            <Image src={developerImage} width={280} height={280} alt="" priority />
          </div>
        </div>
      </div>
    </section>
  );
}
