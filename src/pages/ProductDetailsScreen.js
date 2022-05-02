import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProductById, addProductToCar } from '@meli-store/api';

export const ProductDetailsScreen = () => {

  const [product, setProduct] = useState({});

  const { productId } = useParams();

  useEffect(() => {
    getProductById(productId)
      .then((response) => {
        response.price = currencyFormat(response.price);
        setProduct(response);
      });
  }, [productId]);

  const currencyFormat = (num) => {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <h1 className="display-3">{product.title}</h1>
        <h2 className="display-5 mt-3">{product.price}</h2>
        <img
          style={{ maxWidth: "800px" }}
          className="rounded img-fluid mt-5 mx-auto"
          src={product.pictures && product.pictures[0].url}
          alt={product.pictures && product.pictures[0].id}
        />
        <button onClick={() => { addProductToCar(product) }} type="button" class="btn btn-dark">Agregar al carrito</button>
      </div>
    </div>
  )
}
