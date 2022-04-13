import React from "react";
import { Ul, Li } from "./styled";

const List = ({ children }: { children: JSX.Element[] }) => {
  return (
    <Ul>
      {children.map((el, i) => (
        <Li key={i}>{el}</Li>
      ))}
    </Ul>
  );
};

export default List;
