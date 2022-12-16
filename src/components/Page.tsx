import { Page as PageStyleComp, PageInner, PageWrapper } from "../emotion/styles";
import { useContext } from "react";
import { NavContext } from "../contexts/NavContext";

const Page = ({ children } : {children: React.ReactNode }) => {
    const { isOpen } = useContext(NavContext);
    return (
        <PageWrapper
            isOpen={isOpen}
        >
            <PageStyleComp>
                <PageInner>
                    {children}
                </PageInner>
            </PageStyleComp>
        </PageWrapper>
    )
}

export default Page;