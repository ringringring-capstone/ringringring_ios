import styled from "styled-components";
import palette from "../styles/colorPalette";
import { SafeAreaView } from 'react-native';

const Register = () => {
    return (
        <Container>
            <NoticeText> 사용자 정보를 입력해주세요. </NoticeText>
            <NoticeText> 로그인에 사용할 {"\n"} 아이디와 비밀번호를 입력해주세요. </NoticeText>
        </Container>
    );
};
const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${palette.white};
  align-items: center;
`;
const NoticeText = styled.Text`
    font-size: 17px;
    font-family: "IBMPlexSans-Bold";
    color: ${palette.black};
    align-items: left;
`;
export default Register;