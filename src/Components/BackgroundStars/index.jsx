import * as S from "./style";

export const BackgroundStars = (props) => {
    const { quantity } = props;

    const stars = [];

    for (let i = 0; i < quantity; i++) {
        let x = Math.random() * (1200 - 10) + 10;
        let y = Math.random() * (750 - 10) + 10;
        console.log(`Star #${i} x = ${x}`);
        console.log(`Star #${i} y = ${y}`);
        stars.push(<S.Star key={`star_${i}`} x={x} y={y} />);
    }

    return (
        <>
            {stars}
        </>
    )
}