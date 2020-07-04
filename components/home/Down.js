import styled from "styled-components"


const Container = styled.div`
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
`;


export default function Down() {

    return (
        <Container>
            <Items>Blog</Items>
            <Items>Contact</Items>
        </Container>
    )
}