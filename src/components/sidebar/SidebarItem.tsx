import {FC, type ReactNode} from 'react'
import {useSidebarState} from "./SidebarRootContext"


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

    const { setOpenedGroup } = useSidebarState();

    const onHandleClick = () => {
        onSelect()
        setOpenedGroup(null)
    }

    return (
        <button
            type="button"
            className={className}
            aria-current={isActive ? 'page' : undefined}
            onClick={onHandleClick}
        >
            {icon && icon}
            {children}
        </button>
    );
};

export default SidebarItem;