import React, { useContext } from 'react'
import MyContext from '../../context/MyContext'

function UpdateProduct() {
    const context = useContext(MyContext)
    const {products,setProducts,updateProduct} = context;
    return (
        <div>
            <div className=' flex justify-center items-center h-screen'>
                <div className=' bg-gray-300 px-10 py-10 rounded-xl '>
                    <div className="">
                        <h1 className='text-center text-black text-xl mb-4 font-bold'>Update Product</h1>
                    </div>
                    <div>
                        <input type="text"
                            name='title'
                            onChange={(e) => setProducts({ ...products, title: e.target.value })} value={products.title}
                            className=' bg-white mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black placeholder:text-black outline-none'
                            placeholder='Product title'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='price'
                            onChange={(e) => setProducts({ ...products, price: e.target.value })} value={products.price}
                            className=' bg-white  mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black  placeholder:text-black outline-none'
                            placeholder='Product price'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='imageurl'
                            onChange={(e) => setProducts({ ...products, imageUrl: e.target.value })} value={products.imageUrl}
                            className=' bg-white  mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black  placeholder:text-black outline-none'
                            placeholder='Product imageUrl'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='category'
                            onChange={(e) => setProducts({ ...products, category: e.target.value })} value={products.category}
                            className=' bg-white  mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-black  placeholder:text-black outline-none'
                            placeholder='Product category'
                        />
                    </div>
                    <div>
                       <textarea cols="30" rows="10" name='title'
                        onChange={(e) => setProducts({ ...products, description: e.target.value })}
                            className=' bg-white  mb-4 px-2 h-10 py-2 w-full lg:w-[20em] rounded-lg text-black placeholder:text-black outline-none'
                            placeholder='Product description'>

                       </textarea>
                    </div>
                    <div className=' flex justify-center mb-3'>
                        <button onClick={updateProduct}
                            className=' bg-[#088178]  hover:bg-[#1a5a56ee] active:scale-105 w-full text-white font-bold  px-2 py-2 rounded-lg'>
                            Update Product
                        </button>
                    </div>
                 
                </div>
            </div>
        </div>
    )
}

export default UpdateProduct