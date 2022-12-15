import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { COLOR, isMobile, isNarrowScreen, TOGGLEBTN, TOGGLENAV } from './variables'

// mixin
const moveLeftMixin = css`

`

// 페이지 최상단 div (반응형)
export const PageWrapper = styled.main<{isOpen:boolean}>`
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;

    // ${moveLeftMixin};

    transition-duration: 0.5s;
    ${props => props.isOpen && `
        
        // top: 0;
        left: -${TOGGLENAV.WIDTH};
        transition-duration: 0.5s;
    `}
`

export const Page = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 8rem;
    margin-bottom: 8rem;

    // mobile
    @media(max-width: 576px) {
        
    }

    // @media(min-width: 768px) {
        
    // }

    // @media (min-width: 992px) { 

    // }

`

export const ResponsiveHeader = styled.header`
    ${isNarrowScreen} {
        position: fixed;
        left: 0;
        top: 0;
    }
`

export const PageTitle = styled.h1<{isOpen:boolean}>`
    font-family: 'Abril Fatface', cursive;
    font-size: 4rem;
    margin: 1rem 0;
    z-index: 10;
    // cursor: pointer;

    position: relative;
    left: 0;

    ${isNarrowScreen} {
        transition-duration: 0.5s;
        ${props => props.isOpen && `
            left: -${TOGGLENAV.WIDTH};
            transition-duration: 0.5s;
        `}
    }
`

export const ResponsiveNav = {
    Body: styled.nav<{isOpen:boolean}>`
        position: fixed;
        top: 0;
        right: 0;
        z-index: 5;
        
        ${isNarrowScreen} {
            right: -${TOGGLENAV.WIDTH};

            transition-duration: 0.5s;
            ${props => props.isOpen && `
                right: 0;
                transition-duration: 0.5s;
            `}
        }

    `,
    Hamburger: styled.i`
    `,
    Li: styled.li`
        list-style: none;

        font-family: 'Abril Fatface', cursive;
        font-size: 2rem;
        margin: 1.25rem 1.5rem;

        text-align: right;
    `,
    A: styled.a<{isHere:boolean}>`
        text-decoration: none;
        color: ${props => props.isHere ? "transparent" : "black"};
        -webkit-text-stroke: ${props => props.isHere ? "1px black" : "none"};
        // text-shadow: ${props => props.isHere ? "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;" : "none"};
    `,
    ToggleUl: styled.ul`
        width: ${TOGGLENAV.WIDTH};
        height: 100vh;
        margin: 0;
        padding: 0;
        padding-top: 10rem;

        // position: absolute;
        // top: 0;
        // right: 0;
    `,
    ToggleBtn: {
        Container: styled.div`
            display: none;
            position: fixed;
            top: 0;
            right: 0;
            z-index: 10; 

            ${isNarrowScreen} {
                display: block;
            }
        `,
        Btn: styled.button`
            // @include btn(120px, 100px);
            position: absolute;
            width: ${TOGGLEBTN.WIDTH};
            height: 60px;
            top: 2.25rem;
            right: 1.5rem;
            padding: 0;
            transition-duration: 0.5s;
            background: transparent;
            border: none;

            &:hover {
                cursor: pointer;
            }
        `,
        Icon: styled.div<{isOpen: boolean}>`
            // @include icon(8px, 60px);
            transition-duration: 0.5s;
            position: absolute;
            height: ${TOGGLEBTN.HEIGHT};
            width: ${TOGGLEBTN.WIDTH};
            // top: calc(${TOGGLEBTN.TOP} + 10px);
            background-color: ${TOGGLEBTN.COLOR};

            ${props => props.isOpen && `
                transition-duration: 0.5s;
                background: transparent;
                
                &:before{
                    transform: rotateZ(45deg) scaleX(1.25) translate(13px, 13px);
                }

                &:after{
                    transform: rotateZ(-45deg) scaleX(1.25) translate(12px, -12px);
                }
            `}
            
            &:before{
                // @include icon-before(8px, 60px, -20px);
                transition-duration: 0.5s;
                position: absolute;
                width: ${TOGGLEBTN.WIDTH};
                height: ${TOGGLEBTN.HEIGHT};
                background-color: ${TOGGLEBTN.COLOR};
                content: "";
                top: -${TOGGLEBTN.TOP};
                left: 0;
            }
            
            &:after{
                // @include icon-after(8px, 60px, 20px);
                transition-duration: 0.5s;
                position: absolute;
                width: ${TOGGLEBTN.WIDTH};
                height: ${TOGGLEBTN.HEIGHT};
                background-color: ${TOGGLEBTN.COLOR};
                content: "";
                top: ${TOGGLEBTN.TOP};
                left: 0;
            }
            
        }
     `
    }
}

// Review List Item
export const ReviewListSection = styled.section`
    padding: 0 2rem;
    margin: 0 auto;
    max-width: 50rem;

    // ${isNarrowScreen} {
    //     padding: 0 8rem;
    // }

    // ${isMobile} {
    //     padding: 0 2rem;
    // }
`

export const ReviewListItem = {
    Body: styled.article`
        &:nth-of-type(1) {
            border-top: 1px solid ${COLOR.BORDER.LISTITEM};
        }

        font-family: "P"; 
        font-weight: 100;

        cursor: pointer;
        border-bottom: 1px solid ${COLOR.BORDER.LISTITEM};
        padding: 1.5rem 1rem;
        width: 100%;
    `,
    Date: styled.time`
        display: inline-block;
        margin-bottom: 0.25rem;
        font-size: 0.875rem;
        color: ${COLOR.FONT.SUB_LIGHTER};
    `,
    Title: styled.h2`
        // font-family: "TS"; 
        font-size: 1.25rem;
        font-weight: 900;
        margin: 0;
    `,
    Abstract: styled.p`
        margin: 0;
        margin-top: 0.25rem;
        color: ${COLOR.FONT.SUB};
    `
}


export const ReviewDetailInner = styled.div`
    margin-top: 32px;

    display: flex;
    justify-content: center;
`

export const ReviewReceipt = {
    Receipt: {
        Head: styled.div`
            text-align: center;
            margin-bottom: 1rem;
        `,
        Body: styled.article`
                width: 28rem;
                padding: 4rem 2rem 1rem 2rem;
                background: ${COLOR.BG.RECEIPT};
                box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    
                font-family: "ND"; 

                h1 {
                    margin: 0.75rem 0;
                }
            `,
        Section: styled.section``,
        Row: styled.p`
            margin: 0.4rem 0;
        `,
        Footer: {
            Body: styled.div`
                // font-family: "P"; 
                text-align: right;
                color: ${COLOR.FONT.MINOR};
                font-size: 0.75rem;
                margin-top: 2rem;
            `,
            Row: styled.div`
                margin: 0.25rem 0;
            `
        }
    },
    Detail: {
        Section: styled.section`
            width: 24rem;

            ul {
                padding: 0;
            }

            .rows {
                margin: 1rem 0;
            }
        `,
        ReviewText: styled.div`
            p {
                margin: 1rem 0.5rem 2rem 0.5rem;
            }
        `,
        Row: styled.li`
            list-style: none;
        
            .row-score {
                display: flex;
                justify-content: space-between;
        
                .right > div {
                    float: left;
                    margin: 0 1rem;
                }
        
            }
        
            .row-desc:before {
                content: "ㄴ ";
            }
        `
    },
    SepLine: styled.div`
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: none;
    `
}

export const Barcode = styled.div`
    margin-top: 1.5rem;
    text-align: center;

    img {
        mix-blend-mode: multiply;
        width: 60%;
        margin: 0 auto;
    }
`