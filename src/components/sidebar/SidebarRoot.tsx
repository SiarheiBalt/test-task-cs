import type { ReactNode, FC } from 'react'
import { SidebarRootStateProvider, useSidebarState } from './SidebarRootContext'
import type {SidebarClassNameProps} from './types'

type Props = {
    children: ReactNode
    className?: string | ((state: SidebarClassNameProps) => string)
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

export default SidebarRoot