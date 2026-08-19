import {Sidebar} from "./../components/sidebar"
import {useLocation, useNavigate} from "react-router"
import {
    LayoutDashboard,
    Package,
    ShoppingCart,
    Truck,
    Settings,
    PanelLeftClose,
    PanelLeftOpen,
    Smile
} from 'lucide-react';

const routes = {
    dashboard: '/dashboard',
    products: '/products',
    orders: '/orders',
    suppliers: '/suppliers',
    list: '/list',
    review: '/review',
    notifications: '/notifications'
  } as const;

const styles = {
    sidebar: ({ collapsed }) => `
         min-h-screen border-r border-gray-200 bg-white p-3
         ${collapsed ? 'w-16' : 'w-64'}
        `,
    item: ({ isActive, collapsed }) => `
        h-10 flex items-center rounded-md px-3 py-2 m-1 w-full gap-3
        ${collapsed ? 'w-12 justify-center' : 'w-full gap-3'}
        ${isActive ? 'bg-gray-200' : 'hover:bg-gray-100'}
      `,
    group: "group relative",
    content: ({collapsed, isOpen}) => `
          ${
        collapsed
            ? `
                absolute left-full top-0 z-50 ml-2 w-48
                rounded-md border border-gray-200 bg-white p-2 shadow-lg
        
                before:absolute
                before:right-full
                before:top-0
                before:h-full
                before:w-2
                before:content-['']
        
                ${isOpen ? 'block' : 'hidden group-hover:block'}
              `
            : 'block'
    }
        `,
    trigger: ({ isOpen, isActive, collapsed }) => `
        flex items-center rounded-md px-3 py-2 w-full gap-3 m-1
        ${collapsed ? 'w-12 justify-center' : 'w-full gap-3'}
        ${isOpen || isActive ? 'bg-gray-100' : 'hover:bg-gray-100'}
      `,
    groupedItem: ({ isActive, collapsed }) => `
        h-10 flex w-full items-center rounded-md px-3 py-2 m-1
        text-left text-sm
        
        ${collapsed ? "" : 
            `before:mr-3 before:h-1.5 before:w-1.5 before:ml-4 before:shrink-0 before:rounded-full`}
        
        ${isActive ? 'bg-gray-200 before:bg-gray-900'
          : 'hover:bg-gray-100 before:bg-gray-400'}
        `,
    toggle: "rounded-md px-3 py-2"
}

const RouterSidebar = () => {
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <Sidebar className={styles.sidebar} >
            <Sidebar.Item
                isActive={location.pathname === routes.dashboard}
                onSelect={() => navigate(routes.dashboard)}
                className={styles.item}
                icon={<Smile size={20} className="shrink-0"/>}
            >
                Dashboard
            </Sidebar.Item>

            <Sidebar.Group
                id="inventory"
                className={styles.group}
            >
                <Sidebar.Trigger
                    className={styles.trigger}
                    icon={<Truck size={24} className="shrink-0"/>}
                    isActive={[
                        routes.products,
                        routes.orders,
                        routes.suppliers,
                    ].includes(location.pathname)}
                >
                    Inventory
                </Sidebar.Trigger>

                <Sidebar.Content
                    className={styles.content}
                >
                    <Sidebar.Item
                        isActive={location.pathname === routes.products}
                        onSelect={() => navigate(routes.products)}
                        className={styles.groupedItem}
                    >
                        Products
                    </Sidebar.Item>
                    <Sidebar.Item
                        isActive={location.pathname === routes.orders}
                        onSelect={() => navigate(routes.orders)}
                        className={styles.groupedItem}
                    >
                        Orders
                    </Sidebar.Item>
                    <Sidebar.Item
                        isActive={location.pathname === routes.suppliers}
                        onSelect={() => navigate(routes.suppliers)}
                        className={styles.groupedItem}
                    >
                        Suppliers
                    </Sidebar.Item>
                </Sidebar.Content>
            </Sidebar.Group>

            <Sidebar.Group
                id="clients"
                className={styles.group}
            >
                <Sidebar.Trigger
                    className={styles.trigger}
                    icon={<ShoppingCart size={24} className="shrink-0"/>}
                    isActive={[
                        routes.list,
                        routes.review,
                        routes.notifications,
                    ].includes(location.pathname)}
                >
                    Clients
                </Sidebar.Trigger>

                <Sidebar.Content
                    className={styles.content}
                >
                    <Sidebar.Item
                        isActive={location.pathname === routes.list}
                        onSelect={() => navigate(routes.list)}
                        className={styles.groupedItem}
                    >
                        List
                    </Sidebar.Item>
                    <Sidebar.Item
                        isActive={location.pathname === routes.review}
                        onSelect={() => navigate(routes.review)}
                        className={styles.groupedItem}
                    >
                        Review
                    </Sidebar.Item>
                    <Sidebar.Item
                        isActive={location.pathname === routes.notifications}
                        onSelect={() => navigate(routes.notifications)}
                        className={styles.groupedItem}
                    >
                        Notifications
                    </Sidebar.Item>
                </Sidebar.Content>
            </Sidebar.Group>
            <Sidebar.Toggle
                className={styles.toggle}
            >
                {(collapsed =>
                    collapsed ? <PanelLeftOpen /> : <PanelLeftClose />)}
            </Sidebar.Toggle>
        </Sidebar>
    );
};

export default RouterSidebar;