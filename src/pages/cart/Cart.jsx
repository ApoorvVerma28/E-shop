import Layout from "../../components/layout/Layout";
import { CiTrash } from "react-icons/ci";
import Modal from "../../components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../../redux/CartSlice";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const CartPage = () => {
  const dispatch = useDispatch();
  const deleteCart = (item) => {
    dispatch(deleteFromCart(item)); // Dispatch the action to delete item from cart
    localStorage.removeItem("cart");
    toast.success("Deleted Cart Item");
  };
  const cartItems = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    let temp = 0;
    cartItems.forEach((cartItems) => {
      temp = temp + parseInt(cartItems.price);
    });
    setTotalAmount(temp);
  }, [cartItems]);
  const shipping = parseInt(100);
  const grandTotal = shipping + totalAmount;
  return (
    <Layout>
      <div className="container mx-auto  max-w-7xl  lg:px-0 ">
        <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl px-[50px]">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shopping Cart
          </h1>
          <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <section
              aria-labelledby="cart-heading"
              className="rounded-lg bg-white lg:col-span-8"
            >
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>
              <ul role="list" className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div key={item.id} className="">
                    <li className="flex py-6 sm:py-6 ">
                      <div className="flex-shrink-0">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                          <div>
                            <div className="flex justify-between">
                              <h3 className="text-sm">
                                <span className="font-semibold text-black">
                                  {item.title}
                                </span>
                              </h3>
                            </div>

                            <div className="mt-1 flex items-end">
                              <p className="text-sm font-medium text-gray-900">
                                &nbsp;&nbsp;${item.price}
                              </p>
                              &nbsp;&nbsp;
                              <p className="text-sm font-medium text-green-500">
                                20% Off
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <div className="mb-2">
                      <div
                        onClick={() => deleteCart(item)}
                        className="ml-[80%]  flex "
                      >
                        <button
                          type="button"
                          className="flex items-center space-x-1 px-2 py-1 pl-0"
                        >
                          <CiTrash size={20} className="text-red-500" />
                          <span className="text-lg font-medium text-red-500">
                            Remove
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </ul>
            </section>
            {/* Order summary */}
            <section
              aria-labelledby="summary-heading"
              className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
            >
              <h2
                id="summary-heading"
                className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
              >
                Price Details
              </h2>
              <div>
                <dl className=" space-y-1 px-2 py-4">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-800">Price ({cartItems.length})</dt>
                    <dd className="text-sm font-medium text-gray-900">
                      ${totalAmount}
                    </dd>
                  </div>

                  <div className="flex items-center justify-between py-4">
                    <dt className="flex text-sm text-gray-800">
                      <span>Delivery Charges</span>
                    </dt>
                <dd className="text-sm font-medium text-green-700">${shipping}</dd>
                  </div>
                  <div className="flex items-center justify-between border-y border-dashed py-4 ">
                    <dt className="text-base font-medium text-gray-900">
                      Total Amount
                    </dt>
                    <dd className="text-base font-medium text-gray-900">
                     ${grandTotal}
                    </dd>
                  </div>
                </dl>
                <div className="px-2 pb-4 font-medium text-green-700">
                  <Modal />
                </div>
              </div>
            </section>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
