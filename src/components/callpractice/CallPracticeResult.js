import styled from "styled-components";
import palette from "../../styles/colorPalette";
import { SafeAreaView, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ReuseText from "../ReuseText";
import Button from "../Button";
import CallHistoryInfo from "./CallHistoryInfo";

const CallPracticeResult = ({ route }) => {
    const { time, callType } = route.params;
    const callTime = 
        `${String(Math.floor(time / 60)).padStart(2, "0")}:${String(time % 60).padStart(2, "0")}`;

    return (
        <Container
            colors={["#FFBA52", "#F88418"]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <SubContainer>
                <Header>
                    <ReuseText
                        text={(callType === "practice") ? "통화 연습 결과" : "미션 결과"}
                        type={"more"}
                        fontsize={"22px"}
                        fontfamily={"IBMPlexSans-Bold"}
                        color={palette.white}/>
                    <ReuseText
                        text={"미용실 예약 전화"}
                        type={"more"}
                        fontsize={"20px"}
                        fontfamily={"IBMPlexSans-Regular"}
                        color={palette.white}/>
                </Header>
                <Body>
                    <CallHistoryInfo 
                        callTime={callTime}
                        callType={callType}/>
                </Body>
            </SubContainer>
            <Bottom>
                <Button
                    text={"홈으로 가기"}
                    backgroundColor={palette.main}
                    borderColor={"none"}
                    fontColor={palette.white}
                    event={"movePage"}
                    movePage={"main"}/>
                <Button
                    text={"한번 더 연습하기"}
                    backgroundColor={palette.whtie}
                    borderColor={palette.main}
                    fontColor={palette.main}
                    event={"movePage"}
                    movePage={"callpractice"}
                    props={(callType === "practice") ? "practice" : "mission"}/>
            </Bottom>
        </Container>
    );
};
const Container = styled(LinearGradient)`
    flex: 1;
`;
const SubContainer = styled(SafeAreaView)`
    flex: 1;
`;
const Header = styled.View`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Body = styled.View`
    flex: 3;
    align-items: center;
    background-color: ${palette.white};
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    shadow-color: ${palette.black};
    shadow-opacity: 0.2;
    shadow-offset: 2px -3px;
`;
const Bottom = styled.View`
    flex: 0.25;
    padding: 0 20px;
    background-color: ${palette.white};
    display: flex;
    align-items: center;
`;
export default CallPracticeResult;