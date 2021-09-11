import * as S from "./style";
import { HealthStatus } from "../../Components/HealthStatus";

export const HealthPage = () => {
    return (
        <S.Wrapper>
            <HealthStatus />
        </S.Wrapper>
    );
}