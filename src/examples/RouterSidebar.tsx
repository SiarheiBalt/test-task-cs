import {Sidebar} from "./../components/sidebar"
import {useLocation, useNavigate} from "react-router"
import {
    Package,
    ShoppingCart,
    Truck,
    Settings,
    PanelLeftClose,
    PanelLeftOpen,
    Smile
} from 'lucide-react'
import {routes} from "../routes";
import {styles} from "../components/sidebar/styles"


const RouterSidebar = () => {
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <Sidebar className={styles.sidebar} >
            <Sidebar.Item
                isActive={location.pathname === routes.dashboard}
                onSelect={() => navigate(routes.dashboard)}
                className={styles.item}
                icon={<Smile size={20} className={styles.itemIcon} />}
                itemWrapperClassName={styles.itemWrapperClassName}
                tooltipClassName={styles.tooltip}
            >
                Dashboard
            </Sidebar.Item>

            <Sidebar.Item
                isActive={location.pathname === routes.package}
                onSelect={() => navigate(routes.package)}
                className={styles.item}
                icon={<Package size={20} className={styles.itemIcon} />}
                itemWrapperClassName={styles.itemWrapperClassName}
                tooltipClassName={styles.tooltip}
            >
                Package
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
                    icon={<ShoppingCart size={24} className={styles.itemIcon} />}
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

            <Sidebar.Item
                isActive={location.pathname === routes.settings}
                onSelect={() => navigate(routes.settings)}
                className={styles.item}
                icon={<Settings size={20} className={styles.itemIcon} />}
                itemWrapperClassName={styles.itemWrapperClassName}
                tooltipClassName={styles.tooltip}
            >
                Settings
            </Sidebar.Item>

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