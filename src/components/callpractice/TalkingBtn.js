import styled from "styled-components";
import palette from "../../styles/colorPalette";

import Mic from "../../assets/icon/callpractice/ic_mic.png";

const TalkingBtn = () => {
    return (
        <Container>
            <MicIcon source={Mic}/>
        </Container>
    );
};
const Container = styled.Pressable`
    background-color: #C3C3C3;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 22px;
    shadow-color: ${palette.black};
    shadow-opacity: 0.9;
    shadow-offset: 0px 0px;
    margin-bottom: 5px;
`;
const MicIcon = styled.Image`
    width: 40px;
    height: 40px;
`;
export default TalkingBtn;