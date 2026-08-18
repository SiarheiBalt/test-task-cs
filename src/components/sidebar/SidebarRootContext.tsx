import {createContext, type FC, useContext, useState, type ReactNode} from 'react'

type Props = {
    children: ReactNode
}

export const SidebarRootContext = createContext({});

export const useSidebarState = () => {
    return useContext(SidebarRootContext);
}

export const SidebarRootStateProvider: FC<Props> = ({children}) => {
    const [openedGroup, setOpenedGroup] = useState<string | null>(null)
    const [collapsed, setCollapsed] = useState(false)

    return <SidebarRootContext.Provider value={{
        openedGroup,
        setOpenedGroup,
        collapsed,
        setCollapsed,
    }}>
        {children}
    </SidebarRootContext.Provider>
}