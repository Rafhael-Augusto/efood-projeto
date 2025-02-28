import styled, { css } from "styled-components";

type Capa = {
  background: string;
};

import { colors } from "../../../styles";

const CommonStyles = css`
  color: ${colors.white};
  font-size: 32px;
  position: absolute;
  top: 213px;
`;

export const Background = styled.div<Capa>`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.background}) center/cover no-repeat;
  background-position: center;
  background-size: cover;

  width: 100%;
  height: 280px;

  margin-bottom: 56px;
  > div {
    position: relative;
  }
`;

export const RestaurantName = styled.h3`
  ${CommonStyles};
  font-weight: 900;
  bottom: 32px;
`;

export const RestaurantType = styled.h4`
  ${CommonStyles};
  font-weight: 100;
  top: 24px;
`;
