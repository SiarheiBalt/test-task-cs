import {type FC, type ReactNode} from 'react'
import { SidebarGroupProvider } from './SidebarGroupContext'

type Props = {
    children: ReactNode
    id: string
    className: string
}

const SidebarGroup: FC<Props> = ({children, id, className}) => {

    return (
        <li className={className}>
            <SidebarGroupProvider groupId={id}>
                {children}
            </SidebarGroupProvider>
        </li>
    );
};

export default SidebarGroup;