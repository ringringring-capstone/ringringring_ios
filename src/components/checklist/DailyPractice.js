import styled from "styled-components";
import { ProgressChart } from "react-native-chart-kit";

import palette from "../../styles/colorPalette";

const DailyPractice = () => {
    const data = {
        labels: ["평균 연습 시간", "내 연습 시간"],
        data: [0.4, 0.6]
        // colors: ["rgba(104, 104, 104, 1)", "rgba(168, 191, 98, 1)"],
    };

    return (
        <Container>
            <ProgressChart
                data={data}
                width={170}
                height={170}
                strokeWidth={8}
                radius={55}
                chartConfig={{
                    backgroundColor: `${palette.white}`,
                    backgroundGradientFrom: `${palette.white}`, // 시작 색상
                    backgroundGradientTo: `${palette.white}`,   // 종료 색상
                    color: (opacity = 1) => `rgba(104, 104, 104, ${opacity})`,
                }}
                hideLegend={true}/>
            <TextContainer>
                {data.labels.map((item, idx) => (
                    <GraphContainer key={idx}>
                        <GraphColor cate={item}/>
                        <GraphText>{item}</GraphText>
                    </GraphContainer>
                ))}
            </TextContainer>
        </Container>
    );
};
const Container = styled.View`
    flex: 1;
    background-color: ${palette.white};
    padding: 21px;
    margin: 7px 28px;
    border-radius: 20px;
    shadow-color: ${palette.black};
    shadow-opacity: 0.1;
    shadow-offset: 0px 0px;
    flex-direction: row;
`;
const TextContainer = styled.View`
    display: flex;
    justify-content: flex-end;
    margin-left: 20px;
`;
const GraphContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const GraphColor = styled.View`
    width: 12px;
    height: 12px;
    background-color: ${(props) => (props.cate === "평균 연습 시간") ? "#686868" : `${palette.sub}`};
`;
const GraphText = styled.Text`
    font-size: 14px;
    font-family: "IBMPlexSans-Regular";
    margin-left: 7px;
`;
export default DailyPractice;