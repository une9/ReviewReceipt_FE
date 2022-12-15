import { css } from "@emotion/react";

export const fonts = css`
    {/* Abril Fatface */}
    // index.html link

    {/* NeoDunggeunmo */}
    @font-face {
        font-family: 'ND';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.3/NeoDunggeunmo.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    {/* 'Pretendard-Regular' */}
    @font-face {
        font-family: 'P';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }

    {/* twaysky */}
    @font-face {
        font-family: 'TS';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_tway@1.0/twaysky.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
`

export const globalStyles = css`

    * {
        box-sizing: border-box;
    }
`