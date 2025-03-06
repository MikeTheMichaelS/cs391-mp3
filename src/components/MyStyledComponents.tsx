import styled from "styled-components";

export const StyledBody = styled.body`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin: 0 10%;
    font-family: Arial, sans-serif;
`;


export const StyledContentWrapper = styled.div`
    flex:1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    // height: 100vh;
    width: 100%;

    @media screen and (max-width: 1000px) {
        display: flex;
        width: 100%;
        flex-direction: column;
        /* Stack navigation and main content vertically */
    }

`;

export const StyledMainWrapper = styled.main`
    flex: 7;
    width: 100%;
    background-color: beige;
    // width: 100%;
    padding: 20px;
    // height: 100vh;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1000px) {
        background-color: beige;
        width: 100%;
        padding: 0;
    }
`;

export const StyledMainH2 = styled.h2`
    text-align: center;
    font-size: 2.5vw;
`;

export const StyledMainH3 = styled.h3`
    font-size: 2vw;
`;

export const StyledMainP = styled.p`
    padding: 1%;
    font-size: 1vw;
`;

export const FirstLayerList = styled.li`
    list-style-type: none;
    padding-left: 0.5%;
    padding-top: 1%;
    font-size: 1vw;
`;

export const SecondLayerList = styled.li`
    list-style-type: none;
    padding-left: 1%;
    padding-top: 1%;
    font-size: 1vw;
`;

export const ThirdLayerList = styled.li`
    list-style-type: none;
    padding-left: 1.5%;
    padding-top: 1%;
    font-size: 1vw;
`;