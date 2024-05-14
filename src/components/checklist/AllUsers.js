import styled from "styled-components";
// import { PieChart } from "react-native-chart-kit";
import { PieChart } from "react-native-gifted-charts";
import palette from "../../styles/colorPalette";
import ReuseText from "../ReuseText";


const AllUsers = ({score}) => {
    const status = score >= 6 ? "심각" : (score >= 3 ? "위험" : "양호");
    const data = [
      {
        text: "심각",
        value: 50,
        shiftTextBackgroundX: 3
      },
      {
        text: "위험",
        value: 82,
        shiftTextBackgroundX: 4,
        shiftTextBackgroundY: -1,
      },
      {
        text: "양호",
        value: 30,
        shiftTextBackgroundX: 3,
        shiftTextBackgroundY: 0,
      },
    ];
    
    return (
        <Container>
            <PieChart 
              radius={100}
              sectionAutoFocus={true}             // 선택된 데이터 확대
              // showText                            // 차트 값 텍스트
              // showValuesAsLabels={true}           // 값 보이게 할 지
              labelsPosition={"onBorder"}         // 텍스트 위치
              textColor={`${palette.black}`}      // 텍스트 색상
              textSize={12}                       // 텍스트 크기
              showTextBackground={true}
              textBackgroundColor={`${palette.white}`}
              textBackgroundRadius={30}
              strokeWidth={2}                     // 그래프 테두리 두께
              strokeColor={`${palette.white}`}    // 그래프 테두리 색상      
              font={"IBMPlexSans-Regular"}
              data={data.map((item) => ({
                ...item,
                percentage: item.value,
                color: (item.text === status) ? `${palette.sub}` : "#D9D9D9",
                focused: item.text === status,
                // showValuesAsLabels: item.text === status,
              }))}
              donut/>
        </Container>
    );
};
const Container = styled.View`
    /* flex: 1; */
    padding: 0 30px;
    margin: 7px 28px;
`;
export default AllUsers;