import {} from 'react'
import { SidebarGroupProvider } from './SidebarGroupContext'

const SidebarGroup = ({children, id, className}) => {

    return (
        <li className={className}>
            <SidebarGroupProvider groupId={id}>
                {children}
            </SidebarGroupProvider>
        </li>
    );
};

export default SidebarGroup;