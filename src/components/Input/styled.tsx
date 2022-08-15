import styled from "@emotion/styled";
import { ColorTheme, Size } from "@/types";
import { FONTSIZE, COLOR, SIZE } from "@/constants/style";

interface InputProps {
  color: keyof typeof COLOR | ColorTheme;
  sizing: Size;
}

export const InputWrap = styled.div<{ inline: boolean }>`
  display: flex;
  ${({ inline }) =>
    inline
      ? `
        flex-direction: row;
        align-items: center;
      `
      : `
        flex-direction: column;
        label {
          margin-bottom: 5px;
        }
      `};
`;

export const Label = styled.label`
  width: 140px;
  font-size: ${FONTSIZE.M};
`;

export const InputStyle = styled.input<InputProps>`
  width: 100%;
  height: ${({ sizing }) =>
    SIZE.height[sizing]}px;
  font-size: ${FONTSIZE.M};
  border: 1px solid ${({ color }) => COLOR[color].default};
  border-radius: 5px;
  margin: 0 auto;
  padding: 0 15px;

  &:focus {
    outline: 1px solid ${({ color }) => COLOR[color].active};
  }
`;
