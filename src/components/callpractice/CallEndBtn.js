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
    padding: 22px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
`;
const PhoneIcon = styled.Image`
    width: 42px;
    height: 42px;
`;
export default CallEndBtn;