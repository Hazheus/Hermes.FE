import { BackgroundStars } from "../../Components/BackgroundStars";
import * as S from "./style";

export const HomePage = () => {
    return (
        <S.Container>
            <BackgroundStars quantity={200} />
        </S.Container>
    )
}