import styled from "styled-components";
import palette from "../../styles/colorPalette";
import ReuseText from "../ReuseText";

const CallTopic = ({topic}) => {
    return (
        <Container>
            <ReuseText
                text={`통화 주제 | ${topic}`}
                type={"more"}
                fontsize={"17px"}
                fontfamily={"IBMPlexSans-Regular"}
                color={palette.black}/>
        </Container>
    );
};
const Container = styled.View`
    background-color: ${palette.white};
    opacity: 0.6;
    border-radius: 10px;
    width: 80%;
    padding: 10px;
    margin: 55px 0 420px 0;
    display: flex;
    align-items: center;
`;
export default CallTopic