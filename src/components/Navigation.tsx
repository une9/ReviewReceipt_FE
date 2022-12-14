import { ResponsiveNav as Nav } from "../utils/emotion/styles";

const Navigation = () => {
    return (
        <Nav.Body>
            <ul>
                {
                    [
                        {
                            name: "Home",
                            href: "/"
                        },
                        {
                            name: "Reviews",
                            href: "/"
                        },
                        {
                            name: "Receipts",
                            href: "/"
                        },
                        {
                            name: "My Page",
                            href: "/"
                        },
                    ].map((item, idx) => (
                        <Nav.Li key={item.name}>
                            <a href={item.href}>
                                {item.name}
                            </a>
                        </Nav.Li>
                    ))
                }
            </ul>
        </Nav.Body>
    )
}

export default Navigation;