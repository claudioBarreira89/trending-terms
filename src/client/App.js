import React, { useState } from "react";
import GlobalStyles from "./styles";
import { SearchField, Results } from "./components";
import apiService from "./services";

const App = () => {
    const [state, setState] = useState({
        isLoading: false,
        data: null,
        terms: [],
        submittedTerms: []
    });

    const getData = async () => {
        if (state.terms.length === 0) return;
        toggleLoading();

        const terms = state.terms.join("-");
        const data = await apiService.getTerms(terms);

        setState({
            ...state,
            submittedTerms: [...state.terms],
            isLoading: false,
            data
        });
    };

    const setTerms = value => {
        const terms = value ? value.split(",") : [];

        setState({
            ...state,
            terms: terms
                .map(term => term.replace(/^\s+|\s+$/g, ""))
                .filter(term => term !== "")
        });
    };

    const toggleLoading = () => {
        setState({
            ...state,
            isLoading: !state.isLoading
        });
    };

    return (
        <>
            <GlobalStyles />
            <SearchField
                getData={getData}
                setTerms={setTerms}
                data={state.data}
                isLoading={state.isLoading}
            />
            <Results
                data={state.data}
                isSubmitted={state.isSubmitted}
                terms={state.submittedTerms}
                isLoading={state.isLoading}
            />
        </>
    );
};

export default App;
