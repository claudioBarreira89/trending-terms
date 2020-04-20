import React, { useMemo } from "react";
import { Chart } from "react-charts";
import { StyledChart, StyledLoader, NoData } from "./styles";
import { colors } from "../../styles";
import loading from "../../assets/loading.gif";

const TermChart = ({ data, terms, isLoading }) => {
    const chartData = useMemo(
        () =>
            terms.map((term, i) => ({
                label: `Series ${i}`,
                data: data[term]
                    ? data[term].map(item => [item.time, item.value])
                    : [],
                color: colors.chartColors[i]
            })),
        [data, terms]
    ).filter(termData => termData.data.length !== 0);

    const series = React.useMemo(
        () => ({
            type: "line",
            showPoints: false
        }),
        []
    );

    const axes = useMemo(
        () => [
            {
                primary: true,
                type: "ordinal",
                position: "bottom"
            },
            { type: "linear", position: "left" }
        ],
        []
    );

    return (
        <StyledChart>
            {!isLoading ? (
                <>
                    {chartData.length ? (
                        <Chart data={chartData} series={series} axes={axes} />
                    ) : (
                        <NoData>
                            There's no data available for the searched terms.
                        </NoData>
                    )}
                </>
            ) : (
                <StyledLoader src={loading} alt="" />
            )}
        </StyledChart>
    );
};

export default TermChart;
