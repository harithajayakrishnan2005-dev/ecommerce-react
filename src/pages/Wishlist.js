
import "../styles/Wishlist.css";

function Wishlist({ wishlist, setWishlist }) {

    
    const removeWishlist = (id)=>{

        
        setWishlist(
            wishlist.filter(
                item => item.id !== id
            )
        );

    };

    return(

        <div className="wishlist-container">

           
            <h1>
                My Wishlist
            </h1>

           
            <div className="wishlist-grid">

            
            {
                wishlist.length === 0 ?

                
                <h3>
                    No products in wishlist
                </h3>

                :

                wishlist.map((item)=>(

                    <div
                    className="wishlist-card"
                    key={item.id}
                    >

                        
                        <img

                        src={item.image || item.thumbnail}

                        alt={item.title}

                        />
                  
                        <h4>
                            {item.title}
                        </h4>

                       
                        <p>
                            ₹ {item.price}
                        </p>

                        
                        <button
                        onClick={()=>removeWishlist(item.id)}
                        >
                            Remove
                        </button>

                    </div>

                ))

            }

            </div>

        </div>

    );

}

export default Wishlist;