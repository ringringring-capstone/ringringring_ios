import styled from "styled-components";
import MenuTitle from "./MenuTitle";

const InfoBox = () => {
    return (
        <Container>
            <MenuTitle text={"나의 연습량"} type={"sub"}/>
        </Container>
    );
};
const Container = styled.View`
    flex: 1;
`;
export default InfoBox;