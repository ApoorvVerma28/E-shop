import Layout from "../../components/layout/Layout";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from "../../redux/CartSlice";
import { fireDB } from "../../components/firebase/FirebaseConfig";

const ProductInfo = () => {
    const [products, setProducts] = useState('');
    const params = useParams();

    const getProductData = async () => {
        try {
            const productTemp = await getDoc(doc(fireDB, "Products", params.id));
            if (productTemp.exists()) {
                console.log("Product Data:", productTemp.data());
                setProducts(productTemp.data());
            } 
        } catch (error) {
            console.log("Error getting document:", error);
        }
    };

    useEffect(() => {
        console.log("Fetching product data for ID:", params.id);
        getProductData();
    }, [params.id]);

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);

    const addCart = (products) => {
        dispatch(addToCart(products));
        toast.success('Added to cart');
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <Layout>
            <section className="py-5 lg:py-16 font-poppins">
                <div className="max-w-6xl px-4 mx-auto">
                    {products && (
                        <div className="flex flex-wrap mb-24 -mx-4">
                            <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                                <div>
                                    <img
                                        className="w-full lg:h-[39em] rounded-lg"
                                        src={products.imageUrl}
                                        alt={products.title}
                                    />
                                </div>
                            </div>
                            <div className="w-full px-4 md:w-1/2">
                                <div className="lg:pl-20">
                                    <div className="mb-6">
                                        <h2 className="max-w-xl mb-6 text-xl font-semibold leading-loose tracking-wide text-[#1a1a1a] md:text-2xl">
                                            {products.title}
                                        </h2>
                                        <div className="flex flex-wrap items-center mb-6">
                                            <ul className="flex mb-4 mr-2 lg:mb-0">
                                                {[...Array(5)].map((_, i) => (
                                                    <li key={i}>
                                                        <a href="#">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={16}
                                                                height={16}
                                                                fill="currentColor"
                                                                className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <p className="inline-block text-2xl font-semibold text-[#1a1a1a]">
                                            <span>${products.price}</span>
                                        </p>
                                    </div>
                                    <div className="mb-6">
                                        <h2 className="mb-2 text-lg font-bold text-[#465b52]">
                                            Description:
                                        </h2>
                                        <p>{products.description}</p>
                                    </div>
                                    <div className="flex flex-wrap items-center mb-6">
                                        <button
                                            onClick={() => addCart(products)}
                                            className="w-full px-4 py-3 text-center text-white bg-[#088178] border hover:bg-[#1a5a56ee] active:scale-105 rounded-xl"
                                        >
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    );
};

export default ProductInfo;
