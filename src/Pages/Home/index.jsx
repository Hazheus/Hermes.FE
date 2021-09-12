import { BackgroundStars } from "../../Components/BackgroundStars";
import * as S from "./style";

export const HomePage = () => {
    const quantity = 150;
    const stars = [];

    for (let i = 0; i < quantity; i++) {
        let x = Math.random() * (700 - -700) + -700;
        let y = Math.random() * (600 - -600) + -600;
        stars.push(<BackgroundStars id={i} key={i} posX={x} posY={y} />);
    }

    return (
        <S.Container>
            {stars};
        </S.Container>
    )
}