import { useEffect, useRef, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavContext } from "../contexts/NavContext";
import { ResponsiveNav as Nav, ReviewWriteBtn } from "../emotion/styles";

const ToggleBtn = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <Nav.ToggleBtn.Container>
      <Nav.ToggleBtn.Btn onClick={onClick}>
        <Nav.ToggleBtn.Icon
          className="icon"
          isOpen={isOpen}
        />
      </Nav.ToggleBtn.Btn>
    </Nav.ToggleBtn.Container>
  );
};

const Navigation = () => {
  const loc = useLocation();
  const path = loc.pathname;
  console.log(path);
  const navigate = useNavigate();

  const { isOpen, setIsOpen } = useContext(NavContext);

  const checkIsHere = (target: string): boolean => {
    if (path === "/") {
      return target === "/";
    } else if (path.startsWith("/review/")) {
      return target === "/review";
    } else if (path.startsWith("/receipt/")) {
      return target === "/receipts";
    } else if (path === "/my") {
      return target === "/my";
    } else if (path === "/review/new") {
      return target === "/review/new";
    }
    return false;
  };

  return (
    <Nav.Body isOpen={isOpen}>
      <ToggleBtn isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)} />

      <Nav.ToggleUl>
        <Nav.Li>
            <Nav.A isHere={checkIsHere("/review/new")} onClick={() => navigate("/review/new")}>
              <ReviewWriteBtn />
            </Nav.A>
        </Nav.Li>

        {[
          {
            name: "Home",
            href: "/",
            target: "/",
          },
          {
            name: "Review",
            href: "/",
            target: "/review",
          },
          {
            name: "Receipts",
            href: "/receipts",
            target: "/receipts",
          },
          {
            name: "My Page",
            href: "/my",
            target: "/my",
          },
        ].map((item, idx) => (
          <Nav.Li key={item.name}>
            <Nav.A isHere={checkIsHere(item.target)} onClick={() => navigate(item.href)}>
              {item.name}
            </Nav.A>
          </Nav.Li>
        ))}
      </Nav.ToggleUl>
    </Nav.Body>
  );
};

export default Navigation;
