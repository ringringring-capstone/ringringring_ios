import styled from "styled-components";
import palette from "../../styles/colorPalette";
import ReuseText from "../ReuseText";
import Phone from "../../assets/image/img_phone.png";

const CallHistoryInfo = ({callTime}) => {
    return (
        <Container>
            <CallTimeContainer>
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
            <CallHistorySave>
                <CallHistoryBtn>
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
                    fontsize={16}
                    fontfamily={"IBMPlexSans-Regular"}
                    color={palette.black}
                    style={{marginTop: 20, textAlign: "center"}}/>
            </NoticeTextContainer>
        </Container>
    );
};
const Container = styled.View`
    display: flex;
`;
const CallTimeContainer = styled.View`
    width: 87%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 25px 18px 8px 18px;
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
export default CallHistoryInfo;