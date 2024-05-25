import styled from "styled-components";
import palette from "../../styles/colorPalette";
import ReuseText from "../ReuseText";
import Success from "../../assets/icon/missionchallenge/ic_success.png";

const MissionListBox = () => {
    const MissionList = [
        {
            id: 1,
            mission: "정확한 시간을 이야기 하기",
            success: true,
        },
        {
            id: 2,
            mission: "메뉴 주문 하기",
            success: true,
        },
        {
            id: 3,
            mission: "인원 수 말하기",
            success: false,
        },
    ];

    return (
        <Container>
            <Header>
                <ReuseText
                    text={"미션 목록"}
                    type={"more"}
                    fontsize={"15px"}
                    fontfamily={"IBMPlexSans-Bold"}
                    color={palette.black}
                    style={{marginLeft: 60}}/>
                <ReuseText
                    text={"성공 여부"}
                    type={"more"}
                    fontsize={"15px"}
                    fontfamily={"IBMPlexSans-Bold"}
                    color={palette.black}
                    style={{marginRight: 10}}/>
            </Header>
            <Body>
                {MissionList.map((item) => (
                    <MissionItem key={item.id}>
                        <ReuseText
                        text={item.mission}
                        type={"more"}
                        fontsize={"17px"}
                        fontfamily={"IBMPlexSans-Regular"}
                        color={palette.black}/>
                        {item.success && <SeccessIcon source={Success}/>}
                    </MissionItem>
                ))}
            </Body>
            <CallHistorySave>
                <CallHistoryBtn>
                    <CallHistoryText>통화내역 저장</CallHistoryText>
                </CallHistoryBtn>
            </CallHistorySave>
        </Container>
    );
};
const Container = styled.View`
    background-color: ${palette.white};
    border-radius: 20px;
    shadow-color: ${palette.black};
    shadow-opacity: 0.1;
    shadow-offset: 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    margin: 0 5px;
`;
const Header = styled.View`
    display: flex;
    justify-content: space-between;
    width: 95%;
    flex-direction: row;
    border-bottom-width: 1px;
    border-color: ${palette.sub};
    padding-bottom: 8px;
`;
const Body = styled.View`
    width: 95%;
`;
const MissionItem = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 15px;
`;
const SeccessIcon = styled.Image`
   width: 26px;
   height: 26px;
   margin-right: 25px;
`;
const CallHistorySave = styled.View`
    width: 100%;
    display: flex;
    align-items: flex-end;
    margin-top: 40px;
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
export default MissionListBox;