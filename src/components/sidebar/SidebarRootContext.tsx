import {createContext, type FC, useContext, useState, type ReactNode, useEffect} from 'react'

type Props = {
    children: ReactNode
}

export const SidebarRootContext = createContext({});

export const useSidebarState = () => {
    return useContext(SidebarRootContext);
}

export const SidebarRootStateProvider: FC<Props> = ({children}) => {
    const [isMobile, setIsMobile] = useState(false)
    const [openedGroup, setOpenedGroup] = useState<string | null>(null)
    const [collapsed, setCollapsed] = useState(false)

    useEffect(() => {
        const media = window.matchMedia('(max-width: 768px)')

        const handleChange = () => {
            setIsMobile(media.matches)
            setCollapsed(media.matches)
        }

        handleChange()
        media.addEventListener('change', handleChange)

        return () => {
            media.removeEventListener('change', handleChange)
        }
    }, [])

    return <SidebarRootContext.Provider value={{
        openedGroup,
        setOpenedGroup,
        collapsed,
        setCollapsed,
        isMobile
    }}>
        {children}
    </SidebarRootContext.Provider>
}