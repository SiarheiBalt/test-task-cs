import {} from 'react'
import { useSidebarGroup } from './SidebarGroupContext'
import {useSidebarState} from "./SidebarRootContext"


const SidebarContent = ({children}) => {
    const { openedGroup } = useSidebarState();
    const { groupId } = useSidebarGroup();

    if (openedGroup !== groupId) {
        return null;
    }

    return (
        <>
            {children}
        </>
    );
};

export default SidebarContent;