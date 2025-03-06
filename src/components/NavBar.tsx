import { Link } from "react-router";
import { styled } from "styled-components";

const StyledNavBar = styled.nav`
    flex: 3;
    /* 30% of the width */
    background-color: lightblue;
    display: flex;
    flex-direction: column;
    /* padding: 10px; */
    justify-content: space-evenly;
    height: 100%;

    @media screen and (max-width: 1000px) {
        flex:0;
        display: flex;
        flex-direction: row;
        /* Horizontal layout for links */
        margin: 0;
    }
`;

const StyledNavBarUl = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;
    justify-content: space-evenly;
    height: 100%;

    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction: row;
        /* Horizontal layout for links */
        justify-content: space-around;
        width: 100%;
        /* Full width for nav */
        margin: 0;
    }
`;

const StyledNavBarLi = styled.li`
    margin-bottom: 10px;
    display: flex;
    align-content: center;
    justify-content: center;
    width: 100 %;
    flex: 1;

    @media screen and (max-width: 1000px) {
        display: inline;
        margin-bottom: 0;
        flex: 1;
        border: 1px solid black;
    }
`;

const StyledNavBarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    background-color: lightskyblue;
    padding: 10px;
    text-align: center;
    width: 100%;
    font-size: calc(1.5vw);
    height: 100%;

    @media screen and (max-width: 1000px) {
        display: block;
        align-content: center;
        color: black;
        background-color: lightskyblue;
        padding: 10px 0;
        /* text-align: center; */
        text-decoration: none;
        font-size: calc(2vw);
    }
`;

export default function NavBar() {
    return (
        <StyledNavBar>
            <StyledNavBarUl>
                <StyledNavBarLi>
                    <StyledNavBarLink to="/">Home</StyledNavBarLink>
                </StyledNavBarLi>
                <StyledNavBarLi>
                    <StyledNavBarLink to="/about">About</StyledNavBarLink>
                </StyledNavBarLi>
                <StyledNavBarLi>
                    <StyledNavBarLink to="/education">Education</StyledNavBarLink>
                </StyledNavBarLi>
                <StyledNavBarLi>
                    <StyledNavBarLink to="/experience">Experience</StyledNavBarLink>
                </StyledNavBarLi>
                <StyledNavBarLi>
                    <StyledNavBarLink to="/employment">Employment</StyledNavBarLink>
                </StyledNavBarLi>
                <StyledNavBarLi>
                    <StyledNavBarLink to="/skill">Skills</StyledNavBarLink>
                </StyledNavBarLi>
                <StyledNavBarLi>
                    <StyledNavBarLink to="/project">Projects</StyledNavBarLink>
                </StyledNavBarLi>
            </StyledNavBarUl>
        </StyledNavBar>
    );
}