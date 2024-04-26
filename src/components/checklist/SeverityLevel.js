import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";
import palette from "../../styles/colorPalette";

const SeverityLevel = ({score}) => {
    return (
        <Container>
            <ChartContainer>
                <Figure 
                    colors={["#809C29", "#A8BF62"]}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    checkCount={score}/>
                <LineContainer>
                   {Array.from({length: 9}).map((item) => (
                    <Line/>
                   ))}
                </LineContainer>
            </ChartContainer>
            <ChartTextContainer>
                <ChartText>0</ChartText>
                <ChartText>심각도</ChartText>
                <ChartText>100</ChartText>
            </ChartTextContainer>
            <FigureTextContainer>
                <FigureText type="text">심각도  | {" "}</FigureText>
                <FigureText type="score">{score*10} %</FigureText>
            </FigureTextContainer>
        </Container>
    );
};
const Container = styled.View`
    flex: 0.13;
    padding: 0 28px;
    margin: 10px 0;
`;
const ChartContainer = styled.View`
    height: 30px;
    background-color: ${palette.white};
    border-radius: 20px;
    border: 1px solid #9D9D9D;
    padding: 2px;
    display: flex;
    shadow-color: ${palette.black};
    shadow-opacity: 0.1;
    shadow-offset: 2px 3px;
`;
const Figure = styled(LinearGradient)`
    width: ${(props) => (props.checkCount * 14.2857)}%;
    height: 24px;
    border-radius: 20px;
`;
const LineContainer = styled.View`
    position: relative;
    height: 100%;
    top: -24px;
    justify-content: space-evenly;
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const Line = styled.View`
    border: 0.5px dotted #5E5E5E;
    width: 1px;
    height: 100%;
`;
const FigureTextContainer = styled.View`
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;  
const FigureText = styled.Text`
    font-size: 20px;
    font-family: ${(props) => (props.type === "text") ? "IBMPlexSans-Regular" : "IBMPlexSans-Bold"};
    color: ${(props) => (props.type === "text") ? `${palette.black}` : `${palette.sub}`};
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