import "../styles/About.css";
import { Link } from "react-router-dom";

function About() {
    return (

        <div className="container mt-5">
            <div className="about-box">

                <h1>About Us</h1>

                <p>
                    Welcome to our E-Commerce website.
                </p>

                <p>
                    We provide a simple and easy online shopping
                    experience where users can explore products,
                    view product details, add items to cart,
                    and save favourite products in wishlist.
                </p>

                <p>
                    This project is developed using React,
                    Bootstrap, HTML, CSS, JavaScript,
                    and Fake Store API.
                </p>

                <Link to="/products">
                    <button className="btn btn-primary explore-btn">
                        Explore Products
                    </button>
                </Link>

            </div>

        </div>

    );
}

export default About;