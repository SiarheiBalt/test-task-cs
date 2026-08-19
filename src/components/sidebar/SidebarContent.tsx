import {type ReactNode, type FC} from 'react'
import { useSidebarGroup } from './SidebarGroupContext'
import {useSidebarState} from "./SidebarRootContext"
import type {SidebarClassNameProps} from "./types"

type Props = {
    children: ReactNode;
    className?: string | ((state: SidebarClassNameProps) => string);
};

const SidebarContent: FC<Props> = ({children, className}) => {
    const { openedGroup, collapsed, isMobile } = useSidebarState()
    const { groupId } = useSidebarGroup()

    if (!collapsed && openedGroup !== groupId) {
        return null;
    }

    const isOpen = openedGroup === groupId

    const resolvedClassName =
        typeof className === 'function'
            ? className({ collapsed, isOpen, isMobile })
            : className;

    return (
        <ul className={resolvedClassName}>
            {children}
        </ul>
    );
};

export default SidebarContent;