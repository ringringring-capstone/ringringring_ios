import styled from "styled-components";
import SubMenuTitle from "./SubMenuTitle";

const InfoBox = () => {
    return (
        <Container>
            <SubMenuTitle text={"나의 연습량"}/>
        </Container>
    );
};
const Container = styled.View`
    flex: 1;
`;
export default InfoBox;