export type Social = {
  name: string;
  link: string;
};

export type Blog = {
  title: string;
  link: string;
  publishedAt: string;
  tags?: string[];
  readTime?: number;
};

export type About = {
  list: string;
  linkWord?: string;
  link?: string;
};
