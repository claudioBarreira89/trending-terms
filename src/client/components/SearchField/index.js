import React from "react";
import { StyledSearchField, InputWrapper } from "./styles";
import { Wrapper, InputField } from "../../elements";

const SearchField = ({ getData, setTerms, data, isLoading }) => {
    return (
        <StyledSearchField small={!!data}>
            <Wrapper>
                <InputWrapper>
                    <h1>Search terms to check their historical popularity</h1>
                    <InputField
                        handleClick={getData}
                        handleChange={setTerms}
                        isLoading={isLoading}
                    />
                </InputWrapper>
            </Wrapper>
        </StyledSearchField>
    );
};

export default SearchField;
