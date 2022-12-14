import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ResponsiveNav as Nav } from "../utils/emotion/styles";

const Navigation = () => {
    const loc = useLocation();
    const path = loc.pathname;
    console.log(path)

    const checkIsHere = (target: string):boolean => {
        if (path === "/") {
            return target === "/"
        } else if (path.startsWith("/review/")) {
            return target === "/reviews"
        } else if (path.startsWith("/receipt/")) {
            return target === "/receipts"
        } else if (path === "/my") {
            return target === "/my"
        } 
        return false;
    }

    return (
        <Nav.Body>
            <ul>
                {
                    [
                        {
                            name: "Home",
                            href: "/",
                            target: "/"
                        },
                        {
                            name: "Reviews",
                            href: "/",
                            target: "/reviews"
                        },
                        {
                            name: "Receipts",
                            href: "/receipts",
                            target: "/receipts"
                        },
                        {
                            name: "My Page",
                            href: "/my",
                            target: "/my"
                        },
                    ].map((item, idx) => (
                        <Nav.Li key={item.name}>
                            <Nav.A 
                                isHere={checkIsHere(item.target)}
                                href={item.href}>
                                {item.name}
                            </Nav.A >
                        </Nav.Li>
                    ))
                }
            </ul>
        </Nav.Body>
    )
}

export default Navigation;