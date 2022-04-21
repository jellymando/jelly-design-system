import * as React from "react";

const User = ({
  width = 32,
  height = 32,
  color = "#000"
}: {
  width?: number;
  height?: number;
  color?: string;
}) => (
  <svg width={width} height={height}>
    <title />
    <g>
      <path d="M16 14a6 6 0 1 1 6-6 6 6 0 0 1-6 6Zm0-10a4 4 0 1 0 4 4 4 4 0 0 0-4-4ZM24 30H8a2 2 0 0 1-2-2v-6a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7v6a2 2 0 0 1-2 2ZM13 17a5 5 0 0 0-5 5v6h16v-6a5 5 0 0 0-5-5Z" />
    </g>
  </svg>
);

export default User;
