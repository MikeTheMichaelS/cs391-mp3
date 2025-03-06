import { StyledMainWrapper, StyledMainH2, StyledMainP } from "../MyStyledComponents"
import Calculator from "./Calculator";

export default function ProjectMain() {
    return (
        <StyledMainWrapper>
            <div id="project-description">
                <StyledMainH2>Project</StyledMainH2>
                <StyledMainP id="description">Here's a calculator for you to use.</StyledMainP>
            </div>
            <Calculator />
        </StyledMainWrapper>
    );
};