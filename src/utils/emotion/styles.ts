import styled from '@emotion/styled'
import { COLOR } from './variables'

// 페이지 최상단 div (반응형)
export const Page = styled.div`
    max-width: 1200px;
    margin: 0 auto;

    @media(min-width: 576px) {
        
    }

    @media(min-width: 768px) {
        
    }

    @media (min-width: 992px) { 

    }

`

export const PageTitle = styled.h1`
    font-family: 'Abril Fatface', cursive;
    font-size: 4rem;
`

// Review List Item
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
    `,
    Date: styled.div`
        margin-bottom: 0.5rem;
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