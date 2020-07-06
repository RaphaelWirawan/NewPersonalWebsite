import './_app.js'
import styled from "styled-components"
import Up from '../components/home/Up'
import Down from '../components/home/Down'


/*const Container = styled.div`
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
`;*/


export default function Home() {

  return (
    <>
      <div style={{
        width: "90vw",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <Up />
        <h1 style={{
          fontSize: "24vh",
          fontWeight: "900",
          alignItems: "center",
          color: "#ffffff"
        }}>Hi.</h1>
        <Down />
      </div>
    </>
  )
}

