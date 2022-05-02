import React from 'react'
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
    return (
        <Link to={`/producto/${product.id}`}>
            <div className="poduct-card card" style={{ width: "250px" }}>
                <figure className="poduct-card__image">
                    <img
                        src={product.thumbnail}
                        className="card-img-top"
                        alt={product.title}
                    />
                </figure>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                </div>
            </div>
        </Link>
    );
};
