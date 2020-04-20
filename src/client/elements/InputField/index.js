import React from "react";
import {
    StyledWrapper,
    StyledInput,
    StyledSubmit,
    LoaderWrapper
} from "./styles";
import { colors } from "../../styles";
import { Loader } from "../";

const InputField = ({ handleClick, handleChange, isLoading }) => {
    return (
        <StyledWrapper>
            <StyledInput
                placeholder="Search for one or more terms separated by commas"
                onChange={e => handleChange(e.target.value)}
                onKeyPress={e => e.key === "Enter" && handleClick()}
            />
            {!isLoading ? (
                <StyledSubmit onClick={handleClick}>
                    <svg
                        x="0px"
                        y="0px"
                        viewBox="0 0 1000 1000"
                        enableBackground="new 0 0 1000 1000"
                    >
                        <g>
                            <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
                                <path
                                    fill={colors.white}
                                    d="M5672.2,5029.9c-711.2-65.6-1452.1-351.6-1992.5-764.8c-178.8-137.1-474.8-429.1-623.8-611.8c-832.3-1035-1066.7-2560.6-588-3843.9c79.5-212.6,236.4-532.4,337.7-691.3l67.5-105.3l-443-454.9c-244.3-250.3-842.3-860.2-1329-1354.8C80.2-3835.9,100-3810,100-4114c0-151,7.9-196.7,53.6-292c186.7-401.3,681.4-544.3,1044.9-303.9c43.7,27.8,665.5,649.6,1382.6,1378.6l1303.2,1329l220.5-125.1c371.5-212.6,824.4-371.5,1299.2-456.9c282.1-51.6,842.3-61.6,1154.2-21.8c1827.6,232.4,3134.7,1571.3,3327.4,3408.9c29.8,294,11.9,796.6-39.7,1092.6c-178.8,1017.1-703.2,1865.3-1521.7,2453.3c-222.5,160.9-705.2,403.3-987.3,496.6C6812.5,5016,6222.5,5081.6,5672.2,5029.9z M6619.8,4110.2c659.5-147,1259.4-516.5,1702.5-1046.9c611.8-733,832.3-1636.9,615.8-2514.9c-109.3-447-309.9-832.4-625.8-1209.8c-520.5-619.8-1233.6-1003.2-2008.4-1080.7c-810.5-79.5-1656.7,240.4-2290.4,866.1c-272.2,270.2-441,502.6-605.9,834.3c-234.4,470.8-307.9,814.5-290,1340.9c9.9,339.7,35.8,494.6,125.2,764.8c151,464.8,417.2,878,792.6,1243.6c470.8,452.9,971.4,711.2,1597.1,824.4C5833.1,4167.8,6423.1,4155.9,6619.8,4110.2z"
                                />
                            </g>
                        </g>
                    </svg>
                </StyledSubmit>
            ) : (
                <LoaderWrapper>
                    <Loader />
                </LoaderWrapper>
            )}
        </StyledWrapper>
    );
};

export default InputField;
