import styled from "styled-components";
import { StyledMainWrapper, StyledMainH2, StyledMainP, StyledMainH3 } from "../MyStyledComponents"
import { useEffect } from "react";

const StyledEducationMainUl = styled.ul`
    margin: 0;
    padding: 2%;
`;

const StyledEducationMainLi = styled.li`
    margin-left: 1%;
`;

export default function EducationMain() {

    useEffect(() => {
        document.title = "Education | Michael MP-3";
    }, []);

    return (
        <StyledMainWrapper>
            <StyledMainH2>Education</StyledMainH2>
            <StyledEducationMainUl>
                <StyledEducationMainLi>
                    <StyledMainH3>Boston University</StyledMainH3>
                    <StyledEducationMainUl>
                        <li><StyledMainP>Sep. 2021 - Now</StyledMainP></li>
                        <li><StyledMainP>Bachelor of Computer Science</StyledMainP></li>
                        <li><StyledMainP>Expected Graduation: May 2025</StyledMainP></li>
                    </StyledEducationMainUl>
                </StyledEducationMainLi>
                <StyledEducationMainLi>
                    <StyledMainH3>Random School Out There</StyledMainH3>
                    <StyledEducationMainUl>
                        <li><StyledMainP>Sep. 2017 - Jun. 2021</StyledMainP></li>
                        <li><StyledMainP>High School Diploma</StyledMainP></li>
                        <li><StyledMainP>Graduated with Honors</StyledMainP></li>
                    </StyledEducationMainUl>
                </StyledEducationMainLi>
            </StyledEducationMainUl>
        </StyledMainWrapper>
    );
};