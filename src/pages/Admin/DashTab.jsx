import React, { useContext } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../../context/MyContext";

function DashTab() {
  const navigate = useNavigate();

  const context = useContext(MyContext);
  const { getProduct, edithandle, deleteProduct } = context;


  function handleAdd() {
    navigate("/addproduct");
  }

  return (
    <div>
      <Tabs className="w-full my-12">
        <TabList className=" ">
          <Tab className="sm:col-span-1 flex justify-center mb-5 font-semibold">
            <button

              className=" text-3xl font-extrabold  active:scale-110 text-black hover:text-[#088178] "
            >
              Product
            </button>
          </Tab>
        
        </TabList>
        <TabPanel className="px-12">
          <div className="flex w-full justify-end mb-4">
            <button
              className="me-8 px-4 py-1 active:scale-105 font-bold  text-white rounded-xl bg-[#088178] hover:bg-[#1a5a56ee]"
              onClick={handleAdd}
            >
              Add Product
            </button>
          </div>
          <div
            className="overflow-x-auto"
            style={{
              boxShadow: "4px 4px #323232",
              border: "1px solid #323232",
              borderRadius: "10px",
            }}
          >
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-black text-white">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    S.No
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Product Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Update/Remove
                  </th>
                </tr>
              </thead>

              {getProduct.map((item, index) => {
                const { title, price, imageUrl, category, date } = item;
                return (
                  <tbody key={index}>
                    <tr className="bg-white">
                      <td className="px-6 py-4 whitespace-nowrap">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <img
                          className="w-[50px] h-[60px] object-cover "
                          src={imageUrl}
                          alt={title}
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {price}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Link to="/updateproduct" ><button onClick={() => edithandle(item)} className="text-black hover:text-[#088178] font-bold">
                          Update
                        </button>
                        </Link>
                        <span className="font-bold">/</span>
                        <button onClick={() => deleteProduct(item)} className="text-black hover:text-[#088178] font-bold">
                          Remove
                        </button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </TabPanel>
       
       
      </Tabs>
    </div>
  );
}

export default DashTab;
