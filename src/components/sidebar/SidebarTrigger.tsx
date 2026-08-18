import {type ReactNode} from 'react'
import {useSidebarGroup} from "./SidebarGroupContext"
import {useSidebarState} from "./SidebarRootContext"

type Props = {
    children: ReactNode
    className: string,
    icon?: ReactNode;
}

const SidebarTrigger = ({children, className, icon}) => {
    const { groupId } = useSidebarGroup()
    const { openedGroup, setOpenedGroup } = useSidebarState()

    const isOpen = openedGroup === groupId

    const handleClick = () => {
        setOpenedGroup(isOpen ? null : groupId)
    }

    return (
        <button
            type="button"
            className={className}
            onClick={handleClick}
            aria-expanded={isOpen}
        >
            {icon && icon}
            {children}
        </button>
    );
};

export default SidebarTrigger;