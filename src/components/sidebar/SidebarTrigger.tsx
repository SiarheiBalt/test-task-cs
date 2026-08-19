import {type ReactNode, type FC, useEffect} from 'react'
import {useSidebarGroup} from "./SidebarGroupContext"
import {useSidebarState} from "./SidebarRootContext"
import {type SidebarClassNameProps} from "./types";

type Props = {
    children: ReactNode
    className: string | ((state: SidebarClassNameProps) => string)
    icon?: ReactNode
    isActive: boolean
}

const SidebarTrigger: FC<Props> = ({children, className, icon, isActive}) => {
    const { groupId } = useSidebarGroup()
    const { openedGroup, setOpenedGroup, collapsed, isMobile } = useSidebarState()

    const isOpen = openedGroup === groupId

    const handleClick = () => {
        setOpenedGroup(isOpen ? null : groupId)
    };

    const onMouseOver = () => {
        if(collapsed) {
            if(!isOpen) setOpenedGroup(groupId)
        }
    }

    const onMouseLeave = () => {
        if(collapsed) {
            if(isOpen) setOpenedGroup(null)
        }
    }

    useEffect(() => {
        if(isActive) setOpenedGroup(groupId)
    }, [])

    const resolvedClassName =
        typeof className === 'function'
            ? className({ isOpen, collapsed, isActive, isMobile })
            : className;

    return (
        <button
            type="button"
            className={resolvedClassName}
            onClick={handleClick}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
        >
            {icon && icon}
            {!collapsed && children}
        </button>
    );
};

export default SidebarTrigger;