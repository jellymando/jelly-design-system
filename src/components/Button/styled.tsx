import styled from "@emotion/styled";
import { ColorTheme } from "@/types";
import { COLOR_THEME } from "@/constants/theme";
import { FONTSIZE, COLOR } from "@/constants/style";

interface Props {
  color: ColorTheme;
  filled: boolean;
}

export const ButtonStyle = styled.button<Props>`
  width: 100%;
  height: 50px;
  font-size: ${FONTSIZE.M};
  font-weight: 700;
  color: ${({ color, filled }) =>
    filled
      ? color === COLOR_THEME.WHITE
        ? "inherit"
        : COLOR.white.default
      : COLOR[color].default};
  background-color: ${({ color, filled }) =>
    filled
      ? COLOR[color].default
      : color === COLOR_THEME.WHITE
      ? "transparent"
      : COLOR.white.default};
  ${({ color, filled }) =>
    !filled && `border: 2px solid ${COLOR[color].default};`}
  border-radius: 5px;
  transition: 0.5s;
  cursor: pointer;

  &:hover:not(:disabled) {
    color: ${({ color }) =>
      color === COLOR_THEME.WHITE ? "inherit" : COLOR.white.default};
    background-color: ${({ color }) => COLOR[color].default};
  }

  &:active:not(:disabled) {
    background-color: ${({ color }) => COLOR[color].active};
    ${({ color, filled }) =>
      !filled && `border: 2px solid ${COLOR[color].active};`}
  }

  &:disabled {
    opacity: 0.9;
    cursor: default;
  }
`;
