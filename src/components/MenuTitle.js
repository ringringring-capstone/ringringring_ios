import { SafeAreaView } from "react-native";
import styled from "styled-components";

const MenuTitle = ({text, type}) => {
    return (
        <Container>
            <TitleText type={type}>{text}</TitleText>
        </Container>
    );
};
const Container = styled(SafeAreaView)`
    margin-top: 15px;
    margin-left: 28px;
`;
const TitleText = styled.Text`
    font-size: ${(props) => (props.type === "main") ? "24px" : "20px"};
    font-family: "IBMPlexSans-Bold";
`;
export default MenuTitle;