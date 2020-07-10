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
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    @media (max-width: 1070px) {
        justify-content: space-evenly;
    }
    @media (max-width: 880px) {
        flex-direction: column;
    }
    @media (max-width: 450px) {
        height: 110vh;
    }
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
    @media (max-width: 880px) {
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

const Skills = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    width: 45vw;
    height: 100vh;
    text-align: center;
    @media (max-width: 450px) {
        margin-bottom: 45px;
        height: 50vh
    }
`;

const MoreAboutMe = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    width: 45vw;
    height: 100vh;
    text-align: center;
    @media (max-width: 650px) {
        width: 55vw;
    }
    @media (max-width: 500px) {
        width: 60vw;
        height: 60vh;
        margin-top: 20px;
    }
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
    @media (max-width: 880px) {
        margin: 0;
    }
`;

const SkillsContainer = styled.div`
    width: 450px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    @media (max-width: 1070px) {
        width: 440px
    }
    @media (max-width: 450px) {
        flex-direction: column;
    }
`;

const IndividualContainers = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    max-width: 250px;
`;

const IndividualContainersAdobe = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    max-width: 250px;
    @media (max-width: 450px) {
        margin-top: 10px;
    }
`;

const ResponsiveContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    width: 235px;
`;

export default function about() {
    return (
        <>
            <ContainerTop>
                <Face src="/SM Face3 Zoom.jpeg" />
                <Aboutme>
                    <Heading>About Me.</Heading>
                    <Details>I'm a 17 years old hobbyist software engineer based in <Highlight>Jakarta, ID</Highlight>.
                    I have an undying passion for programing, and anything tech-related.</Details>
                    <Links>
                        <A href="https://github.com/raphaelwirawan">Github</A> | <A href="https://instagram.com/raphaelwirawan">Instagram</A> | <A href="https://linkedin.com/in/raphaelwirawan">LinkedIn</A>
                    </Links>
                </Aboutme>
            </ContainerTop>
            <Containermid>
                <MoreAboutMe>
                    <Heading>More About Me.</Heading>
                    <Details>I first started to fiddle with programs in the age of 12. From then on, I kept on learning about all that interests me.
                    Other than programing, I enjoy photography and cinematography, because it allows me to be more creative in so many ways.
                     I especially enjoy cinematography because when done right, could be very entertaining. </Details>
                </MoreAboutMe>
                <Skills>
                    <Heading>Skills.</Heading>
                    <SkillsContainer>
                        <ResponsiveContainer>
                            <IndividualContainers>
                                <Details>HTML/CSS</Details>
                                <Details>Git</Details>
                                <Details>Python</Details>
                            </IndividualContainers>
                            <IndividualContainers>
                                <Details>JavaScript</Details>
                                <Details>React JS</Details>
                                <Details>Next JS</Details>
                            </IndividualContainers>
                        </ResponsiveContainer>
                        <IndividualContainersAdobe>
                            <Details>Adobe Premiere Pro</Details>
                            <Details>Adobe After Effects</Details>
                            <Details>Adobe Photoshop</Details>
                        </IndividualContainersAdobe>
                    </SkillsContainer>
                </Skills>
            </Containermid>
        </>
    )
}
