import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";
import palette from "../styles/colorPalette";

import Logout from "../assets/icon/mypage/ic_logout.png";
import Logoutbutton from "../assets/icon/ic_backBtn.png";

const MyPage = () => {
    const navigation = useNavigation();

    return (
        <Container>
            <TitleText>MY 페이지</TitleText>
            <Body onPress={() => navigation.navigate("login")}>
                <LogoutIcon source={Logout}/>
                <LogoutText>로그아웃</LogoutText>
                <LogoutBtn source={Logoutbutton}/>
            </Body>
        </Container>
    );
};
const Container = styled(SafeAreaView)`
    flex: 1;
    margin-left: 29px;
`;
const TitleText = styled.Text`
    font-size: 26px;
    font-family: "IBMPlexSans-Bold";
    margin-top: 15px;
`;
const Body = styled.Pressable`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 23px;
`;
const LogoutIcon = styled.Image`
    width: 24px;
    height: 30px;
`;
const LogoutText = styled.Text`
    font-size: 20px;
    font-family: "IBMPlexSans-Regular";
    margin-left: 10px;
`;
const LogoutBtn = styled.Image`
    position: relative;
    width: 8px;
    height: 15px;
    left: 225;
    transform: rotate(180deg);
`;
export default MyPage;