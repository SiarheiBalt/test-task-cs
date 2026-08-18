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
    sidebar: "w-64 min-h-screen border-r border-gray-200 bg-white p-3",
    item: `flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm 
           hover:bg-gray-100
           aria-[current=page]:bg-gray-200`,
    group: "",
    trigger: `flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm hover:bg-gray-100
              data-[active=true]:bg-gray-100
              aria-[expanded=true]:bg-gray-50`,
    groupedItem: `flex w-full items-center rounded-md px-3 py-2
                  text-left text-sm hover:bg-gray-100

                  before:mr-3 before:h-1.5 before:w-1.5 before:ml-4
                  before:shrink-0 before:rounded-full before:bg-gray-400

                  aria-[current=page]:bg-gray-200
                  aria-[current=page]:before:bg-gray-900`,
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
                icon={<Smile size={20}/>}
            >
                Dashboard
            </Sidebar.Item>

            <Sidebar.Group
                id="inventory"
                className={styles.group}
            >
                <Sidebar.Trigger
                    className={styles.trigger}
                    icon={<Truck size={24}/>}
                    isActive={[
                        routes.products,
                        routes.orders,
                        routes.suppliers,
                    ].includes(location.pathname)}
                >
                    Inventory
                </Sidebar.Trigger>

                <Sidebar.Content>
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
                isActive={[
                    routes.list,
                    routes.review,
                    routes.notifications,
                ].includes(location.pathname)}
            >
                <Sidebar.Trigger
                    className={styles.trigger}
                    icon={<ShoppingCart size={24}/>}
                    isActive={[
                        routes.list,
                        routes.review,
                        routes.notifications,
                    ].includes(location.pathname)}
                >
                    Clients
                </Sidebar.Trigger>

                <Sidebar.Content>
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