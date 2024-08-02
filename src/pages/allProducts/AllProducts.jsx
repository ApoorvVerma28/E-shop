import { useNavigate } from "react-router";
import Layout from "../../components/layout/Layout";
import { useContext } from "react";
import MyContext from "../../context/MyContext";

// productData 



const AllProduct = () => {
    const context = useContext(MyContext);
    const { getProduct, searchkey, setSearchkey, filterType, setFilterType } = context;
    const navigate = useNavigate();
    return (
        <Layout>
            <div className="py-8  px-[50px]">
                <div className=' container mx-auto  mt-5  px-[50px]'>
                    <div className="p-5 rounded-lg drop-shadow-xl border border-gray-200 bg-[#0881794f]">
                    <p className=" px-4 py-2 font-medium text-lg" >
                                Filters
                            </p>
                        <div className="relative">
                            <div className="absolute flex items-center ml-2 h-full">
                                <svg className="w-4 h-4 fill-current text-primary-gray-dark" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                name="searchkey"
                                id="searchkey"
                                value={searchkey}
                                onChange={e => setSearchkey(e.target.value)}
                                placeholder="Search here"
                                className="px-8 py-3 w-full rounded-md bg-white border-transparent outline-0 text-sm " />
                        </div>
                       
                        <div>
                           
                        </div>
                    </div>
                </div>

                {/* Heading  */}
                <div className="p-4">
                    <h1 className=" text-center mb-5 text-4xl font-extrabold">All Products</h1>
                </div>

                <section className="text-gray-600 body-font">
                    <div className="container px-5 lg:px-0 py-5 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            {getProduct.filter((obj) => obj.title.includes(searchkey))
                        .filter((obj) => obj.title.includes(filterType)).map((item, index) => {
                                const { imageUrl, title, price,description } = item
                                return (
                                    <div key={index} className="p-4 w-full md:w-1/4">
                                        <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                            <img
                                                onClick={() => navigate('/productinfo/:id')}
                                                className="lg:h-50  h-50 w-full"
                                                src={imageUrl}
                                                alt="blog"
                                            />
                                            <div className="p-6">
                                                <span className="">
                                                {title}
                                                </span>
                                                <h5 className="">
                                                {description}
                                                </h5>
                                                <h4 className="">
                                                    ₹{price}
                                                </h4>

                                                <div className="flex justify-center ">
                                                    <button className=" w-full text-white py-[4px] rounded-lg font-bold active:scale-105   bg-[#088178] hover:bg-[#1a5a56ee] ">
                                                        Add To Cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}

export default AllProduct;