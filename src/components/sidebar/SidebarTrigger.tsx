import {type ReactNode, type FC, useEffect} from 'react'
import {useSidebarGroup} from "./SidebarGroupContext"
import {useSidebarState} from "./SidebarRootContext"

type SidebarTriggerState = {
    isOpen: boolean;
    collapsed: boolean;
    isActive: boolean;
};

type Props = {
    children: ReactNode
    className: string
    icon?: ReactNode
}

const SidebarTrigger: FC<Props> = ({children, className, icon, isActive}) => {
    const { groupId } = useSidebarGroup()
    const { openedGroup, setOpenedGroup, collapsed } = useSidebarState()

    const isOpen = openedGroup === groupId

    const handleClick = () => {
        setOpenedGroup(groupId)
    };

    const onMouseOver = () => {
        if(collapsed) {
            if(!isOpen) setOpenedGroup(groupId)
        }
    }

    useEffect(() => {
        if(isActive) setOpenedGroup(groupId)
    }, [])

    const resolvedClassName =
        typeof className === 'function'
            ? className({ isOpen, collapsed, isActive })
            : className;

    return (
        <button
            type="button"
            className={resolvedClassName}
            onClick={handleClick}
            onMouseOver={onMouseOver}
        >
            {icon && icon}
            {!collapsed && children}
        </button>
    );
};

export default SidebarTrigger;