import React, { useEffect, useState } from 'react'
import { ProductCard } from '../components/ProductCard/ProductCard';
import { getProducts } from "@meli-store/api";

export const ProductsScreen = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().subscribe(data => {
            setProducts(data);
        })
    }, []);

    return (
        <section className="container">
            <div className="row row-cols-auto">
                {products.map((product) => (
                    <div className="col" key={product.id}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </section>
    )
}
