import styled from "styled-components";
import { ProgressChart } from "react-native-chart-kit";

import palette from "../../styles/colorPalette";
import ReuseText from "../ReuseText";

const DailyPractice = () => {
    const maxMinutes = 180;
    const data = {
        labels: ["내 연습 시간", "평균 연습 시간"],
        colors: ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 1)", "rgba(168, 191, 98, 1)", "rgba(104, 104, 104, 1)"],
        data: [1, 1, 0.3, 0.2],
    };

    return (
        <Container>
            <ProgressChart
                data={data}
                width={190}
                height={190}
                strokeWidth={8}
                radius={44}
                chartConfig={{
                    backgroundGradientFrom: `${palette.white}`, // 시작 색상
                    backgroundGradientTo: `${palette.white}`,   // 종료 색상
                    color: (opacity = 1) => `rgba(217, 217, 217, ${opacity})`,
                }}
                withCustomBarColorFromData={true}
                hideLegend={true}/>
                <ChartTextContainer>
                    <DetailPractice>
                        <ReuseText
                            text={"평균 연습 시간"}
                            type={"more"}
                            fontsize={"13px"}
                            fontfamily={"IBMPlexSans-ExtraLight"}
                            color={palette.black}/>
                        <ReuseText
                            text={`${data.data[3] * 180}분`}
                            type={"more"}
                            fontsize={"15px"}
                            fontfamily={"IBMPlexSans-Regular"}
                            color={"#686868"}/>
                    </DetailPractice>
                    <Line/>
                    <DetailPractice>
                        <ReuseText
                            text={`${data.data[2] * 180}분`}
                            type={"more"}
                            fontsize={"15px"}
                            fontfamily={"IBMPlexSans-Regular"}
                            color={palette.sub}/>
                        <ReuseText
                            text={"내 연습 시간"}
                            type={"more"}
                            fontsize={"13px"}
                            fontfamily={"IBMPlexSans-ExtraLight"}
                            color={palette.black}/>
                    </DetailPractice>
                </ChartTextContainer>
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
    position: relative;
    background-color: ${palette.white};
    padding: 21px;
    margin: 7px 28px;
    border-radius: 20px;
    shadow-color: ${palette.black};
    shadow-opacity: 0.1;
    shadow-offset: 0px 0px;
    flex-direction: row;
`;
const ChartTextContainer = styled.View`
    position: absolute;
    top: 65px;
    left: 80px;
    display: flex;
    align-items: center;
`;
const DetailPractice = styled.View`
    display: flex;
    align-items: center;
`;
const Line = styled.View`
    width: 80%;
    height: 0.5px;
    background-color: #DBDBDB;
    margin: 7px 0;
`;
const TextContainer = styled.View`
    display: flex;
    justify-content: flex-end;
    margin-left: 5px;
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