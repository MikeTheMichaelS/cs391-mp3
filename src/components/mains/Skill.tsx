import styled from "styled-components";
import { StyledMainWrapper, StyledMainH2, StyledMainH3, StyledMainP, FirstLayerList } from "../MyStyledComponents"
import { useEffect } from "react";

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
`;

const StyledThead = styled.thead`
    background-color: #f2f2f2;
`;

const StyledLineHead = styled.td`
    background-color: #f2f2f2;
    border: 1px solid black;
    text-align: center;
`;

const StyledTh = styled.th`
    padding: 12px;
    text-align: center;
    border: 1px solid black;

`;

const StyledTd = styled.td`
    padding: 12px;
    text-align: center;
    border: 1px solid black;
`;

export default function SkillMain() {

    useEffect(() => {
        document.title = "Skill | Michael MP-3";
    }, []);

    return (
        <StyledMainWrapper>
            <StyledMainH2>Skills</StyledMainH2>
            <StyledMainH3>Language Skills</StyledMainH3>
            <StyledMainP>Growing up with a change of environment, I am bilingual. And you can find some of the languages I
                learned below.</StyledMainP>
            <StyledTable>
                <StyledThead>
                    <tr>
                        <StyledTh>languages</StyledTh>
                        <StyledTh>Listening</StyledTh>
                        <StyledTh>Speaking</StyledTh>
                        <StyledTh>Reading</StyledTh>
                        <StyledTh>Writing</StyledTh>
                    </tr>
                </StyledThead>
                <tbody>
                    <tr>
                        <StyledLineHead>Chinese (Mandarin)</StyledLineHead>
                        <StyledTd>Native</StyledTd>
                        <StyledTd>Native</StyledTd>
                        <StyledTd>Native</StyledTd>
                        <StyledTd>Native</StyledTd>
                    </tr>
                    <tr>
                        <StyledLineHead>English</StyledLineHead>
                        <StyledTd>Fluent</StyledTd>
                        <StyledTd>Fluent</StyledTd>
                        <StyledTd>Fluent</StyledTd>
                        <StyledTd>Fluent</StyledTd>
                    </tr>
                    <tr>
                        <StyledLineHead>Spanish</StyledLineHead>
                        <StyledTd>Basic</StyledTd>
                        <StyledTd>Basic</StyledTd>
                        <StyledTd>Basic</StyledTd>
                        <StyledTd>Basic</StyledTd>
                    </tr>
                    <tr>
                        <StyledLineHead>Japanese</StyledLineHead>
                        <StyledTd>Basic</StyledTd>
                        <StyledTd>Basic</StyledTd>
                        <StyledTd>Basic</StyledTd>
                        <StyledTd>Basic</StyledTd>
                    </tr>
                </tbody>
            </StyledTable>
            <StyledMainH3>Coding Languages</StyledMainH3>
            <StyledMainP>As a computer science student, I have learned several coding languages. Here are some of them.</StyledMainP>
            <ul>
                <FirstLayerList>Python</FirstLayerList>
                <FirstLayerList>Java</FirstLayerList>
                <FirstLayerList>JavaScript</FirstLayerList>
                <FirstLayerList>HTML</FirstLayerList>
                <FirstLayerList>CSS</FirstLayerList>
                <FirstLayerList>SQL</FirstLayerList>
                <FirstLayerList>C</FirstLayerList>
            </ul>
        </StyledMainWrapper>
    );
};