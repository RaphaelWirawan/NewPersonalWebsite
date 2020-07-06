import styled from "styled-components"
import { items, container, topLeftItem } from './Corners'

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
            <div style={topLeftItem}>
                <p style={{ transform: "rotate(-90deg)", flex: "0" }}>Alessandro Raphael Wirawan</p>
                <p style={{ flex: "1" }}>Hobbyist Software Engineer</p>
            </div>

            <p style={items}>About</p>
        </div>
    )
}
