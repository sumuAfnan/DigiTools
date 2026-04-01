import React from "react";

const FooterNavLink = ({ nav }) => {
  const { label, path } = nav;
  return (
    <div>
      <li>
        <a
          href={path}
          className="hover:text-blue-500 transition-colors duration-300"
        >
          {label}
        </a>
      </li>
    </div>
  );
};

export default FooterNavLink;
