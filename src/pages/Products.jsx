import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';


const Products = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/");
    };

    const productsPerPage = 8;

    useEffect(() => {

        fetchProducts();


    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(
                "https://dummyjson.com/products"
            );
            console.log(response.data);

            setProducts(response.data.products);
        } catch (error) {
            console.log(error);
        }
        finally {

            setLoading(false);

        }
    };

    // Pagination Logic
    const indexOfLastProduct =
        currentPage * productsPerPage;

    const indexOfFirstProduct =
        indexOfLastProduct - productsPerPage;

    const currentProducts = products.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

    const totalPages = Math.ceil(
        products.length / productsPerPage
    );
    if (loading) {
        return (<Loader />)
    };

    return (
        <>
            <Navbar/>

            <div className="container py-5">

                {/* Heading */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="fw-bold">
                        Products
                    </h2>
                    <button
                        className="btn btn-primary mb-4"
                        onClick={() => navigate("/dashboard")}
                    >
                        Back
                    </button>
                </div>

                {/* Product Cards */}
                <div className="row g-4">

                    {currentProducts.map((product) => (
                        <div
                            className="col-md-3"
                            key={product.id}
                        >
                            <div className="card shadow border-0 h-100">

                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    className="card-img-top"
                                    style={{
                                        height: "220px",
                                        objectFit: "cover",
                                    }}
                                />

                                <div className="card-body d-flex flex-column">

                                    <h5 className="card-title">
                                        {product.title}
                                    </h5>

                                    <p className="text-muted small">
                                        {product.description.slice(0, 60)}...
                                    </p>

                                    <h5 className="text-primary fw-bold">
                                        ${product.price}
                                    </h5>

                                    <p className="mb-3">
                                        ⭐ {product.rating}
                                    </p>

                                    <Link
                                        to={`/products/${product.id}`}
                                        className="btn btn-dark mt-auto"
                                    >
                                        View Details
                                    </Link>

                                </div>
                            </div>
                        </div>
                    ))}


                </div>
                {/* Pagination */}
                <div className="d-flex justify-content-center mt-5 gap-2">

                    <button
                        className="btn btn-outline-primary"
                        disabled={currentPage === 1}
                        onClick={() =>
                            setCurrentPage(currentPage - 1)
                        }
                    >
                        Prev
                    </button>

                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            className={`btn ${currentPage === index + 1
                                ? "btn-primary"
                                : "btn-outline-primary"
                                }`}
                            onClick={() =>
                                setCurrentPage(index + 1)
                            }
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button
                        className="btn btn-outline-primary"
                        disabled={currentPage === totalPages}
                        onClick={() =>
                            setCurrentPage(currentPage + 1)
                        }
                    >
                        Next
                    </button>

                </div>

            </div>


        </>
    )
}

export default Products
