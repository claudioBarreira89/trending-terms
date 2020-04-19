import React from "react";
import { Wrapper } from "../../elements";
import { SearchedTerms } from "./styles";
import Chart from "./Chart";
import { colors } from "../../styles";

const Results = ({ data, terms, isSubmitted }) => {
    return (
        <div style={{ backgroundColor: colors.lightGray }}>
            {isSubmitted && (
                <>
                    <Wrapper>
                        <SearchedTerms>
                            <h2>Searched terms:</h2>
                            {terms.map((term, i) => (
                                <div key={i}>{term}</div>
                            ))}
                        </SearchedTerms>
                    </Wrapper>
                    <Wrapper>
                        <Chart />
                    </Wrapper>
                </>
            )}
        </div>
    );
};

export default Results;
