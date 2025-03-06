import styled from "styled-components";
import { StyledMainWrapper, StyledMainH2, StyledMainP, StyledMainH3 } from "../MyStyledComponents"

const StyledEducationMainUl = styled.ul`
    margin: 0;
    padding: 1.5%;
`;

export default function EducationMain() {
    return (
        <StyledMainWrapper>
            <StyledMainH2>Education</StyledMainH2>
            <StyledEducationMainUl>
                <li>
                    <StyledMainH3>Boston University</StyledMainH3>
                    <StyledEducationMainUl>
                        <li><StyledMainP>Sep. 2021 - Now</StyledMainP></li>
                        <li><StyledMainP>Bachelor of Computer Science</StyledMainP></li>
                        <li><StyledMainP>Expected Graduation: May 2025</StyledMainP></li>
                    </StyledEducationMainUl>
                </li>
                <li>
                    <StyledMainH3>Random School Out There</StyledMainH3>
                    <StyledEducationMainUl>
                        <li><StyledMainP>Sep. 2017 - Jun. 2021</StyledMainP></li>
                        <li><StyledMainP>High School Diploma</StyledMainP></li>
                        <li><StyledMainP>Graduated with Honors</StyledMainP></li>
                    </StyledEducationMainUl>
                </li>
            </StyledEducationMainUl>
        </StyledMainWrapper>
    );
};