import { Routes, Route } from 'react-router'

// Component placeholders
const Dashboard = () => <h1 className="text-2xl font-bold text-slate-800 p-3">Dashboard page</h1>
const Products = () => <h1 className="text-2xl font-bold text-slate-800 p-3">Products page</h1>
const NotFound = () => <h1 className="text-2xl font-bold text-red-500 p-3">Here is empty</h1>

export const routes = {
    dashboard: '/dashboard',
    products: '/products',
    orders: '/orders',
    suppliers: '/suppliers',
    list: '/list',
    review: '/review',
    notifications: '/notifications',
    settings: '/settings',
    package: '/package'
} as const;

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={routes.dashboard} element={<Dashboard />} />
            <Route path={routes.products} element={<Products />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;