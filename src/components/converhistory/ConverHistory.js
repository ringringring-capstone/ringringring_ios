import { SafeAreaView } from "react-native";
import styled from "styled-components";
import palette from "../../styles/colorPalette";
import GoBackBtn from "../GoBackBtn";
import ConverHistoryList from "../converhistory/ConverHistoryList";

const ConverHistory = () => {
    return (
        <Container>
            <Header>
                <GoBackBtn/>
            </Header>
            <Body>
                <ConverHistoryList/>
            </Body>
        </Container>
    );
};
const Container = styled(SafeAreaView)`
    flex: 1;
    width: 100%;
    background-color: ${palette.white};
`;
const Header = styled.View`
    flex: 1;
    width: 100%;
    align-items: left;
    justify-content: center;
    padding-left: 28px;
`;
const Body = styled.View`
    flex: 10;
    width: 100%;
`;
export default ConverHistory;