import styled from "styled-components";
import { SafeAreaView, ScrollView } from "react-native";
import palette from "../../styles/colorPalette";
import Button from "../Button";
import GoBackBtn from "../GoBackBtn";
import MenuTitle from "../MenuTitle";
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
                <MenuTitle text={`${username} 님은 현재 ..`} type={"sub"}/>
                <SeverityLevel score={score}/>
                <MenuTitle text={"🧐 이런 적 있지 않았나요?"} type={"sub"}/>
                <StatusDesc/>
                <MenuTitle text={`👥 ${username} 님과 비슷한 사람들은?`} type={"sub"}/>
                <SubTitle>전체 이용자 중에서 이만큼 있어요!</SubTitle>
                <AllUsers score={score}/>
                <SubTitle>하루 평균 이정도 연습하고 있어요!</SubTitle>
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
const SeverityLeveContainer = styled.View`
    width: 100%;
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