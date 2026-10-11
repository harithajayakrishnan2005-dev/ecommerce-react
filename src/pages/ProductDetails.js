import { useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "../styles/ProductDetails.css";
function ProductDetails({ cart, setCart }) {
    const location = useLocation();
    const product = location.state?.product;
    
    const addToCart = () => {

        const alreadyAdded = cart.find(
            item => item.id === product.id
        );

       
        if (alreadyAdded) {
            alert("Product already added to cart");
            return;
        }

       
        setCart([
            ...cart,
            {
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.thumbnail
            }
        ]);

     
        alert("Product added to cart");
    };

   
    if (!product) {
        return <h2>Product not found</h2>;
    }

    return (

        <div className="details-container">

          
            <img
                src={product.thumbnail}
                alt={product.title}
                className="details-image"
            />

         
            <div className="details-info">

             
                <h1>{product.title}</h1>

               
                <p>{product.description}</p>

             
                <h3>Price: ${product.price}</h3>

               
                <button onClick={addToCart}>

                    <FaShoppingCart />

                    Add To Cart

                </button>

            </div>

        </div>

    );
}

export default ProductDetails;