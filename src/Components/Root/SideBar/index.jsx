import { SideBarList } from "../SideBarList";
import * as S from "./style";

export const SideBar = () => {
    return (
        <S.NavBar>
            <SideBarList />
        </S.NavBar>
    );
}