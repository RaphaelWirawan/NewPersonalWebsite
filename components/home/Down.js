import styled from "styled-components"
import './Corners'
import { items, container } from "./Corners"

/*const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100vh;
height: 10vh;
`;

const Items = styled.p`
font-size: 16px;
color: #f7f7f7;
font-weight: 300;
`;*/


export default function Down() {

    return (
        <div style={container}>
            <a href="the-blog.vercel.app" style={{ textDecoration: 'none' }}><p style={items}>Blog</p></a>
            <p style={items}>Contact</p>
        </div>
    )
}