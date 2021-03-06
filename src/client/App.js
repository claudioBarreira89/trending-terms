import React, { useState, useEffect } from "react";
import GlobalStyles, { AppWrapper } from "./styles";
import { SearchField, Results } from "./components";
import apiService from "./services";

const App = () => {
    const [state, setState] = useState({
        isLoading: false,
        data: null,
        terms: [],
        submittedTerms: [],
        configuration: null
    });

    useEffect(() => {
        (async function() {
            const configuration = await apiService.postConfiguration();
            setState(s => ({
                ...s,
                configuration
            }));
        })();
    }, []);

    const getData = async () => {
        if (state.terms.length === 0) return;
        toggleLoading();

        const submittedTerms = state.terms.slice(
            0,
            state.configuration.numberOfTerms
        );

        const terms = submittedTerms.join("-");
        const data = await apiService.getTerms(terms, "PT");

        setState({
            ...state,
            submittedTerms,
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
            {state.configuration && (
                <AppWrapper isVisible={!!state.configuration}>
                    <SearchField
                        getData={getData}
                        setTerms={setTerms}
                        data={state.data}
                        isLoading={state.isLoading}
                    />
                    <Results
                        data={state.data}
                        terms={state.submittedTerms}
                        isLoading={state.isLoading}
                    />
                </AppWrapper>
            )}
        </>
    );
};

export default App;
