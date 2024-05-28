import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import styled from "styled-components";
import * as Speech from "expo-speech";
// import Voice from "react-native-voice";
import { deliveryAi, reservationAi,  aiCall } from "../../librarys/ai-call-api";
import { getStorage } from "../../librarys/storage";
import palette from "../../styles/colorPalette";

import CallEndBtn from "./CallEndBtn";
import CallInfo from "./CallInfo";
import CallTopic from "./CallTopic";
import ReuseText from "../ReuseText";
import TalkingBtn from "./TalkingBtn";
import NoticeBox from "./NoticeBox";

const CallPractice = ({route}) => {
    const { callType } = route.params;
    const navigation = useNavigation();
    const name = "길동 대리님";
    const topic = "직장 상사와 업무 대화 나누기";
    const talk = "안녕하세요.";

    const [isLoading, setIsLoading] = useState(true);
    const [isClick, setIsClick] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [isRecord, setIsRecord] = useState(false);
    const [text, setText] = useState("");
    const [token, setToken] = useState("");
    const [id, setId] = useState(0);
    let intervalId;

    const handleClick = (props) => {
        setIsClick(props);
    }

    useEffect(() => {
        const userInfo = async () => {
            const storageToken = await getStorage("token");
            const storageId = await getStorage("id");
            setToken(storageToken);
            setId(storageId);
        }
        userInfo();
    }, []);

    // 시작 전 3초 로딩 시간
    const startLoading = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setSeconds(0);
        }, 3000);
    };

    const handleFocus = () => {
        startLoading();
    };

    useEffect(() => {
        if (!isClick) {
            intervalId = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
        } else {
            clearInterval(intervalId);
        }
        return () => clearInterval(intervalId);
    }, [isClick]);

    const handleBlur = () => {
        clearInterval(intervalId);
    };

    useEffect(() => {
        const unsubscribeFocus = navigation.addListener('focus', handleFocus);
        const unsubscribeBlur = navigation.addListener('blur', handleBlur);

        // 컴포넌트가 마운트 해제될 때 타이머 정리
        return () => {
            unsubscribeFocus();
            unsubscribeBlur();
            clearInterval(intervalId);
        };
    }, [navigation]);

    const aiCalling = async () => {
        aiCall(id, token)
            .then(response => {
                if (response) {
                    console.log(response);
                    // speakText(response);
                }
            })
            .catch (error => {
                console.error("에러: ", error);
            })
    }

    const speakText = async (text) => {
        try {
            await Speech.speak(text, {
                language: 'ko',
            });
          console.log("tts test 성공");
        } catch (error) {
          console.error("에러:", error);
        }
    };

    return (
        <Container>
            <CallInfo 
                name={name}
                isLoading={isLoading}
                setIsLoadig={setIsLoading}
                seconds={seconds}
                setSeconds={setSeconds}/>
            <CallTopic topic={topic}/>
            <Body isLoading={isLoading}>
                <TalkingBtn setIsRecord={setIsRecord}/>
                <ReuseText
                    text={"말하기"}
                    type={"more"}
                    fontsize={"16px"}
                    fontfamily={"IBMPlexSans-Regular"}
                    color={palette.white}/>
            </Body>
            <Footer>
                <CallEndBtn handleClick={handleClick}/>
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
                    setSeconds={setSeconds}
                    text={"통화를 종료 하시겠습니까?"}
                    time={seconds}
                    callType={callType}/>
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