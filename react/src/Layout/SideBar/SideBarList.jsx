import SideBarItem from "./SideBarItem";

function SideBarList({ list }) {
    return (
        <div>
            {list.map((item) => (
                <SideBarItem item={item} key={item.name} />
            ))}
        </div>
    );
}

export default SideBarList;
