import { List, Text } from "@chakra-ui/react";
import Link from "../Link/Link";


const items = [
  {
    title:
      "How to implement Server Side Rendering for Material UI's media queries in NextJs to avoid flash?",
    link: "https://dev.to/rakshitnayak/how-to-implement-server-side-rendering-for-material-uis-media-queries-in-nextjs-to-avoid-flash-jpi",
  },
  { title: "Understanding GCP in short", link: "https://dev.to/rakshitnayak/what-is-google-cloud-platform-3oh4" },
  { title: "DOM (Document object model) in less than 500 words", link: "https://dev.to/rakshitnayak/dom-document-object-model-4dmp" },
];

const BlogsList = () => {
  const linkStyles =`
    underline underline-offset-4 
    decoration-[#d4d4d4]
    hover:decoration-black
    transition-all
  `;

  return (
    <div className="xl:mx-auto md:m-[32px] m-[16px]">
      <Text textStyle="2xl" mb="2" className="font-bold">
        Blogs
      </Text>
      <List.Root>
        {items.map((item) => (
          <List.Item key={item.title} className="mb-4 text-sm sm:text-base">
            <Link href={item.link} styles={linkStyles}>{item.title}</Link>
          </List.Item>
        ))}
      </List.Root>
    </div>
  );
};

export default BlogsList;
