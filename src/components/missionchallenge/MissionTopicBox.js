import styled from "styled-components";
import palette from "../../styles/colorPalette";

import MissionExam from "../../assets/image/img_missionTopic.png";

const MissionTopicBox = () => {
    return (
        <Container>
            <ShadowBox/>
            <MainBox>
                <ExampleImg source={MissionExam}/>
                <NoticeText>도전할 미션 주제를 뽑아주세요.</NoticeText>
            </MainBox>
        </Container>
    );
};
const Container = styled.View`
    margin-top: 40px;
`;
const ShadowBox = styled.View`
    position: absolute;
    width: 83%;
    height: 70%;
    top: 25;
    left: 40;
    transform: rotate(4deg);
    border-radius: 20px;
    background-color: #D4D9D4;
    z-index: 1;
`;
const MainBox = styled.View`
    background-color: ${palette.white};
    border-radius: 20px;
    border: 1px solid #B0B0B0;
    display: flex;
    align-items: center;
    padding: 30px 20px;
    margin: 40px 30px;
    z-index: 2;
`;
const ExampleImg = styled.Image`
    width: 98px;
    height: 98px;
    margin-bottom: 5px;
`;
const NoticeText = styled.Text`
    font-size: 20px;
    font-family: "IBMPlexSans-Light";
    margin-top: 15px;
    margin-left: 28px;
`;
export default MissionTopicBox;