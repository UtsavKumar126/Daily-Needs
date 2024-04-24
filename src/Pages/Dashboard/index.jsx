import React, { useContext, useEffect, useState } from "react";
import styles from "./styles.module.css";
import add1 from "../../assets/banner.jpg";
import { CarouselDefault } from "../../Components/DashBoard/AdCarousal";
import CategoryChips from "../../Components/DashBoard/CategoryChips";
import { CategoryContext } from "../../Context/CategoryProvider";
import ProductCard from "../../Components/DashBoard/ProductCard/Index";
import { useSelector, useDispatch } from "react-redux";
import PaginationControlled from "../../Components/DashBoard/Pagination/Pagination";
import NavBar from "../../Components/Comman/Navbar";
import Footer from "../../Components/Comman/Footer";
import Head from "../../Components/DashBoard/Head";
import { useNavigate } from "react-router-dom";
import ad1 from "../../assets/ad1.jpg";
import ad2 from "../../assets/ad2.jpg";
import ad3 from "../../assets/ad3.jpg";
import ad4 from "../../assets/ad4.jpg";
import ad5 from "../../assets/ad5.jpg";
import ad6 from "../../assets/ad6.jpg";
import ad7 from "../../assets/a7.jpg";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../Firebase";
import { pushToCart } from "../../Redux/features/Cart/CartSlice";
import { pushToWatchList } from "../../Redux/features/Watchlist/WatchlistSlice";
import { pushToOrders } from "../../Redux/features/orders/ordersSlice";

function DashBoard() {
  const { selected, setSelected, search, categories } =
    useContext(CategoryContext);
  const { loading, products, error } = useSelector((state) => state.product);
  const [paginated, setPaginatedProducts] = useState([]);
  const [page, setPage] = useState(1);
  const state = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const [login,setLogin]=useState(localStorage.getItem('id'));
  const dispatch=useDispatch();

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (login) {
        const confirmationMessage =
          "You have unsaved changes. Are you sure you want to leave this page?";
        e.returnValue = confirmationMessage;
        return confirmationMessage;
      }
    };
    const handleUnloadEvent = () => {
      const auth = getAuth(app);
      signOut(auth).then((res) => {
        dispatch(pushToCart(localStorage.getItem("id")));
        dispatch(pushToWatchList(localStorage.getItem("id")));
        dispatch(pushToOrders(localStorage.getItem("id")));
        localStorage.removeItem("id");
      });
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("unload",handleUnloadEvent)

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("unload", handleUnloadEvent);
    };
  }, []);


  const handleChange = (e, value) => {
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
          <aside className={styles.side}>
            <section className={styles.category}>
              {categories.map((category, i) => (
                <div
                  key={i}
                  className={styles.innerCat}
                  onClick={() => navigate("/category/" + category)}
                >
                  {category.toUpperCase()}
                </div>
              ))}
            </section>
            <section className={styles.images}>
              <img src={ad1} alt="ad1" />
              <img src={ad2} alt="ad1" />
              <img src={ad3} alt="ad1" />
              <img src={ad4} alt="ad1" />
            </section>
          </aside>
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
                  products.products &&
                  paginated.length === 0 &&
                  products.products
                    .filter((product, i) => i < 10)
                    .map((product, i) => {
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
        <section className={styles.images2}>
          <img src={ad5} alt="ad5" />
          <img src={ad6} alt="ad5" />
          <img src={ad3} alt="ad3" />
          <img src={ad7} alt="ad7" />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default DashBoard;
