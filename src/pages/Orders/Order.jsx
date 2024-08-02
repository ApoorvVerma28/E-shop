import React, { useContext } from 'react'
import Layout from "../../components/layout/Layout";
import MyContext from "../../context/MyContext";

const UserDashboard = () => {

   

    let currentUser;
    let userid = null;
    
    // Safely parse the currentUser from localStorage
    try {
        currentUser = JSON.parse(localStorage.getItem('currentUser'));
        userid = currentUser ? currentUser.user.uid : null;
    } catch (error) {
        console.error("Failed to parse currentUser from localStorage:", error);
    }
    const context = useContext(MyContext)
    const { order } = context


    return (
        <Layout>
            <div className=" container mx-auto px-4 py-5 lg:py-8">


                {/* bottom  */}
                <div className="bottom">
                    {/* main 1 */}
                    <div className="mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0">
                        {/* text  */}
                        <h2 className=" text-2xl lg:text-3xl font-bold">Order Details</h2>

                        {/* right  */}
                        {order.length > 0 ?
                            (<div className="flex-1">
                                <div className="p-8">
                                    <ul className="-my-7 divide-y divide-gray-200">
                                        {order.filter(obj => obj.userid == userid).map((order) => (
                                            <li
                                                key={order.id}
                                                className="flex flex-col justify-between space-x-5 py-7 md:flex-row"
                                            >
                                                <div className="flex flex-1 items-stretch">
                                                    <div className="flex-shrink-0">
                                                        <img
                                                            className="h-20 w-20 rounded-lg border border-gray-200 object-contain"
                                                            src={product.imageSrc}
                                                            alt={product.imageSrc}
                                                        />
                                                    </div>

                                                    <div className="ml-5 flex flex-col justify-between">
                                                        <div className="flex-1">
                                                            <p className="text-sm font-bold text-gray-900">{item.title}</p>

                                                        </div>


                                                    </div>
                                                </div>

                                                <div className="ml-auto flex flex-col items-end justify-between">
                                                    <p className="text-right text-sm font-bold text-gray-900">{item.price}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                            </div>) :
                            (
                                <h2 className=' text-center tex-2xl text-white'>Not Order</h2>
                            )}

                    </div>
                </div>
            </div>

        </Layout>
    );
}

export default UserDashboard;