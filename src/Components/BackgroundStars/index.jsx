// import { useEffect, useState } from "react";
import * as S from "./style";

export const BackgroundStars = (props) => {
    const { posX, posY } = props;
    return (
        <S.Star posX={posX} posY={posY} />
    );
}