import styled from "styled-components";
import { colors } from "../../../styles";

export const Container = styled.div`
  max-width: 320px;
  width: 100%;
  padding: 8px;
  background-color: ${colors.lightPink};
`;

export const Title = styled.h3`
  color: ${colors.white};
  font-weight: 900;
  font-size: 16px;
  margin-top: 8px;
`;

export const Description = styled.p`
  color: ${colors.white};
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin: 8px 0;
`;

export const AddToCart = styled.button`
  color: ${colors.lightPink};
  font-weight: 700;
  font-size: 14px;
  padding: 4px 0;
  background-color: ${colors.white};
  border: none;
  width: 100%;
`;
