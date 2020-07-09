import styled from "styled-components"
import './Corners'
import ReactTooltip from "react-tooltip";
import "../src/tooltip.module.css"

const Container = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 93vw;
        height: 10vh;
        @media (max-width: 510px) {
            flex-direction: column;
            height: 12vh;
  }
    `;

const Items = styled.p`
        font-size: 16px;
        color: #d6d6d6;
        font-weight: 500;
`;

/*const Tip = styled.ReactTooltip`
        font-size: 20px !important;
        pointer-events: auto !important;
    &:hover {
        visibility: visible !important;
        opacity: 1 !important;
 }
`;*/

export default function Down() {

    return (
        <>
            <Container /*style={container}*/>
                <a href="https://the-blog.vercel.app" style={{ textDecoration: 'none' }}><Items>Blog</Items></a>
                <a href="mailto:alessandrowirawan@gmail.com" style={{ textDecoration: 'none' }}><Items data-tip='alessandrowirawan@gmail.com'>Contact</Items></a>
                <ReactTooltip className="email" type="light" effect='solid' />
            </Container>
        </>
    )
}