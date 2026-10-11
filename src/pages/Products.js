import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import "../styles/Products.css";

function Products({ cart, setCart, wishlist, setWishlist }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const location = useLocation();
    const category = location.state?.category;

 
    useEffect(() => {

        setLoading(true);

        let url = "https://dummyjson.com/products";

        if (category) {
            url = `https://dummyjson.com/products/category/${category}`;
        }

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });

    }, [category]);

    
    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );


    return (

        <div className="products-container">

            <h1>
                {
                    category
                        ? category
                              .replace("-", " ")
                              .replace(/\b\w/g, (c) => c.toUpperCase()) + " Products"
                        : "All Products"
                }
            </h1>
           

            <input
                type="text"
                className="search-bar"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {
                loading ? (

                    <h2 className="loading">
                        Loading Products...
                    </h2>

                ) : (

                    <div className="product-grid">

                        {
                            filteredProducts.length > 0 ?
                            

                                filteredProducts.map((product) => (

                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        cart={cart}
                                        setCart={setCart}
                                        wishlist={wishlist}
                                        setWishlist={setWishlist}
                                    />

                                ))
                                :

                                <h2 className="no-product">
                                    No Products Found
                                </h2>
                        }

                    </div>

                )
            }

        </div>

    );

}

export default Products;