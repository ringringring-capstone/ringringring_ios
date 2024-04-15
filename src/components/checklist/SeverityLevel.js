import styled from "styled-components";
import palette from "../../styles/colorPalette";

const SeverityLevel = ({checkCount}) => {
    return (
        <Container>
            <ChartContainer>
                <Figure checkCount={checkCount}/>
            </ChartContainer>
            <ChartTextContainer>
                <ChartText>0</ChartText>
                <ChartText>심각도</ChartText>
                <ChartText>100</ChartText>
            </ChartTextContainer>
        </Container>
    );
};
const Container = styled.View`
    flex: 1;
    width: 100%;
    padding: 0 28px;
    margin-top: 10px;
`;
const ChartContainer = styled.View`
    height: 30px;
    background-color: ${palette.white};
    border-radius: 20px;
    border: 1px solid #9D9D9D;
    padding: 2px;
    shadow-color: ${palette.black};
    shadow-opacity: 0.1;
    shadow-offset: 2px 3px;
`;
const Figure = styled.View`
    width: ${(props) => (props.checkCount * 10)}px;
    height: 24px;
    border-radius: 20px;
`;
const ChartTextContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 5px;
`;
const ChartText = styled.Text`
    font-size: 12px;
    font-family: "IBMPlexSans-Regular";
    line-height: 21px;
    letter-spacing: -0.32px;
`;
export default SeverityLevel;