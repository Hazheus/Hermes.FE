import * as S from "./style";
import { useEffect, useRef } from "react"

export const Canvas = (props) => {
    const { draw } = props;
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        draw(context);
    }, [draw])

    return (
        <S.Canvas ref={canvasRef} {...props} />
    )
}