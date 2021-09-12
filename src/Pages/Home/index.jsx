import { Canvas } from "../../Components/Commons/Canvas";
import { HomeTitle } from "../../Components/Home/HomeTitle";
import * as S from "./style";

export const HomePage = () => {
    const draw = (ctx) => {
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
        ctx.fillStyle = '#00001b';
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        for (let i = 0; i < 1000; i++) {
            let posX = Math.round(ctx.canvas.width * Math.random());
            let posY = Math.round(ctx.canvas.height * Math.random());
            let color = (Math.floor(Math.random() * 2) + 1 === 1) ? '#ff0' : '#fff';
            ctx.fillStyle = color;
            ctx.shadowColor = color;
            ctx.shadowBlur = 3;
            ctx.fillRect(posX, posY, 1, 1);
        }
    };

    return (
        <S.Container>
            <Canvas draw={draw} />
            <HomeTitle />
        </S.Container>
    )
}