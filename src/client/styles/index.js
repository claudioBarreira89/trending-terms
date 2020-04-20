import styled, { createGlobalStyle } from "styled-components";
import colors from "./colors";

const GlobalStyles = createGlobalStyle`
    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${colors.black};
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }

    h1 {
        font-size: 40px;
        font-weight: 500;
        margin-bottom: 25px;
        color: ${colors.black};
        letter-spacing: 1.3px;
    }

    h2 {
        font-size: 26px;
        font-weight: normal;
        color: ${colors.teal};
        letter-spacing: 1px;
        margin-bottom: 20px;

    }
`;

export const AppWrapper = styled.div`
    opacity: 1;
    transition: 0.4s;
    ${({ isVisible }) =>
        isVisible &&
        `    
        animation-name: opacityAnimation;
        animation-duration: .5s;
    `}

    @keyframes opacityAnimation {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export { default as colors } from "./colors";
export default GlobalStyles;
