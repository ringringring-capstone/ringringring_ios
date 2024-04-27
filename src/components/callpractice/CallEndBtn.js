import styled from "styled-components";
import palette from "../../styles/colorPalette";
import { Pressable } from "react-native";

import Phone from "../../assets/icon/callpractice/ic_phone.png";

const CallEndBtn = () => {
    return (
        <Container>
            <PhoneIcon source={Phone}/>
        </Container>
    );
};
const Container = styled.Pressable`
    background-color: #E54848;
    width: 20%;
    height: 10%;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const PhoneIcon = styled.Image`
    width: 42px;
    height: 42px;
`;
export default CallEndBtn;