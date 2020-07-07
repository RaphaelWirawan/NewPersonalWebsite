import './_app.js'
import styled from "styled-components"
import Up from '../components/Up'
import Down from '../components/Down'


const Container = styled.div`
width: 100vw;
height: 95vh;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
@media (max-width: 510px) {
    height: 75vh;
  }
`;
/*
const Hi = styled.h1`
  font-size: 140px;
  font-weight: 900;
  align-items: center;
  color: #fcfcfc;
`;*/

export default function Home() {

  return (
    <>
      <Container /*style={{
        width: "100vw",
        height: "95vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center"
      }}*/>
        <Up />
        <h1 style={{
          fontSize: "24vh",
          fontWeight: "900",
          alignItems: "center",
          color: "#ffffff"
        }}>Hi.</h1>
        <Down />
      </Container>
    </>
  )
}

