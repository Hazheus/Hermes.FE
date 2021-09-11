import { SideBarListItem } from "../SideBarListItem";
import * as S from "./style";

export const SideBarList = () => {
    return (
        <S.List>
            <SideBarListItem description="Home" icon="home" />
            <SideBarListItem description="Search" icon="search" />
            <SideBarListItem description="Favorites" icon="favorite" />
            <SideBarListItem description="Config" icon="config" />
        </S.List>
    );
};