import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "./card";

const Product = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/products")
            .then((response) => {
                if (Array.isArray(response.data)) {
                    setProducts(response.data);
                } else {
                    console.error("Unexpected response format:", response.data);
                }
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);

    return (
        <div className="flex justify-center mb-20 items-center m-auto w-300">
            <div className="min-h-screen m-auto bg-gray-700 flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold text-center text-white mb-10">Our Products</h1>
                <div className="flex gap-10 flex-wrap">
                    {products.map((product) => (
                        <Card
                            key={product._id}
                            name={product.name}
                            price={product.price}
                            image={`http://localhost:8000/uploads/${product.images?.[0]}`}
                            onAddToCart={() => console.log("Added to cart:", product.name)}
                            onBuyNow={() => console.log("Buying:", product.name)}
                            onEdit={() => navigate(`/edit-product/${product._id}`)} // Added edit functionality here
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Product;