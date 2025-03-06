import { useEffect } from "react";
import { StyledMainWrapper, StyledMainH2, StyledMainP } from "../MyStyledComponents"

export default function AboutMain() {

    useEffect(() => {
        document.title = "About | Michael MP-3";
    }, []);

    return (
        <StyledMainWrapper>
            <StyledMainH2>About</StyledMainH2>
            <StyledMainP>Hello, this is Yiyun Sun. A student at the Boston University.</StyledMainP>
            <StyledMainP>I am a senior studying Computer Science. I am passionate about technology and always eager to learn
                new things.</StyledMainP>
            <StyledMainP>I grew up in Shanghai, China, and attended my elementary school and middle school there.</StyledMainP>
            <StyledMainP>After that, I attended high school and college in the United States.</StyledMainP>
            <StyledMainP>Due to my past experiences, I am bilingual in Chinese (Mandarin) and English.</StyledMainP>
            <StyledMainP>I also learned a little bit of Spanish in high school, and a little bit of Japanese in university.
            </StyledMainP>
            <StyledMainP>I attended robotics contest when I was in high school. It always suprised me that modern technology
                is able to control machines doing amazing things and achieving amazing goals.</StyledMainP>
            <StyledMainP>I am also interested in hardware field. I like to play with Arduinos and Raspberry Pis. These opened
                the gate of IoT to me. I am also interested in developing IoT gadgets.</StyledMainP>
        </StyledMainWrapper>
    );
};