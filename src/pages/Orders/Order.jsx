import React, { useContext } from 'react'
import Layout from "../../components/layout/Layout";
import MyContext from "../../context/MyContext";

const UserDashboard = () => {


    const order = [
        {
          id: 1,
          imageSrc: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQRcNhZ55ix_vidEN5hK228FhyQhxPIvJdqjsao9pKXVgoMplf07k7ZsPiv7eqCcflFRVRLud-AoALCM3TwL_HgGp9qDgjR5cH_f02wPXA",
          title: "Men's Casual Shirt",
          price: 1299,
        },
        {
          id: 2,
          imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVdmcpHvyXO1VI-ik0VWO5PkLPLIAy86-GQ&s",
          title: "Slim Fit Jeans",
          price: 1599,
        },
        {
          id: 3,
          imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOG-HpbrEsqKIaVzM2eeG_H0TyNXoCaVuajA&s",
          title: "Graphic T-Shirt",
          price: 799,
        },
        {
          id: 4,
          imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWevwP5lfcTwwGTShX-I94C6w5W8P_9Ky5Pw&s",
          title: "Women's Floral Dress",
          price: 1999,
        },
        {
          id: 5,
          imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1WhXoIYwPChq5aOzdnRHIkNhp3WAivb5_rg&s",
          title: "Leather Jacket",
          price: 2999,
        },
        {
          id: 6,
          imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb2dT0NRLoymN03y7_l55lxmo02q3fPq4Kyg&s",
          title: "Men's Ethnic Kurta",
          price: 1399,
        },
     
      ];
      
 
      


    return (
        <Layout>
            <div className=" container mx-auto px-4 py-5 lg:py-8">


                {/* bottom  */}
                <div className="bottom">
                    {/* main 1 */}
                    <div className="mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0">
                        {/* text  */}
                        <h2 className=" text-3xl mb-5 ml-[40%]  font-bold">Order Details</h2>

                        {/* right  */}
                        {order.length > 0 ?
                            (<div className="flex-1">
                                <div className="p-8">
                                    <ul className="-my-7 divide-y divide-gray-200">
                                        {order.map((order) => (
                                            <li
                                                key={order.id}
                                                className="flex justify-evenly py-5"
                                            >
                                                <div className="flex items-stretch justify-around">
                                                    <div className="flex-shrink-0">
                                                        <img
                                                            className="h-20 w-20 rounded-lg border border-gray-200 object-contain"
                                                            src={order.imageSrc}
                                                            alt={order.imageSrc}
                                                        />
                                                    </div>

                                                    <div className="ml-5 flex justify-between">
                                                        <div className="flex-1">
                                                            <p className="text-xl font-bold text-gray-900">{order.title}</p>

                                                        </div>


                                                    </div>
                                                </div>

                                                <div className=" ml-auto">
                                                    <p className=" text-xl font-bold  text-gray-900"> ₹{order.price}</p>
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