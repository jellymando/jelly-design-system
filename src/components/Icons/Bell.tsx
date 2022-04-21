import * as React from "react";

const Bell = ({
  width = 32,
  height = 32,
  color = "#000"
}: {
  width?: number;
  height?: number;
  color?: string;
}) => (
  <svg width={32} height={32}>
    <title />
    <g>
      <path d="M16 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3Zm0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1ZM16 30a5 5 0 0 1-4.84-3.75 1 1 0 0 1 1-1.25h7.74a1 1 0 0 1 1 1.25A5 5 0 0 1 16 30Zm-2.24-3a3 3 0 0 0 4.48 0Z" />
      <path d="M28 27H4a1 1 0 0 1-1-1v-1.8a3 3 0 0 1 2.77-3V14a8 8 0 0 1 8-8h4.46a8 8 0 0 1 8 8v7.21a3 3 0 0 1 2.77 3V26a1 1 0 0 1-1 1ZM5 25h22v-.8a1 1 0 0 0-1-1h-.77a1 1 0 0 1-1-1V14a6 6 0 0 0-6-6h-4.46a6 6 0 0 0-6 6v8.2a1 1 0 0 1-1 1H6a1 1 0 0 0-1 1Z" />
    </g>
  </svg>
);

export default Bell;
