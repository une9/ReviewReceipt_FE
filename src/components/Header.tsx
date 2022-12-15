import { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { NavContext } from "../contexts/NavContext";
import { PageTitle, ResponsiveHeader } from "../emotion/styles";

const Header = () => {
  const loc = useLocation();
  const path = loc.pathname;
  console.log(path);
  const [title, setTitle] = useState("");

  const { isOpen } = useContext(NavContext);

  useEffect(() => {
    if (path === "/") {
      setTitle("Reviews");
    } else if (path.startsWith("/review/")) {
      setTitle("Review");
    } else {
      setTitle("");
    }
  }, [path]);

  return (
    <ResponsiveHeader>
      <PageTitle
        isOpen={isOpen}
      >
        {title}
      </PageTitle>
    </ResponsiveHeader>
  );
};

export default Header;
