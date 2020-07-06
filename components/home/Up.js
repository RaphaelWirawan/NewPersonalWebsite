import styled from "styled-components"
import { items, container } from './Corners'

const Container = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 93vw;
        height: 10vh;
        @media (max-width: 510px) {
            flex-direction: column;
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
            <p style={items}>Alessandro Raphael Wirawan</p>
            <p style={items}>Hobbyist Software Engineer</p>
        </Container>
    )
}
