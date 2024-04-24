import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";
import ProductCard from "../../Components/DashBoard/ProductCard/Index";
import { CircularProgress } from "@mui/material";

function ProductCategoryPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchByCategory() {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/category/${category}?limit=10`
        );
        const data = await response.json();
        console.log(data);
        setProducts(data.products);
      } catch (error) {
        console.error(error);
      }
    }
    fetchByCategory();
  }, [category]);
  return (
    <div>
      <div className={styles.category}>{category.toUpperCase()}</div>
      {products.length !== 0 ? (
        <div className={styles.container}>
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      ) : (
        <div className={styles.loader}>
          <CircularProgress />
        </div>
      )}
    </div>
  );
}

export default ProductCategoryPage;
