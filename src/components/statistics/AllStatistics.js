import styled from "styled-components";
import { ScrollView } from "react-native"
import ReuseText from "../ReuseText";
import InfoBox from "../InfoBox";

const AllStatitics = () => {
    const TitleName = ["주간 통계", "월간 통계"];
    return (
        <Container>
            <ReuseText text={"전체 통계량"} type={"sub"}/>
            <GraphContainer horizontal={true}>
                {TitleName.map((item) => (
                    <InfoBox key={item} title={item}/>
                ))}
            </GraphContainer>
        </Container>
    );
};
const Container = styled.View`
    padding: 15px;
`;
const GraphContainer = styled(ScrollView)`
    display: flex;
    flex-direction: row;
    margin: 22px 15px;
`;
export default AllStatitics;