import { css } from '@emotion/react'
import styled from '@emotion/styled/macro'
import { COLOR, isMobile, isMobileNarrower, isNarrowScreen, TOGGLEBTN, TOGGLENAV, ZINDEX } from './variables'

// mixin
const moveLeftMixin = css`

`

// 페이지 최상단 div (반응형)
export const PageWrapper = styled.main<{isOpen:boolean}>`
    position: relative;
    top: 0;
    left: 0;

    width: 100%;
    // min-height: 100rem;

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
    position: fixed;
    left: 0;
    top: 0;

    z-index: ${ZINDEX.Z1};
`

export const PageTitle = styled.h1<{isOpen:boolean}>`
    font-family: 'Abril Fatface', cursive;
    font-size: 4rem;
    margin: 1rem 0;
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


export const ReviewWriteBtn = styled.button`
    width: ${TOGGLEBTN.WIDTH};
    height: ${TOGGLEBTN.WIDTH};

    position: relative;

    background: transparent;
    border: none;
    cursor: pointer;

    &:before{
        position: absolute;
        width: ${TOGGLEBTN.WIDTH};
        height: ${TOGGLEBTN.HEIGHT};
        background-color: ${TOGGLEBTN.COLOR};
        content: "";
        top: calc(${TOGGLEBTN.WIDTH} / 2);
        right: 0;
        transition-duration: 0.5s;
    }
    
    &:after{
        position: absolute;
        width: ${TOGGLEBTN.WIDTH};
        height: ${TOGGLEBTN.HEIGHT};
        background-color: ${TOGGLEBTN.COLOR};
        content: "";
        top: calc(${TOGGLEBTN.WIDTH} / 2);
        transform: rotate(90deg);
        right: 0;
        transition-duration: 0.5s;
    }

    &:hover {

        &:before{
            transform: rotateZ(90deg);
            transition-duration: 0.5s;
        }
        
        &:after{
            transform: rotateZ(180deg);
            transition-duration: 0.5s;
        }
    }
    
`

export const ResponsiveNav = {
    Body: styled.nav<{isOpen:boolean}>`
        position: fixed;
        top: 0;
        right: 32px;
        z-index: ${ZINDEX.Z2};
        
        ${isNarrowScreen} {
            right: -${TOGGLENAV.WIDTH};

            transition-duration: 0.5s;
            ${props => props.isOpen && `
                right: 8px;
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
        cursor: pointer;
    `,
    ToggleUl: styled.ul`
        width: ${TOGGLENAV.WIDTH};
        // height: 100vh;
        margin: 0;
        padding: 0;
        padding-top: 10rem;

        ${isNarrowScreen} {
            padding-top: 6rem;
        }
    `,
    ToggleBtn: {
        Container: styled.div`
            display: none;
            position: fixed;
            top: 0;
            right: 8px;
            z-index: ${ZINDEX.Z3}; 

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
    width: 100%;
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


export const PageInner = styled.div`
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
            min-width: 20rem;   
            width: 24rem;

            ${isMobile} {
                width: 22rem;   
            }

            ${isMobileNarrower} {
                width: 20rem;   
            }

            padding: 4rem 2rem 1rem 2rem;
            background: ${COLOR.BG.RECEIPT};
            box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

            font-family: "ND"; 

            position: relative;
            z-index: ${ZINDEX.Z1};

            // h1 {
            //     margin: 0.75rem 0;
            // }
        `,
        Title: styled.h1`
            margin: 0.75rem 0;
        `,
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
            // width: 24rem;
            width: 100%

            .rows {
                margin: 1rem 0;
            }
        `,
        ReviewText: styled.div`
            p {
                margin: 1rem 0.25rem 2rem 0.25rem;
            }
        `,
        Ul: styled.ul`
            padding: 0;
        `,
        Row: styled.li`
            list-style: none;
        
            .row-score {
                display: flex;
                justify-content: space-between;

                .right {
                    display: flex;

                    & > div {
                        margin: 0 1rem;

                        ${isMobile} {
                            margin: 0 0.75rem;
                        }

                        ${isMobileNarrower} {
                            margin: 0 0.5rem;
                        }
                    }
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
    `,
    Form: {
        Fieldset: styled.fieldset`
            border: none;
        `,
        Row: styled.p`
            margin: 0.4rem 0;
        `,
        SaveBtnWrapper: styled.div`
            width: 100%;
            display: flex;
            justify-content: center;
            margin-top: 1rem;
        `,
        SaveBtn: styled.button`
            font-family: 'Abril Fatface', cursive;
            font-size: 3rem;
            border: none;
            background: none;
            cursor: pointer;

            position: relative;
            transition-duration: 0.3s;

            &:hover {
                transform: scale(1.1);
                transition-duration: 0.3s;
            }
        `,
        SideBar: {
            Body: styled.aside`
                position: relative;
                left: -20rem;
                top: 50%;
                bottom: 50%;
                
                font-family: "P";
            `,
            Ul: styled.ul`
                margin: 0;
                padding: 0;
            `,
            Li: styled.li`
                list-style: none;
            `,
            InputWrapper: styled.span`
                &:first-of-type {
                    margin-right: 1rem;
                }
            `,
            Input: styled.input`
                display: none;
    
                &:checked+label {       // 선택된 요소의 라벨 스타일
                    color: ${COLOR.FONT.MAIN};
                    // font-weight: 800 ;
                }
            `,
            Label: styled.label`
                cursor: pointer;
                color: ${COLOR.FONT.SUB};
                font-family: "ND";
    
                i {
                    margin: 0.25rem;
                }
            `,
            SepLine: styled.div`
                width: 20rem;
                height: 1px;
                background-color: ${COLOR.BORDER.LISTITEM};
                margin: 1rem 0;
            `,
            InputDesc: styled.div`
                color: ${COLOR.FONT.SUB};
                font-size: 0.8rem;
                margin-top: 0.5rem;
            `,
            ToggleBtn: styled.button`
                display: block;
                cursor: pointer;
            `
        },
        Detail: {
            Ul: styled.ul`
                margin: 0;
                padding: 0;
            `,
            Li: styled.li`
                list-style: none;
                display: flex;
                margin-bottom: 1rem;

                input {
                    margin: 0.25rem;
                }

                input[type=text] {
                    width: 12rem;
                }

                input[type=number] {
                    width: 4rem;
                }
            `,
            LiElem: styled.div`
                height: 3rem;
                line-height: 3rem;
                margin-right: 1rem;
            `,
            ToggleBtn: styled.button`
                flex-grow: 1;
                cursor: pointer;
            `,
            AddBtn: styled.button<{detailLen : number}>`
                z-index: ${ZINDEX.Z2};
                position: relative;
                
                display: ${props => props.detailLen <= 5 ? "block" : "none"};
            `,
            AddBtnBackdrop: styled.div`
                z-index: ${ZINDEX.Z1};
                background: white;
                // opacity: 0.2;
                width: 100%;
                height: 100%;
            `
        }
    },
}

export const Barcode = styled.div`
    margin-top: 1.5rem;
    text-align: center;

    img {
        mix-blend-mode: multiply;
        width: 70%;
        margin: 0 auto;
    }
`