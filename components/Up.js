import styled from "styled-components"
import { items, container } from './Corners'
import Link from "next/link"

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

//const Items = styled.p`
//        fontSize: "16px",
//        color: "#f7f7f7",
//        fontWeight: "300"
//    `; 

export default function Up() {

    return (
        <Container /*style={container}*/>
            <p style={items}>
                <Link href="./about">
                    <a style={{ textDecoration: 'none', color: "#d6d6d6" }}>Alessandro Raphael Wirawan</a>
                </Link>
            </p>
            <p style={items}>Hobbyist Software Engineer</p>
        </Container>
    )
}
