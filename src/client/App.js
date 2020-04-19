import React, { useState } from "react";
import GlobalStyles from "./styles";
import { SearchField, Results } from "./components";
import apiService from "./services";

const App = () => {
    const [state, setState] = useState({
        isSubmitted: false,
        data: null,
        terms: null
    });

    const getData = async () => {
        const terms = state.terms.join("-");
        const data = await apiService.getTerms(terms);

        setState({
            ...state,
            isSubmitted: true,
            data: data.default
        });
    };

    const setTerms = value => {
        const terms = value.replace(/\s/g, "").split(",");

        setState({
            ...state,
            isSubmitted: false,
            terms
        });
    };

    return (
        <>
            <GlobalStyles />
            <SearchField getData={getData} setTerms={setTerms} />
            <Results
                data={state.data}
                isSubmitted={state.isSubmitted}
                terms={state.terms}
            />
        </>
    );
};

export default App;
