import SideBarListItem from "./SideBarListItem";
import { useSideBar } from "./useSideBar";

function SideBarList({ list }) {
    const isOpen = useSideBar();
    return (
        <div>
            {list.map((item) => (
                <SideBarListItem isOpen={isOpen} item={item} key={item.name} />
            ))}
        </div>
    );
}

export default SideBarList;
