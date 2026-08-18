import type { ReactNode, FC } from 'react'
import { SidebarRootStateProvider } from './SidebarRootContext'

type Props = {
    children: ReactNode;
};

const SidebarRoot: FC<Props> = ({children}) => {
    return (
        <SidebarRootStateProvider>
            {children}
        </SidebarRootStateProvider>
    );
};

export default SidebarRoot;