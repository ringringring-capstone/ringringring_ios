import styled from "styled-components";
import { ProgressChart } from "react-native-chart-kit";
import palette from "../../styles/colorPalette";

const DailyPractice = () => {
    const GraphTitle = [
        {category: "all", text: "평균 연습 시간"}, 
        {category: "my", text: "내 연습 시간"}
    ];

    const data = {
        labels: ["평균 연습 시간", "내 연습 시간"], // optional
        data: [0.4, 0.6]
    };
    

    return (
        <Container>
            <ProgressChart
                data={data}
                width={300}
                height={220}
                strokeWidth={10}
                radius={32}
                chartConfig={{
                    backgroundGradientFrom: `${palette.white}`, // 시작 색상
                    backgroundGradientTo: `${palette.white}`,   // 종료 색상
                    color: (opacity = 1) => `rgba(219, 219, 219, ${opacity})`,
                }}
                hideLegend={true}
            />
            {GraphTitle.map((item) => (
                <GraphContainer>
                    <GraphColor cate={item.category}/>
                    <GraphText>{item.text}</GraphText>
                </GraphContainer>
            ))}
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
`;
const GraphContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const GraphColor = styled.View`
    width: 12px;
    height: 12px;
    background-color: ${(props) => (props.cate === "all") ? "#686868" : `${palette.sub}`};
`;
const GraphText = styled.Text`
    font-size: 14px;
    font-family: "IBMPlexSans-Regular";
    margin-left: 7px;
`;
export default DailyPractice;