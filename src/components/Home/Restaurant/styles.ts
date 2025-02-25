import styled from "styled-components";
import { colors } from "../../../styles";

export const Container = styled.div`
  max-width: 472px;
  position: relative;
  color: ${colors.lightPink};

  img {
    display: block;
    max-width: 472px;
    max-height: 217px;

    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`;

export const Tag = styled.div`
  display: inline-block;
  background-color: ${colors.lightPink};
  padding: 6px 4px;
  color: ${colors.white};
`;

export const Info = styled.div`
  padding: 8px;
  border: 1px solid;
  border-top: none;

  > div {
    > div {
      ${Tag} {
        max-width: 82px;
      }
    }
  }
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
