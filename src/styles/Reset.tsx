import { css } from "@emotion/react";

const Reset = css`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap");

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }
  html,
  body {
    width: 100%;
  }
  html {
    font-size: 10px;
  }
  body {
    font-family: "Noto Sans KR", sans-serif;
  }
  ol,
  ul {
    list-style: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  span {
    display: inline-block;
  }
`;

export default Reset;
