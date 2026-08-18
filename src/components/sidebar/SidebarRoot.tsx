import type { ReactNode, FC } from 'react'
import { SidebarRootStateProvider } from './SidebarRootContext'

type Props = {
    children: ReactNode
    className: string | undefined
};

const SidebarRoot: FC<Props> = ({children, className}) => {
    return (
        <nav className={className}>
            <ul>
                <SidebarRootStateProvider>
                    {children}
                </SidebarRootStateProvider>
            </ul>
        </nav>
    );
};

export default SidebarRoot;