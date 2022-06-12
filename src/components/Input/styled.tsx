import styled from "@emotion/styled";
import { ColorTheme, Size } from "@/types";
import { FONTSIZE, COLOR } from "@/constants/style";

interface Props {
  color: keyof typeof COLOR | ColorTheme;
  sizing: Size;
}

export const Label = styled.label`
  width: 140px;
  font-size: ${FONTSIZE.M};
`;

export const InputStyle = styled.input<Props>`
  width: 100%;
  height: ${({ sizing }) =>
    sizing === Size.Small ? 40 : sizing === Size.Medium ? 50 : 60}px;
  font-size: ${FONTSIZE.M};
  border: 1px solid ${({ color }) => COLOR[color].default};
  border-radius: 5px;
  margin: 0 auto;
  padding: 0 15px;

  &:focus {
    outline: 1px solid ${({ color }) => COLOR[color].active};
  }
`;
