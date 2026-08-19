import {type ReactNode, type FC} from "react"
import {useSidebarState} from "./SidebarRootContext"

type Props = {
    children: (collapsed: boolean ) => ReactNode
    className?: string;
};

const Toggle: FC<Props> = ({
                           children,
                           className
}) => {

    const { collapsed, setCollapsed, isMobile } = useSidebarState();

    if(isMobile) return null

    return (
        <button
            type="button"
            className={className}
            onClick={() => setCollapsed(!collapsed)}
            aria-expanded={!collapsed}
        >
            {children(!!collapsed)}
        </button>
    );
};

export default Toggle;