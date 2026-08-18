import React from 'react';
import { Routes, Route, Link } from 'react-router'

// Component placeholders
const Home = () => <h1 className="text-2xl font-bold text-slate-800">Главная страница</h1>
const About = () => <h1 className="text-2xl font-bold text-slate-800">О нас</h1>
const NotFound = () => <h1 className="text-2xl font-bold text-red-500">Here is empty</h1>

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;