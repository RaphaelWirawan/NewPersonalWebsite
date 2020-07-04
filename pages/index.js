import Head from 'next/head'
import GlobalStyle from '../src/GlobalStyle'
import styled from "styled-components";
import Up from '../components/home/Up'
import Down from '../components/home/Down'


const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`;

const Hi = styled.h1`
  font-size: 140px;
  font-weight: 900;
  align-items: center;
  color: #fcfcfc;
`;


export default function Home() {

  return (
    <>
      <Container>
        <Up />
        <Hi>Hi.</Hi>
        <Down />
      </Container>
      <GlobalStyle />
    </>
  )
}

