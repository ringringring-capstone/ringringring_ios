import styled from "styled-components";
import { SafeAreaView } from "react-native";
import palette from "../../styles/colorPalette";
import GoBackBtn from "../GoBackBtn";
import Button from "../Button";
import MenuTitle from "../MenuTitle";
import MissionTopicBox from "./MissionTopicBox";

const PickingMission = () => {
    return (
        <Container>
            <Header>
                <GoBackBtn/>
            </Header>
            <Body>
                <MenuTitle
                    text="전화 미션"
                    type="main"/>
                <Subtitle>다양한 상황을 겪으며 {`\n`}한 층 더 성장할 수 있어요.</Subtitle>
                <MissionTopicBox/>
            </Body>
            <Footer>
                <Button
                    text="미션 시작하기"
                    backgroundColor={palette.main}
                    borderColor="none"
                    fontColor={palette.white}/>
                <Button
                    text="주제 뽑기"
                    backgroundColor={palette.white}
                    borderColor={palette.main}
                    fontColor={palette.main}/>
            </Footer>
        </Container>
    );
};
const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${palette.white};
`;
const Header = styled.View`
    flex: 1;
    width: 100%;
    align-items: left;
    justify-content: center;
    padding-left: 28px;
`;
const Body = styled.View`
    flex: 9;
    width: 100%;
`;
const Subtitle = styled.Text`
    font-size: 20px;
    font-family: "IBMPlexSans-Light";
    margin-top: 15px;
    margin-left: 28px;
`;
const Footer = styled(SafeAreaView)`
    flex: 2;
    width: 91%;
    height: 400px;
    margin: 20px 20px 0 20px;
    align-items: center;
    background-color: ${palette.white};
`;
export default PickingMission;