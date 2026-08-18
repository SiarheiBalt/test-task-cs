import {type ReactNode, type FC, useEffect} from 'react'
import {useSidebarGroup} from "./SidebarGroupContext"
import {useSidebarState} from "./SidebarRootContext"

type Props = {
    children: ReactNode
    className: string
    icon?: ReactNode
    isActive?: boolean | undefined
}

const SidebarTrigger: FC<Props> = ({children, className, icon, isActive}) => {
    const { groupId } = useSidebarGroup()
    const { openedGroup, setOpenedGroup } = useSidebarState()

    const isOpen = openedGroup === groupId

    const handleClick = () => {
        setOpenedGroup(groupId)
    };

    useEffect(() => {
        if(isActive) setOpenedGroup(groupId)
    }, [])

    return (
        <button
            type="button"
            className={className}
            onClick={handleClick}
            aria-expanded={isOpen}
            data-active={isActive}
        >
            {icon && icon}
            {children}
        </button>
    );
};

export default SidebarTrigger;