import './_app.js'
import styled, { keyframes } from "styled-components"
import Up from '../components/Up'
import Down from '../components/Down'
import GlobalStyle from "../src/GlobalStyle"
import fadeIn, { fadeInUp } from 'react-animations/lib/fade-in'
import Head from "next/head"

const bounceAnimation = keyframes`${fadeInUp}`;

const Container = styled.div`
width: 100vw;
height: 95vh;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
align-content: center;
@media (max-width: 510px) {
    height: 75vh;
  }
`;

const Hi = styled.h1`
  font-size: 30vh;
  font-weight: 900;
  align-items: center;
  color: #ffffff;
  align-items: center;
  animation: 1s ${bounceAnimation};
`;

export default function Home() {

  return (
    <>
      <Head><link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" /></Head>
      <Container /*style={{
        width: "100vw",
        height: "95vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center"
      }}*/>
        <Up />
        <Hi>Hi.</Hi>
        <Down />
      </Container>
      <GlobalStyle />
    </>
  )
}

