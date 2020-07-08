import './_app.js';
import styled from "styled-components"

const Container = styled.div`
    /*width: 100vw;*/
    height: 100vh;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
`;


const Containermid = styled.div`
    /*width: 100vw;*/
    height: 100vh;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
`;

const ContainerTop = styled.div`
    /*width: 100vw;*/
    height: 100vh;
    max-width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    border-bottom: 2px double #3f3f3f;
    @media (max-width: 700px) {
        flex-direction: column;
        
    }
`;

const Aboutme = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    /*align-items: center;*/
    width: 70vw;
    height: 50vh;
    text-align: left;
`;

const Secondlayer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    width: 85vw;
    height: 100vh;
    text-align: center;
`;

const Heading = styled.h2`
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

const Face = styled.img`
    max-width: 200px;
    border-radius: 50%;
    margin-right: 40px;
    @media (max-width: 700px) {
        margin: 0;
    }
`;

export default function about() {
    return (
        <>
            <ContainerTop>
                <Face src="/SM Face3 Zoom.jpeg" />
                <Aboutme>
                    <Heading>About Me.</Heading>
                    <Details>I'm a 17 years old hobbyist software engineer based in <Highlight>Jakarta, ID</Highlight>. I have an undying passion for programing, and anything tech-related.</Details>
                    <Links>
                        <A href="https:/github.com/raphaelwirawan">Github</A> | <A href="https:/instagram/raphaelwirawan">Instagram</A> | <A href="https:/linkedin/in/raphaelwirawan">LinkedIn</A>
                    </Links>
                </Aboutme>
            </ContainerTop>
            <Containermid>
                <Secondlayer>
                    <Heading>More About Me.</Heading>
                    <Details>Other than programming, I also enjoy photography and cinematography.</Details>
                </Secondlayer>
            </Containermid>
        </>
    )
}
