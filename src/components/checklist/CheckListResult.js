import styled from "styled-components";
import { SafeAreaView, ScrollView } from "react-native";

import palette from "../../styles/colorPalette";
import Button from "../Button";
import GoBackBtn from "../GoBackBtn";
import ReuseText from "../ReuseText";
import SeverityLevel from "./SeverityLevel";
import StatusDesc from "./StatusDesc";
import DailyPractice from "./DailyPractice";
import AllUsers from "./AllUsers";

const CheckListResult = ({route}) => {
    const { score } = route.params;
    const username = "홍길동";

    return (
        <Container>
            <Header>
                <GoBackBtn/>
            </Header>
            <Body>
                <ReuseText 
                    text={`${username} 님은 현재 ..`} 
                    type={"subtitle"}
                    style={{marginTop: 15, marginLeft: 28}}/>
                <SeverityLevel score={score}/>
                <MenuContainer>
                    <ReuseText 
                        text={"🧐 이런 적 있지 않았나요?"} 
                        type={"subtitle"}
                        style={{marginTop: 15, marginLeft: 28}}/>
                    <Line/>
                </MenuContainer>
                <StatusDesc/>
                <ReuseText 
                    text={`👥 ${username} 님과 비슷한 사람들은?`} 
                    type={"subtitle"}
                    style={{marginTop: 15, marginLeft: 28}}/>
                <ReuseText
                    text={"전체 이용자 중에서 이만큼 있어요!"}
                    type={"content"}
                    style={{marginTop: 10, marginLeft: 28}}/>
                <AllUsers score={score}/>
                <ReuseText
                    text={"하루 평균 이정도 연습하고 있어요!"}
                    type={"content"}
                    style={{marginTop: 15, marginLeft: 28}}/>
                <DailyPractice/>
            </Body>
            <Footer>
                <Button
                    text={"닫기"}
                    backgroundColor={palette.main}
                    borderColor={"none"}
                    fontColor={palette.white}
                    movePage={"checklist"}
                />
            </Footer>
        </Container>
    );
};
const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${palette.white};
    display: flex;
    align-items: center;
`;
const Header = styled.View`
    flex: 1;
    width: 100%;
    align-items: left;
    justify-content: center;
    padding-left: 28px;
`;
const Body = styled(ScrollView)`
    flex: 10;
    width: 100%;
`;
const MenuContainer = styled.View`
    display: flex;
    flex-direction: row;
`;
const Line = styled.View`
    display: flex;
    width: 29%;
    height: 0.6px;
    background-color: ${palette.black};
    margin: 29px 0 0 13px;
`;
const SubTitle = styled.Text`
    font-size: 18px;
    font-family: "IBMPlexSans-Bold";
    margin: 8px 0 0 28px;
`;
const Footer = styled(SafeAreaView)`
    flex: 1;
    width: 91%;
    height: 400px;
    margin: 20px 20px 0 20px;
    align-items: center;
    background-color: ${palette.white};
`;
export default CheckListResult;