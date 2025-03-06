import { useEffect } from "react";
import {
    StyledMainWrapper,
    StyledMainH2,
    StyledMainH3,
    StyledMainP,
    FirstLayerList,
    SecondLayerList,
    ThirdLayerList
} from "../MyStyledComponents"

export default function ExperienceMain() {

    useEffect(() => {
        document.title = "Experience | Michael MP-3";
    }, []);

    return (
        <StyledMainWrapper>
            <StyledMainH2>Experience</StyledMainH2>
            <ul>
                <FirstLayerList>
                    <StyledMainH3>Random Company</StyledMainH3>
                    <ul>
                        <SecondLayerList>
                            <StyledMainP>
                                Jan 2022 - Now
                            </StyledMainP>
                        </SecondLayerList>
                        <SecondLayerList>
                            <StyledMainP>Software Engineer</StyledMainP>
                        </SecondLayerList>
                        <SecondLayerList><StyledMainP>Projects:</StyledMainP>
                            <ul>
                                <ThirdLayerList>
                                    <StyledMainP>Project 1</StyledMainP>
                                </ThirdLayerList>
                                <ThirdLayerList>
                                    <StyledMainP>Project 2</StyledMainP>
                                </ThirdLayerList>
                                <ThirdLayerList>
                                    <StyledMainP>Project 3</StyledMainP>
                                </ThirdLayerList>
                            </ul>
                        </SecondLayerList>
                    </ul>
                </FirstLayerList>
                <FirstLayerList>
                    <StyledMainH3>Random Company 2</StyledMainH3>
                    <ul>
                        <SecondLayerList>
                            <StyledMainP>Jan 2020 - Dec 2021</StyledMainP>
                        </SecondLayerList>
                        <SecondLayerList>
                            <StyledMainP>Software tester</StyledMainP>
                        </SecondLayerList>
                        <SecondLayerList><StyledMainP>Projects:</StyledMainP>
                            <ul>
                                <ThirdLayerList>
                                    <StyledMainP>Simulation of mosquitos living in winter</StyledMainP>
                                </ThirdLayerList>
                                <ThirdLayerList>
                                    <StyledMainP>Simulation of rats living without nutrient.</StyledMainP>
                                </ThirdLayerList>
                            </ul>
                        </SecondLayerList>
                    </ul>
                </FirstLayerList>
            </ul>
        </StyledMainWrapper>
    );
};