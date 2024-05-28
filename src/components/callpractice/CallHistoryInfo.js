import { useState, useEffect } from "react";
import styled from "styled-components";
import palette from "../../styles/colorPalette";

import { setStorage, getStorage } from "../../librarys/storage";
import { ToastMessage } from "../ToastMessage";

import ReuseText from "../ReuseText";
import Phone from "../../assets/image/img_phone.png";
import MissionListBox from "./MissionListBox";

const CallHistoryInfo = ({time, callType}) => {
    const [name, setName] = useState("");

    const CallConversation = [
        {
            title: "W 환불 전화 연습2",
            content: `안녕하세요.
네 안녕하세요. 
자전거 환불 관련해서 전화를 드렸습니다.
알겠습니다. 성함을 말씀해주시겠어요? 
홍길동입니다.
네 홍길동님, 저희 제품을 언제 구매해주셨나요?
            `
        }
    ];

    // 대화 내용 저장 / 일단 임의로 넣어둠
    const handleCallHistorySave = async () => {
        try {
            let existingHistory = await getStorage("callHistory");
            existingHistory = existingHistory ? existingHistory : [];
            existingHistory.push(...CallConversation);
            console.log(existingHistory);
            await setStorage("callHistory", existingHistory);
            ToastMessage("저장 되었습니다.");
        } catch (error) {
            ToastMessage("문제가 발생했습니다. 다시 시도해 주세요.");
        }
    }

    useEffect(() => {
        const getName = async () => {
            const storageName = await getStorage("username");
            setName(storageName);
        };
        getName();
    }, []);

    const count = 2;

    const callTime = 
        `${String(Math.floor(time / 60)).padStart(2, "0")}:${String(time % 60).padStart(2, "0")}`;

    return (
        <Container>
            <CallTimeContainer type={callType}>
                <ReuseText
                    text={"⏱️ 통화시간"}
                    type={"content"}/>
                <ReuseText
                    text={callTime}
                    type={"more"}
                    fontsize={"16px"}
                    fontfamily={"IBMPlexSans-Regular"}
                    color={palette.black}/>
            </CallTimeContainer>
            {(callType === "practice") ? (
                <>
                    <CallHistorySave>
                        <CallHistoryBtn onPress={handleCallHistorySave}>
                            <CallHistoryText>통화내역 저장</CallHistoryText>
                        </CallHistoryBtn>
                    </CallHistorySave>
                    <NoticeTextContainer>
                        <PhoneImg source={Phone}/>
                        <ReuseText
                            text={"통화가 성공적으로 종료 되었습니다."}
                            type={"content"}
                            style={{marginTop: 25}}/>
                        <ReuseText
                            text={`다시 연습을 하고 싶다면 \n아래 ‘한번 더 연습하기’ 버튼을 눌러주세요.`}
                            type={"more"}
                            fontsize={"16px"}
                            fontfamily={"IBMPlexSans-Regular"}
                            color={palette.black}
                            style={{marginTop: 20, textAlign: "center"}}/>
                    </NoticeTextContainer>
                </>
            ) : (
                <>
                    <MissionCountText>
                        <ReuseText
                            text={`${name} 님,`}
                            type={"subtitle"}/>
                        <MissionCountSubText>
                            <ReuseText
                                text={`${count}개`}
                                type={"more"}
                                fontsize={"20px"}
                                fontfamily={"IBMPlexSans-Bold"}
                                color={palette.sub}/>
                            <ReuseText
                                text={`의 기준을 충족했어요!`}
                                type={"subtitle"}/>
                        </MissionCountSubText>
                    </MissionCountText>
                    <MissionListBox/>
                </>
            )}
        </Container>
    );
};
const Container = styled.View`
    display: flex;
`;
const CallTimeContainer = styled.View`
    width: ${(props) => (props.type === "practice") ? "91%" : "auto"};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 25px 18px 8px 18px;
    margin: ${(props) => (props.type === "practice") ? "0" : "0 9px"};
    border-bottom-width: 1px;
    border-color: ${palette.sub};
`;
const CallHistorySave = styled.View`
    display: flex;
    align-items: flex-end;
    margin-top: 11px;
`;
const CallHistoryBtn = styled.Pressable`
    border-radius: 20px;
    border: 1px solid ${palette.main};
    padding: 3px 12px;
`;
const CallHistoryText = styled.Text`
    font-size: 15px;
    font-family: "IBMPlexSans-Medium";
    color: ${palette.main};
`;
const NoticeTextContainer = styled.View`
    display: flex;
    align-items: center;
    margin-top: 60px;
`;
const PhoneImg = styled.Image`
    width: 92px;
    height: 92px;
`;
const MissionCountText = styled.View`
    margin: 20px 0 20px 18px;
`;
const MissionCountSubText = styled.View`
    display: flex;
    flex-direction: row;
`;
export default CallHistoryInfo;