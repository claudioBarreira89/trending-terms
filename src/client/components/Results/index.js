import React from "react";
import { Wrapper } from "../../elements";
import { StyledResults, SearchedTerms, StyledTerm, StyledH3 } from "./styles";
import TermChart from "./TermChart";
import { colors } from "../../styles";

const Results = ({ data, terms, isLoading }) => {
    return (
        <>
            {data && (
                <StyledResults>
                    <Wrapper>
                        <StyledH3>Searched terms:</StyledH3>
                        <SearchedTerms>
                            {terms.map((term, i) => (
                                <StyledTerm
                                    key={i}
                                    color={colors.chartColors[i]}
                                >
                                    {term}
                                </StyledTerm>
                            ))}
                        </SearchedTerms>
                    </Wrapper>
                    <Wrapper>
                        <TermChart
                            data={data}
                            terms={terms}
                            isLoading={isLoading}
                        />
                    </Wrapper>
                </StyledResults>
            )}
        </>
    );
};

export default Results;
