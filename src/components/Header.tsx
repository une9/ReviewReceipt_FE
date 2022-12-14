import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PageTitle, ResponsiveHeader } from "../utils/emotion/styles";

const Header = () => {
    const loc = useLocation();
    const path = loc.pathname;
    console.log(path)
    const [title, setTitle] = useState("");

    useEffect(() => {
        if (path === "/") {
            setTitle("Reviews");
        } else if (path.startsWith("/review/")) {
            setTitle("Review")
        } else {
            setTitle("");
        }
    }, [path])

    return (
        <ResponsiveHeader>
            <PageTitle>
               {title}
            </PageTitle>
        </ResponsiveHeader>
    )
}

export default Header;