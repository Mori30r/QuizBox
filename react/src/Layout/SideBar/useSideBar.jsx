import { useContext } from "react";
import SideBarContext from "./SideBarContext";

export function useSideBar() {
    return useContext(SideBarContext);
}
