import styled from "styled-components";
import palette from "../../styles/colorPalette";
import { SafeAreaView } from "react-native";
import CallEndBtn from "./CallEndBtn";
import CallInfo from "./CallInfo";
import CallTopic from "./CallTopic";
import ReuseText from "../ReuseText";

const CallPractice = () => {
    const name = "길동 대리님";
    const topic = "직장 상사와 업무 대화 나누기"
    return (
        <Container>
            <CallInfo name={name}/>
            <CallTopic topic={topic}/>
            <Footer>
                <CallEndBtn/>
                <ReuseText
                    text={"종료"}
                    type={"more"}
                    fontsize={"16px"}
                    fontfamily={"IBMPlexSans-Regular"}
                    color={palette.white}/>
            </Footer>
        </Container>
    );
};
const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: #888888;
    display: flex;
    align-items: center;
`;
const Footer = styled.View`
    width: 100%;
    height: 100%;
    /* flex: 2; */
    display: flex;
    align-items: center;
    /* justify-content: center; */
`;
export default CallPractice;