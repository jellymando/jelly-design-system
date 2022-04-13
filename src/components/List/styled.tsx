import styled from "@emotion/styled";
import { FONTSIZE } from "@/constants/style";

export const FormStyle = styled.form`
  width: 100%;
`;

export const Ul = styled.ul`
  margin-bottom: 30px;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  font-size: ${FONTSIZE.M};
  &:not(:last-of-type) {
    margin-bottom: 15px;
  }
`;
