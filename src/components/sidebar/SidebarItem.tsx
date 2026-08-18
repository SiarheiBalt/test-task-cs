import {FC, type ReactNode} from 'react'
import {useSidebarState} from './SidebarRootContext'
import {useSidebarGroup} from './SidebarGroupContext'


type SidebarItemProps = {
    children: ReactNode
    isActive?: boolean
    onSelect?: () => void
    className?: string
    icon?: ReactNode;
};

const SidebarItem: FC<SidebarItemProps> = ({
                                                children,
                                                onSelect,
                                                isActive = false,
                                                className,
                                                icon
}) => {

    const { setOpenedGroup } = useSidebarState()
    const { groupId } = useSidebarGroup()

    const isGroupedItem = !!groupId

    const onHandleClick = () => {
        onSelect()
        // If the element has no group, close active
        !isGroupedItem && setOpenedGroup(null)
    }

    return (
        <li>
            <button
                type="button"
                className={className}
                aria-current={isActive ? 'page' : undefined}
                onClick={onHandleClick}
            >
                {icon && icon}
                {children}
            </button>
        </li>
    );
};

export default SidebarItem;