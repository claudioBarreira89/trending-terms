import styled from "styled-components";
import { colors } from "../../styles";

export const StyledSearchField = styled.div`
    display: flex;
    align-items: center;
    background-color: ${colors.teal};
    min-height: 300px;
    transition: 0.5s ease-in-out;
    height: 100vh;

    ${({ small }) => small && "height: 300px;"}
`;

export const InputWrapper = styled.div`
    text-align: center;

    h1 {
        max-width: 600px;
        margin: 0 auto 20px;
        color: ${colors.white};
    }
`;
