import styled, { css } from "styled-components";

import background from "../../../assets/images/LaDolce/apresentacao.png";
import { colors } from "../../../styles";

const CommonStyles = css`
  color: ${colors.white};
  font-size: 32px;
  position: absolute;
  left: 170px;
`;

export const Container = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${background}) center/cover no-repeat;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  position: relative;
  width: 100%;
  height: 280px;

  margin-bottom: 56px;
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
