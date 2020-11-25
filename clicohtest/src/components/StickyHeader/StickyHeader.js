import React, { useEffect } from "react";

import "./StickyHeader.scss";

const StickyHeader = (props) => {
  let ticks = new Date().getTime();

  useEffect(() => {
    const header = document.getElementById("stickyHeader" + ticks);
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  return <div id={"stickyHeader" + ticks}>{props.children}</div>;
};

export default StickyHeader;
