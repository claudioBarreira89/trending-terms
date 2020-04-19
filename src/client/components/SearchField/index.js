import React from "react";
import { StyledSearchField, InputWrapper } from "./styles";
import { Wrapper, InputField } from "../../elements";

const SearchField = ({ getData, setTerms }) => {
    return (
        <StyledSearchField>
            <Wrapper>
                <InputWrapper>
                    <h1>Trending Terms</h1>
                    <InputField handleClick={getData} handleChange={setTerms} />
                </InputWrapper>
            </Wrapper>
        </StyledSearchField>
    );
};

export default SearchField;
