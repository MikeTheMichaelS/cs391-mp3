import { StyledMainWrapper, StyledMainH2, StyledMainP } from "../MyStyledComponents"
import selfie from "../../images/selfie.jpg"
import styled from "styled-components";
import { useEffect } from "react";

const StyledImg = styled.img`
    width: 45%;
    max-width: 750px;
    margin: 0 auto;
`;

export default function IndexMain() {

    useEffect(() => {
        document.title = "Home | Michael MP-3";
    }, []);

    return (
        <StyledMainWrapper>
            <StyledMainH2>Home</StyledMainH2>
            <StyledImg src={selfie} alt="An image of Michael" />
            <StyledMainP>Welcome to my resume website. Here you can find information about me, my education, experience,
                employment,
                skills, and projects. Feel free to navigate through the website to learn more about me.</StyledMainP>
            <StyledMainP>I am a student at Boston University. I am studying Computer Science and I am a senior.</StyledMainP>
            <StyledMainP>In my free time, I enjoy hiking, reading, and working on personal coding projects. I am passionate
                about technology and always eager to learn new things.</StyledMainP>
            <StyledMainP>Well, I don't know what to write next. So I'm gonna put some random things here.</StyledMainP>
            <StyledMainP>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi cumque sequi eveniet, delectus nostrum
                repellendus asperiores rem dolor. Nulla voluptas rem velit aspernatur alias earum, omnis in
                repudiandae nemo iusto.</StyledMainP>
            <StyledMainP>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor repudiandae pariatur quis repellat,
                nemo officiis aliquid inventore reprehenderit consequatur possimus suscipit aperiam amet? Ab
                assumenda laudantium distinctio voluptatum. Cum, explicabo?</StyledMainP>
        </StyledMainWrapper>
    )
}