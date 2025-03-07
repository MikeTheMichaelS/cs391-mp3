import { useState } from "react";
import styled from "styled-components";

const StyledCalculator = styled.div`
    padding: 20px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);

    @media screen and (max-width: 1000px) {
        padding: 10;
    }
`;

const StyledInputFields = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    padding-bottom: 10%;
`;

const StyledInputLine = styled.p`
    margin: 0 auto;
`;

const StyledResultField = styled.p<{ isNegative: boolean }>`
    padding-top: 10%;
    text-align: center;
    color: ${props => props.isNegative ? 'red' : 'black'};
`;

const StyledButton = styled.button`
    border-radius: 50%;
    padding: 10px 20px;
    margin: 5px;
`;

export default function Calculator() {
    const [firstValue, setFirstValue] = useState(0);
    const [secondValue, setSecondValue] = useState(0);
    const [result, setResult] = useState(0);

	function myPower(first, second){
		var res=1;
		for(var i = 0, i < Number(second), i++){
			res = res * first;
		};
		return res;
	};

    return (
        <StyledCalculator>
            <StyledInputFields>
                <StyledInputLine>
                    <label htmlFor="first-value">First value: </label>
                    <input type="number" id="first-value" value={firstValue} onChange={
                        (e) => setFirstValue(Number(e.target.value))
                    } />
                </StyledInputLine>
                <StyledInputLine>
                    <label htmlFor="second-value">Second value: </label>
                    <input type="number" id="second-value" value={secondValue} onChange={
                        (e) => setSecondValue(Number(e.target.value))
                    } />
                </StyledInputLine>
            </StyledInputFields>

            <div id="operations">
                <StyledButton onClick={() => setResult(firstValue + secondValue)}>Add</StyledButton>
                <StyledButton onClick={() => setResult(firstValue - secondValue)}>Subtract</StyledButton>
                <StyledButton onClick={() => setResult(firstValue * secondValue)}>Multiply</StyledButton>
                <StyledButton onClick={() => setResult(firstValue / secondValue)}>Divide</StyledButton>
                <StyledButton onClick={() => setResult(myPower(Number(firstValue), Number(secondValue))}>Power</StyledButton>
                <StyledButton onClick={() => { setFirstValue(0); setSecondValue(0); setResult(0) }}>Clear</StyledButton>
            </div>

            <StyledResultField isNegative={result < 0}>Result: {result}</StyledResultField>
        </StyledCalculator>
    )
}