import styled from "styled-components";
import { colors } from "../../styles";

export const SearchedTerms = styled.div`
    margin: 25px 0;
    display: flex;
    align-items: center;

    div {
        font-size: 15px;
        padding: 7px 15px;
        margin-left: 12px;
        line-height: 1;
        background-color: ${colors.darkGray};
        color: ${colors.white};
        font-weight: 500;
        border-radius: 4px;
    }
`;

export const StyledChart = styled.div`
    min-height: 300px;
    padding: 20px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12);
    margin-bottom: 30px;
    background-color: ${colors.white};
`;
