import type { SidebarClassNameProps } from '../../components/sidebar/types'

export const styles = {
    sidebar: ({collapsed, isMobile}: SidebarClassNameProps) => `
        bg-white border-gray-200 transition-all duration-300
        ${
        isMobile
            ? `
              fixed bottom-0 left-0 right-0 z-50
              h-16 border-t px-2
    
              [&>ul]:flex
              [&>ul]:h-full
              [&>ul]:items-center
              [&>ul]:justify-around
            `
            : `
              min-h-screen border-r p-3
              ${collapsed ? 'w-16' : 'w-64'}
            `
    }
      `,
    item: ({isActive, collapsed, isMobile}: SidebarClassNameProps) => `
        flex h-10 items-center rounded-md transition-colors duration-150
        [&>svg]:shrink-0
        ${
        isMobile || collapsed
            ? 'w-10 justify-center p-0'
            : 'w-full gap-3 px-3'
    }
        ${isActive ? 'bg-gray-200' : 'hover:bg-gray-100'}
      `,

    group: "group relative",

    itemIcon: "shrink-0",

    trigger: ({isOpen, isActive, collapsed, isMobile}: SidebarClassNameProps) => `
        flex h-10 items-center rounded-md mt-1 transition-colors duration-150
        [&>svg]:shrink-0
        ${
        isMobile || collapsed
            ? 'w-10 justify-center p-0'
            : 'w-full gap-3 px-3'
    }
    
        ${isOpen || isActive ? 'bg-gray-200' : 'hover:bg-gray-100'}
      `,
    content: ({collapsed, isOpen, isMobile}: SidebarClassNameProps) => `
      transition-all duration-200 ease-in-out
      ${
        isMobile
            ? `
            fixed left-0 right-0 bottom-16 z-40
            w-full
            border-t border-gray-200 p-3 bg-white shadow-lg-top
            ${
                isOpen
                    ? 'translate-y-0 opacity-100 pointer-events-auto'
                    : 'translate-y-2 opacity-0 pointer-events-none'
            }
          `
            : collapsed
                ? `
              absolute left-full top-0 z-50 ml-2 w-48
              rounded-md border border-gray-200
              bg-white p-2 shadow-lg
    
              before:absolute
              before:right-full
              before:top-0
              before:h-full
              before:w-2
              before:content-['']

              ${
                    isOpen
                        ? 'translate-x-0 opacity-100 pointer-events-auto'
                        : 'translate-x-1 opacity-0 pointer-events-none group-hover:translate-x-0 group-hover:opacity-100 group-hover:pointer-events-auto'
                }
            ` : 'block'
    }
    `,

    groupedItem: ({isActive, collapsed, isMobile}: SidebarClassNameProps) => `
        flex h-10 w-full items-center rounded-md px-3
        text-left text-sm m-1 transition-all duration-150
        
        ${isMobile ? "bg-gray-50" : ""}
    
        ${
        !collapsed && !isMobile
            ? `
              before:content-['']
              before:ml-4
              before:mr-3
              before:h-1.5
              before:w-1.5
              before:shrink-0
              before:rounded-full
            `
            : ''
    }
    
        ${
        isActive
            ? 'bg-gray-200 before:bg-gray-900'
            : 'hover:bg-gray-100 before:bg-gray-400'
    }
      `,

    tooltip: `
        pointer-events-none
        absolute left-full top-1/2 z-50 ml-3
        -translate-y-1/2
        whitespace-nowrap
        rounded-md bg-gray-900 px-3 py-2
        text-sm text-white
        opacity-0
        group-hover:opacity-100
        transition-all duration-200 ease-in-out
    
        before:absolute
        before:right-full
        before:top-1/2
        before:-translate-y-1/2
        before:border-4
        before:border-transparent
        before:border-r-gray-900
        before:content-['']
    `,
    itemWrapperClassName: "relative group",
    toggle: `
        flex h-10 w-10 items-center justify-center mt-4
        rounded-md hover:bg-gray-100 transition-colors duration-150
    `,
}
