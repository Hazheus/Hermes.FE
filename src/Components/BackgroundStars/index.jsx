// import { useEffect, useState } from "react";
import * as S from "./style";

export const BackgroundStars = (props) => {
    const { quantity } = props;
    const stars = [];
    for (let i = 0; i < quantity; i++) {
        let x = Math.random() * (700 - -700) + -700;
        let y = Math.random() * (600 - -600) + -600;
        stars.push(<S.Star key={`star_${i}`} x={x} y={y} />);
    }

    return stars;
}