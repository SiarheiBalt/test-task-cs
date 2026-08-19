import {type ReactNode} from 'react'
import { useSidebarGroup } from './SidebarGroupContext'
import {useSidebarState} from "./SidebarRootContext"

type SidebarContentState = {
    collapsed: boolean;
    isOpen: boolean;
};

type Props = {
    children: ReactNode;
    className?: string | ((state: SidebarContentState) => string);
};

const SidebarContent = ({children, className}) => {
    const { openedGroup, collapsed, isOpen } = useSidebarState()
    const { groupId } = useSidebarGroup()

    if (!collapsed && openedGroup !== groupId) {
        return null;
    }

    const resolvedClassName =
        typeof className === 'function'
            ? className({ collapsed, isOpen })
            : className;

    return (
        <ul className={resolvedClassName}>
            {children}
        </ul>
    );
};

export default SidebarContent;