import { SafeAreaView } from "react-native";
import styled from "styled-components";

const MenuTitle = ({text}) => {
    return (
        <Container>
            <TitleText>{text}</TitleText>
        </Container>
    );
};
const Container = styled(SafeAreaView)`
    margin-top: 15px;
    margin-left: 28px;
`;
const TitleText = styled.Text`
    font-size: 26px;
    font-family: "IBMPlexSans-Bold";
`;
export default MenuTitle;