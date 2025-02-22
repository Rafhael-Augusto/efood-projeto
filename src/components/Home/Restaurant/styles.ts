import styled from "styled-components";
import { colors } from "../../../styles";

export const Container = styled.div`
  max-width: 472px;
  width: 100%;
  position: relative;
  color: ${colors.lightPink};
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`;

export const Tag = styled.div`
  display: inline;
  background-color: ${colors.lightPink};
  padding: 6px 4px;
  color: ${colors.white};
  font-size: 12px;
  font-weight: 700;

  .tag {
    color: ${colors.white};
  }
`;

export const Info = styled.div`
  padding: 0 8px 8px 8px;
  border: 1px solid;
  border-top: none;
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
`;

export const TopRight = styled.div`
  display: flex;
  gap: 8px;
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const Middle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  margin-top: 0px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    img {
      margin-bottom: 2px;
    }
  }
`;
