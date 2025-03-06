import { Link } from "react-router";
import styled from "styled-components";

const StyledFooter = styled.footer`
    flex:0;
    background-color: #f4f4f4;
    color: black;
    text-align: center;
    padding: 10px;
`;



export default function Footer() {
    return (
        <StyledFooter>
            <p>All Rights Reserved by Yiyun Sun.
                <Link to="#">Credits</Link>
                &#169; 2025
            </p>
        </StyledFooter>
    )
}