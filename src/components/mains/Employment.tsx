import { useEffect } from "react";
import { StyledMainWrapper, StyledMainH2, StyledMainH3, StyledMainP, FirstLayerList, SecondLayerList } from "../MyStyledComponents"

export default function EmploymentMain() {

    useEffect(() => {
        document.title = "Employment | Michael MP-3";
    }, []);

    return (
        <StyledMainWrapper>
            <StyledMainH2>Employment</StyledMainH2>
            <ul>
                <FirstLayerList>
                    <StyledMainH3>Software Engineer Intern</StyledMainH3>
                    <StyledMainP>Company: <a href="https://www.example.com/">Example llc</a></StyledMainP>
                    <StyledMainP>Location: San Diego, CA</StyledMainP>
                    <StyledMainP>Duration: May 2020 - August 2020</StyledMainP>
                    <StyledMainP>Responsibilities:</StyledMainP>
                    <ul>
                        <SecondLayerList>
                            Developed a web application for the company's internal use using React.js, Node.js, and
                            Express.js
                        </SecondLayerList>
                        <SecondLayerList>
                            Implemented a feature that allows users to upload and download files from the server
                        </SecondLayerList>
                        <SecondLayerList>
                            Designed and implemented a feature that allows users to search for files by name and
                            tags
                        </SecondLayerList>
                        <SecondLayerList>
                            Wrote unit tests for the application using Jest and Enzyme
                        </SecondLayerList>
                    </ul>
                </FirstLayerList>
                <FirstLayerList>
                    <StyledMainH3>Software Engineer Intern</StyledMainH3>
                    <StyledMainP>Company: <a href="https://www.example.org/">Other Example llc</a></StyledMainP>
                    <StyledMainP>Location: San Diego, CA</StyledMainP>
                    <StyledMainP>Duration: May 2019 - August 2019</StyledMainP>
                    <StyledMainP>Responsibilities:</StyledMainP>
                    <ul>
                        <SecondLayerList>
                            Developed a web application for the company's internal use using React.js, Node.js, and
                            Express.js
                        </SecondLayerList>
                        <SecondLayerList>
                            Implemented a feature that allows users to upload and download files from the server
                        </SecondLayerList>
                        <SecondLayerList>
                            Designed and implemented a feature that allows users to search for files by name and
                            tags
                        </SecondLayerList>
                        <SecondLayerList>
                            Wrote unit tests for the application using Jest and Enzyme
                        </SecondLayerList>
                    </ul>
                </FirstLayerList>
            </ul>
        </StyledMainWrapper>
    );
};