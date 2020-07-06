import styled from "styled-components"
import { items, container } from './Corners'

/*const Container = styled.div`
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between:,
        alignItems: "center",
        width: "100vh",
        height: "10vh"
    `;

const Items = styled.p`
        fontSize: "16px",
        color: "#f7f7f7",
        fontWeight: "300"
    `;*/

export default function Up() {

    return (
        <div style={container}>

            <p style={items}>Alessandro Raphael Wirawan</p>



            <p style={items}>Hobbyist Software Engineer</p>
        </div>
    )
}
