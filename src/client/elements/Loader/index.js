import React from "react";
import spinner from "../../assets/spinner.gif";
import { StyledLoader } from "./styles";

const Loader = ({ dataTestId }) => (
    <StyledLoader src={spinner} alt="" data-testid={dataTestId} />
);

export default Loader;
