import axios from "axios";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { Product } from "./Product";
import { useSearchParams } from "react-router";
import "./HomePage.css";

export function HomePage({ cart, addToCart }) {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get(`/api/products?search=${search}`);
      setProducts(response.data);
    };
    getHomeData();
  }, [search]);

  return (
    <>
      <title>Ecommerce Project</title>
      <Header cart={cart} />

      <div className="home-page">
        <div className="products-grid">
          {products.map((product) => {
            return (
              <Product
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
