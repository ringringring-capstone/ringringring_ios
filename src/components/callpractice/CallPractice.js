import styled from "styled-components";
import palette from "../../styles/colorPalette";
import { SafeAreaView } from "react-native";
import CallEndBtn from "./CallEndBtn";

const CallPractice = () => {
    return (
        <Container>
            <CallEndBtn/>
        </Container>
    );
};
const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: #888888;
    display: flex;
    align-items: center;
`;
export default CallPractice;