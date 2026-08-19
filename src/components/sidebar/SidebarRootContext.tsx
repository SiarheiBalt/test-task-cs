import {createContext, type FC, useContext, useState, type ReactNode, useEffect} from 'react'

type Props = {
    children: ReactNode
}

type State = {
    openedGroup: string | null
    collapsed: boolean
    isMobile: boolean
    setOpenedGroup: (groupId: string | null) => void
    setCollapsed: (collapsed: boolean) => void
}

export const SidebarRootContext = createContext<State | null>(null)

export const useSidebarState = () => {
    const context = useContext(SidebarRootContext)

    if (!context) {
        throw new Error(
            'useSidebarState must be used within SidebarRootStateProvider'
        )
    }

    return context
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