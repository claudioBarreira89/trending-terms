import styled from "styled-components";
import { colors } from "../../styles";

export const StyledWrapper = styled.div`
    position: relative;
    max-width: 650px;
    margin: auto;
`;

export const StyledInput = styled.input`
    width: 100%;
    outline: 0;
    padding: 20px 25px;
    border: 0;
    border-radius: 25px;
    font-size: 15px;
    color: ${colors.white};
    margin: 20px 0;
    background-color: ${colors.lightTeal};
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12);

    ::placeholder {
        color: ${colors.white};
    }
`;

export const StyledSubmit = styled.div`
    position: absolute;
    width: 40px;
    height: 40px;
    top: 50%;
    right: 15px;
    padding: 10px;
    transform: translateY(-50%);
    cursor: pointer;
    border-radius: 100%;
    transition: 0.3s;

    :hover {
        background-color: rgba(255, 255, 255, 0.09);
    }

    :active {
        background-color: rgba(255, 255, 255, 0.4);
    }
`;

export const LoaderWrapper = styled.div`
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    right: 15px;
`;
