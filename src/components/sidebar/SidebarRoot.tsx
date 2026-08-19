import type { ReactNode, FC } from 'react'
import { SidebarRootStateProvider, useSidebarState } from './SidebarRootContext'

type Props = {
    children: ReactNode
    className?: string | ((state: { collapsed: boolean }) => string)
}

const SidebarRoot = ({ children, className }: Props) => {
    return (
        <SidebarRootStateProvider>
            <SidebarRootView className={className}>
                {children}
            </SidebarRootView>
        </SidebarRootStateProvider>
    );
};

const SidebarRootView: FC<Props> = ({children, className}) => {
    const { collapsed, isMobile } = useSidebarState()

    const resolvedClassName =
        typeof className === 'function'
            ? className({ collapsed, isMobile})
            : className;

    return (
        <nav className={resolvedClassName}>
            <ul>
                {children}
            </ul>
        </nav>
    );
};

export default SidebarRoot;