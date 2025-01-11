import React, { ReactNode } from "react";

interface LinkProps {
  href: string;
  children: ReactNode;
  styles?: string;
}

const Link: React.FC<LinkProps> = ({ href, children, styles }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={styles}>
      {children}
    </a>
  );
};

export default Link;
