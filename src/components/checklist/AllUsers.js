import styled from "styled-components";
import { PieChart } from "react-native-chart-kit";
import palette from "../../styles/colorPalette";


const AllUsers = ({score}) => {
    const status = score >= 6 ? "심각" : (score >= 3 ? "위험" : "양호");
    const data = [
        {
          name: "심각",
          population: 43,
          color: status === "심각" ? `${palette.sub}` : "#D9D9D9",
        },
        {
          name: "위험",
          population: 62,
          color: status === "위험" ? `${palette.sub}` : "#D9D9D9",
        },
        {
          name: "양호",
          population: 120,
          color: status === "양호" ? `${palette.sub}` : "#D9D9D9",
        },
      ];
    
    return (
        <Container>
            <PieChart
                data={data}
                width={300}
                height={220}
                chartConfig={{
                    backgroundGradientFrom: `${palette.white}`,
                    backgroundGradientTo: `${palette.white}`,
                    color: (opacity = 1) => `rgba(219, 219, 219, ${opacity})`,
                    // strokeWidth: 2 // optional, default 3
                }}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"15"}
                hasLegend={false}
                center={[50, -10]}
                absolute
            />
            <EmptyCircle/>
        </Container>
    );
};
const Container = styled.View`
    /* flex: 1; */
    padding: 21px;
    margin: 7px 28px;
`;
const EmptyCircle = styled.View`
    position: absolute;
    display: flex;
    top: 39%;
    left: 43%;
    width: 70px;
    height: 70px;
    background-color: ${palette.white};
    border-radius: 50%;
`;
export default AllUsers;