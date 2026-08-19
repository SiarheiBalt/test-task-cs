import {type FC, type ReactNode} from 'react'
import {useSidebarState} from './SidebarRootContext'
import {useSidebarGroup} from './SidebarGroupContext'
import type {SidebarClassNameProps} from "./types"

type SidebarItemProps = {
    children: ReactNode
    isActive?: boolean
    onSelect: () => void
    className?: string | ((state: SidebarClassNameProps) => string)
    tooltipClassName?: string
    itemWrapperClassName?: string
    icon?: ReactNode
};

const SidebarItem: FC<SidebarItemProps> = ({
                                                children,
                                                onSelect,
                                                isActive = false,
                                                className,
                                                icon,
                                                tooltipClassName,
                                                itemWrapperClassName
}) => {

    const { setOpenedGroup, collapsed, isMobile } = useSidebarState()
    const { groupId } = useSidebarGroup()

    const isGroupedItem = !!groupId

    const onHandleClick = () => {
        onSelect()
        // If the element has no group, close active
        !isGroupedItem && setOpenedGroup(null)
    }

    const resolvedClassName =
        typeof className === 'function'
            ? className({ isActive, collapsed, isMobile })
            : className;

    return (
        <li className={itemWrapperClassName}>
            <button
                type="button"
                className={resolvedClassName}
                onClick={onHandleClick}
            >
                {icon && icon}
                {(!collapsed || isGroupedItem) && children}
            </button>
            {collapsed && tooltipClassName && (
                <span className={tooltipClassName}>
                    {children}
                </span>
            )}
        </li>
    );
};

export default SidebarItem;