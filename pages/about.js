import './_app.js';
import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
`;

const Top = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    /*align-items: center;*/
    width: 85vw;
    height: 100vh;
    text-align: left;
`;

const About = styled.h2`
    color: #fafafa;
    font-weight: 500;
    font-size: 45px;
`;

const Details = styled.p`
    margin-top: 15px;
    color: #cccccc;
    max-width: 570px;
    font-weight: 400;
    font-size: 20px;
`;

const Highlight = styled.mark`
    background-color: #3b3b3b;
    color: #cccccc;
`;

const Links = styled.p`
    margin-top: 25px;
    color: #ededed;
`;

const A = styled.a`
    color: #ededed;
    text-decoration: none;
`;

export default function about() {
    return (

        <Container>
            <Top>
                <About>About Me.</About>
                <Details>I'm a 17 years old hobbyist software engineer based in <Highlight>Jakarta, ID</Highlight>. I have an undying passion for programing, and anything tech-related. </Details>
                <Links>
                    <A href="https:/github.com/raphaelwirawan">Github</A> | <A href="https:/instagram/raphaelwirawan">Instagram</A> | <A href="https:/linkedin/in/raphaelwirawan">LinkedIn</A>
                </Links>
            </Top>
        </Container>
    )
}
