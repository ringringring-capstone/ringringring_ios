import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import styled from "styled-components";
import palette from "../../styles/colorPalette";
import { LinearGradient } from "expo-linear-gradient";

import { saveCallTime  } from "../../librarys/statistics-api";
import { getStorage } from "../../librarys/storage";

import ReuseText from "../ReuseText";
import Button from "../Button";
import CallHistoryInfo from "./CallHistoryInfo";

const CallPracticeResult = ({ route }) => {
    const { time, callType } = route.params;
    const Navigation = useNavigation();
    const [userId, setUserId] = useState("");
    const [token, setToken] = useState("");

    const convertToMinutes = (seconds) => {
        return Math.floor(seconds / 60);
    };

    useEffect(() => {
        const getUserInfo = async () => {
            const storageUserId = await getStorage("id");
            const storageToken = await getStorage("token");
            setUserId(storageUserId);
            setToken(storageToken);
        };
        getUserInfo();
    }, []);

    const handleSaveTime = async () => {
        if (!userId) return;
        const timeInMinutes = convertToMinutes(time);
        saveCallTime(userId, timeInMinutes, token)
            .then(response => {
                if(response) {
                    console.log(response);
                }
            })
            .catch (error => {
                console.log("에러: ", error);
            })
    }

    const movePage = () => {
        if (userId)
            handleSaveTime();
        Navigation.navigate("home");
    }

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
                        time={time}
                        callType={callType}/>
                </Body>
            </SubContainer>
            <Bottom>
                <Button
                    text={"홈으로 가기"}
                    backgroundColor={palette.main}
                    borderColor={"none"}
                    fontColor={palette.white}
                    event={movePage}/>
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