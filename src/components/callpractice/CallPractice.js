import { useState } from "react";
import { SafeAreaView } from "react-native";
import styled from "styled-components";
import palette from "../../styles/colorPalette";
import CallEndBtn from "./CallEndBtn";
import CallInfo from "./CallInfo";
import CallTopic from "./CallTopic";
import ReuseText from "../ReuseText";
import TalkingBtn from "./TalkingBtn";
import NoticeBox from "./NoticeBox";

const CallPractice = () => {
    const name = "길동 대리님";
    const topic = "직장 상사와 업무 대화 나누기"
    const [isLoading, setIsLoadig] = useState(true);
    const [isClick, setIsClick] = useState(false);

    return (
        <Container>
            <CallInfo 
                name={name}
                isLoading={isLoading}
                setIsLoadig={setIsLoadig}/>
            <CallTopic topic={topic}/>
            <Body isLoading={isLoading}>
                <TalkingBtn/>
                <ReuseText
                    text={"말하기"}
                    type={"more"}
                    fontsize={"16px"}
                    fontfamily={"IBMPlexSans-Regular"}
                    color={palette.white}/>
            </Body>
            <Footer>
                <CallEndBtn setIsClick={setIsClick}/>
                <ReuseText
                    text={"종료"}
                    type={"more"}
                    fontsize={"16px"}
                    fontfamily={"IBMPlexSans-Regular"}
                    color={palette.white}/>
            </Footer>
            {isClick &&
                <NoticeBox 
                    setIsClick={setIsClick}
                    text={"통화를 종료 하시겠습니까?"}/>
            }
        </Container>
    );
};
const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: #888888;
    display: flex;
    align-items: center;
`;
const Body = styled.View`
    opacity: ${(props) => (props.isLoading ? 0 : 1)};
    align-items: center;
    margin: 150px 0 160px 0;
`;
const Footer = styled.View`
    display: flex;
    align-items: center;
`;
export default CallPractice;