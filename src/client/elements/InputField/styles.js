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
    padding: 20px 15px;
    border: 2px solid ${colors.gray};
    border-radius: 5px;
    font-size: 15px;
    color: ${colors.darkGray};
    margin: 20px 0;
`;

export const StyledSubmit = styled.div`
    position: absolute;
    width: 40px;
    top: 50%;
    right: 5px;
    padding: 10px;
    transform: translateY(-50%);
    cursor: pointer;
`;
