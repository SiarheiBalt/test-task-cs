import {createContext, useContext, type ReactNode, type FC} from 'react'

type SidebarGroupContextValue = {
    groupId: string;
};

type Props = {
    groupId: string;
    children: ReactNode;
};

const SidebarGroupContext =
    createContext<SidebarGroupContextValue | {groupId: null}>({groupId: null})

// useSidebarGroup must be used within SidebarGroup
export const useSidebarGroup = () => {
    return  useContext(SidebarGroupContext);
};

export const SidebarGroupProvider: FC<Props> = ({groupId, children}) => {
    return (
        <SidebarGroupContext.Provider value={{ groupId }}>
            {children}
        </SidebarGroupContext.Provider>
    );
};