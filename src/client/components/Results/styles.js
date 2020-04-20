import styled from "styled-components";
import { colors } from "../../styles";

export const StyledResults = styled.div`
    background-color: ${colors.lightGray};
    height: 100vh;
`;

export const SearchedTerms = styled.div`
    margin: 25px 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledTerm = styled.div`
    font-size: 15px;
    line-height: 1;
    background-color: ${({ color }) => color};
    color: ${colors.white};
    font-weight: 500;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin: 0 3px;
    max-width: 120px;
    height: 35px;
    flex: 1;
    fonf-size: 20px;
`;

export const StyledH3 = styled.h3`
    font-size: 15px;
    padding-top: 20px;
    font-weight: 100;
    text-align: center;
`;

export const StyledChart = styled.div`
    position: relative;
    min-height: 350px;
    padding: 20px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12);
    margin-bottom: 30px;
    background-color: ${colors.white};
`;

export const StyledLoader = styled.img`
    max-width: 250px;
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    margin: auto;
`;

export const NoData = styled.div`
    text-align: center;
    font-size: 22px;
    margin: 0 auto;
    max-width: 300px;
    top: 50%;
    position: absolute;
    right: 0;
    left: 0;
    transform: translateY(-50%);
`;
