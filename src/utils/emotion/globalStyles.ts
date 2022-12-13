import { css } from "@emotion/react";

export const fonts = css`
    {/* Abril Fatface */}
    @font-face {
        font-family: 'AF';
        src: url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
        font-weight: normal;
        font-style: normal;
    }

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

    * {
        font-family: "ND", "P", serif;
    }

`

export const globalStyles = css`
    * {
        box-sizing: border-box;
    }
`