import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const totalProducts = products.length;
  const [productsPerPage, setProductsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(2);

  const lastProduct = productsPerPage * currentPage;
  console.log("El ultimo producto es", lastProduct);
  const firstProduct = lastProduct - productsPerPage;
  console.log("El primer producto es", firstProduct);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="xl:mt-8 xl:block p-5 lg:p-20">
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:mt-8">
          {/* Inicio de la Card */}
          {products.map((product) => (
            <div className="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800" key={product.id}>
              <a href="#" className="overflow-hidden rounded">
                {/* <img className="mx-auto h-44 w-44 dark:hidden" src={product.image} alt="imac image" /> */}
                <img
                  className="mx-auto hidden h-44 w-44 dark:block"
                  src={product.image}
                  alt="imac image"
                />
              </a>
              <div>
                <a
                  href="#"
                  className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                >
                  {product.title}
                </a>
                <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
                  {product.description}
                </p>
              </div>
              <div>
                <p className="text-lg font-bold text-gray-900 dark:text-white">
                  <span>{product.price} </span>
                </p>
              </div>
            </div>
          )).slice(firstProduct, lastProduct)}
          {/* Final de la Card */}
        </div>
      </div>
      <Pagination
        totalProducts={totalProducts}
        productsPerPage={productsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default ProductList;
