import { SafeAreaView, Text } from "react-native";
import styled from "styled-components";
import BottomMenu from "../components/BottomMenu";

const HomeScreen = () => {
    return (
        <Container>
            <Header>

            </Header>
            <Body>

            </Body>
        </Container>
    );
};
const Container = styled(SafeAreaView)`
    flex: 1;
    position: relative;
    /* background-color: yellowgreen; */
`;
const Header = styled.View`
    flex: 2.5;
`;
const Body = styled.View`
    flex: 9;
    /* background-color: blanchedalmond; */
`;
export default HomeScreen;