import { useEffect, useState } from "react";
import axios from "axios";
import {
    useParams,
    useNavigate,
} from "react-router-dom";
import Loader from "../components/Loader";

const ProductDetails = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        try {

            const response = await axios.get(
                `${API_URL}/products/${id}`
            );

            setProduct(response.data);

        } catch (error) {
            console.log(error);
        }
    };

    if (!product) {
        return <Loader />;
    }

    return (
        <div className="container py-5">

            {/* Back Button */}
            <button
                className="btn btn-primary mb-4"
                onClick={() => navigate("/products")}
            >
                Back to Products
            </button>

            <div className="card shadow border-0 p-4">

                <div className="row align-items-center">

                    {/* Product Image */}
                    <div className="col-md-5 text-center">

                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="img-fluid rounded"
                            style={{
                                maxHeight: "400px",
                                objectFit: "cover",
                            }}
                        />

                    </div>

                    {/* Product Details */}
                    <div className="col-md-7">

                        <h1 className="fw-bold mb-3">
                            {product.title}
                        </h1>

                        <p className="text-muted fs-5">
                            {product.description}
                        </p>

                        <hr />

                        <h3 className="text-primary fw-bold">
                            ${product.price}
                        </h3>

                        <p className="fs-5">
                            ⭐ Rating: {product.rating}
                        </p>

                        <p className="fs-5">
                            📦 Stock: {product.stock}
                        </p>

                        <p className="fs-5">
                            🏷️ Brand: {product.brand}
                        </p>

                        <p className="fs-5">
                            📂 Category: {product.category}
                        </p>

                        <button className="btn btn-dark btn-lg mt-3">
                            Add to Cart
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductDetails;