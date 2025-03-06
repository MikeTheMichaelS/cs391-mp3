import styled from "styled-components";

export const StyledHeader = styled.header`
    flex: 0;
    width: 100%;
    background-color: #f4f4f4;
    text-align: left;
    padding: 1%;
    font-size: 1.5vw;

    @media screen and (max-width: 1000px) {
        width: 100%;
        background-color: #f4f4f4;
        text-align: center;
    }
`;

export default function Header() {
    return (
        <StyledHeader>
            <h1 className="self-name">Yiyun (Michael) Sun</h1>
            <p className="subtitle">A resume of Michael created in CS391</p>
        </StyledHeader>
    );
}