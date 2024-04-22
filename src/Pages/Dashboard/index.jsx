import React, { useContext, useEffect, useState } from "react";
import styles from "./styles.module.css";
import add1 from "../../assets/banner.jpg";
import { CarouselDefault } from "../../Components/DashBoard/AdCarousal";
import CategoryChips from "../../Components/DashBoard/CategoryChips";
import { CategoryContext } from "../../Context/CategoryProvider";
import ProductCard from "../../Components/DashBoard/ProductCard/Index";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../Redux/features/product/productAction";
import PaginationControlled from "../../Components/DashBoard/Pagination/Pagination";
import NavBar from "../../Components/Comman/Navbar";
import Footer from "../../Components/Comman/Footer";
import { pushToCart } from "../../Redux/features/Cart/CartSlice";
import Head from "../../Components/DashBoard/Head";
import { bringToCart } from "../../Redux/features/Cart/CartActions";

function DashBoard() {
  const { selected, setSelected, search } = useContext(CategoryContext);
  const { loading, products, error } = useSelector((state) => state.product);
  const [paginated, setPaginatedProducts] = useState([]);
  const [page, setPage] = useState(1);
  const state = useSelector((state) => state.cart);

  const handleChange = (e,value) => {
    setPage(value);
    var prevIndex = (value - 1) * 10;
    setPaginatedProducts(products.products.slice(prevIndex, prevIndex + 10));
  };

  return (
    <>
      <Head />
      <NavBar />
      <div className={styles.mainDiv}>
        <img src={add1} alt="" className={styles.banner} />
        <div className={styles.innerGrid}>
          <aside className={styles.side}></aside>
          <main className={styles.main}>
            <section className={styles.carousal}>
              <CarouselDefault />
            </section>
            <section style={{ width: "100%" }}>
              <div className={styles.categories}>Selected Categories</div>
              <div className={styles.chips}>
                {selected.length > 0 ? (
                  selected.map((item, i) => <CategoryChips name={item} />)
                ) : (
                  <div>No Categories Selected......</div>
                )}
              </div>
            </section>
            <section className={styles.products}>
              <p>Products</p>
              <div className={styles.productGrid}>
                {!search &&
                  selected.length === 0 &&
                  products &&
                  products.products &&paginated.length===0&&
                  products.products.filter((product,i)=>i<10).map((product, i) => {
                    return <ProductCard product={product} key={i} />;
                  })}

                  {!search &&
                  selected.length === 0 &&
                  products &&
                  products.products &&
                  paginated.map((product, i) => {
                    return <ProductCard product={product} key={i} />;
                  })}

                {!search &&
                  selected.length > 0 &&
                  products &&
                  products.products &&
                  products.products
                    .filter((product, i) => selected.includes(product.category))
                    .map((product, i) => {
                      console.log(product.title);
                      return <ProductCard product={product} key={i} />;
                    })}
                {search &&
                  selected.length === 0 &&
                  products &&
                  products.products &&
                  products.products
                    .filter((product) => {
                      return product.title
                        .toLowerCase()
                        .includes(search.toLowerCase());
                    })
                    .map((product, i) => {
                      return <ProductCard product={product} key={i} />;
                    })}
              </div>
            </section>
            {selected.length === 0 && !search && (
              <PaginationControlled page={page} handleChange={handleChange} />
            )}
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DashBoard;
