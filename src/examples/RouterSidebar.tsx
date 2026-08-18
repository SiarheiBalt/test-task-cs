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

const RouterSidebar = () => {
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <Sidebar>
            <Sidebar.Item
                isActive={location.pathname === routes.dashboard}
                onSelect={() => navigate(routes.dashboard)}
                className="flex"
                icon={<Smile className="pr-2"/>}
            >
                Dashboard
            </Sidebar.Item>

            <Sidebar.Group id="inventory">
                <Sidebar.Trigger
                    className="flex"
                    icon={<Truck className="pr-2"/>}
                >
                    Inventory
                </Sidebar.Trigger>

                <Sidebar.Content>
                    <Sidebar.Item
                        isActive={location.pathname === routes.products}
                        onSelect={() => navigate(routes.products)}
                        className="block ml-6"
                    >
                        Products
                    </Sidebar.Item>
                    <Sidebar.Item
                        isActive={location.pathname === routes.orders}
                        onSelect={() => navigate(routes.orders)}
                        className="block ml-6"
                    >
                        Orders
                    </Sidebar.Item>
                    <Sidebar.Item
                        isActive={location.pathname === routes.suppliers}
                        onSelect={() => navigate(routes.suppliers)}
                        className="block ml-6"
                    >
                        Suppliers
                    </Sidebar.Item>
                </Sidebar.Content>
            </Sidebar.Group>

            <Sidebar.Group id="clients">
                <Sidebar.Trigger className="block">Clients</Sidebar.Trigger>

                <Sidebar.Content>
                    <Sidebar.Item
                        isActive={location.pathname === routes.list}
                        onSelect={() => navigate(routes.products)}
                        className="block"
                    >
                        List
                    </Sidebar.Item>
                    <Sidebar.Item
                        isActive={location.pathname === routes.review}
                        onSelect={() => navigate(routes.orders)}
                        className="block"
                    >
                        Review
                    </Sidebar.Item>
                    <Sidebar.Item
                        isActive={location.pathname === routes.notifications}
                        onSelect={() => navigate(routes.suppliers)}
                        className="block"
                    >
                        Notifications
                    </Sidebar.Item>
                </Sidebar.Content>
            </Sidebar.Group>
            <Sidebar.Toggle
                className=""
            >
                {(collapsed => collapsed ? '>' : '<')}
            </Sidebar.Toggle>
        </Sidebar>
    );
};

export default RouterSidebar;