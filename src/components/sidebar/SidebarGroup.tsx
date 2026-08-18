import {} from 'react'
import { SidebarGroupProvider } from './SidebarGroupContext'

const SidebarGroup = ({children, id}) => {

    return (
        <SidebarGroupProvider groupId={id}>
            {children}
        </SidebarGroupProvider>
    );
};

export default SidebarGroup;