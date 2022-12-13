import styled from '@emotion/styled'

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

export const ReviewDetailInner = styled.div`
    margin-top: 32px;

    display: flex;
    justify-content: center;
`

export const ReviewReceipt = styled.article`
    width: 28rem;
    padding: 3rem 2rem;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`

export const ReviewReceiptDetail = styled.section`
    width: 24rem;

    ul {
        padding: 0;
    }

    .rows {
        margin: 1rem 0;
    }
`

export const ReviewReceiptDetailReviewText = styled.div`
    p {
        margin: 1rem 0.5rem 2rem 0.5rem;
    }
`

export const ReviewReceiptDetailRow = styled.li`
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

export const SepLine = styled.div`
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: none;
`
