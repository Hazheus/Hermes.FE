import * as S from "./style";
import { Search, Star, Navicon, Gear, Exclamation } from "@styled-icons/evil";

export const SideBarListItem = (props) => {
    const { icon } = props;
    const icons = {
        search: Search,
        favorite: Star,
        home: Navicon,
        config: Gear,
        default: Exclamation
    }

    const IconComponent = (icons[icon]) ? icons[icon] : icons.default;

    return (
        <S.ListItem>
            <S.ListItemButton href="/">
                <IconComponent size={32} />
            </S.ListItemButton>
        </S.ListItem>
    );
}