import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProductsScreen } from '../pages/ProductsScreen';
import { ProductDetailsScreen } from '../pages/ProductDetailsScreen';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<ProductsScreen />} />
            <Route path="/producto/:productId" element={<ProductDetailsScreen />} />
        </Routes>
    )
}
