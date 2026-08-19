import {FC, type ReactNode} from 'react'
import {useSidebarState} from './SidebarRootContext'
import {useSidebarGroup} from './SidebarGroupContext'

type SidebarItemState = {
    isActive: boolean;
    collapsed: boolean;
};

type SidebarItemProps = {
    children: ReactNode
    isActive?: boolean
    onSelect?: () => void
    className?: string | ((state: SidebarItemState) => string);
    icon?: ReactNode;
};

const SidebarItem: FC<SidebarItemProps> = ({
                                                children,
                                                onSelect,
                                                isActive = false,
                                                className,
                                                icon
}) => {

    const { setOpenedGroup, collapsed } = useSidebarState()
    const { groupId } = useSidebarGroup()

    const isGroupedItem = !!groupId

    const onHandleClick = () => {
        onSelect()
        // If the element has no group, close active
        !isGroupedItem && setOpenedGroup(null)
    }

    const resolvedClassName =
        typeof className === 'function'
            ? className({ isActive, collapsed })
            : className;

    return (
        <li>
            <button
                type="button"
                className={resolvedClassName}
                onClick={onHandleClick}
            >
                {icon && icon}
                {!collapsed && children}
            </button>
        </li>
    );
};

export default SidebarItem;