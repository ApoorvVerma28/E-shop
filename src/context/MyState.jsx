import MyContext from "./MyContext";
import {
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { fireDB } from "../components/firebase/FirebaseConfig";
import { toast } from "react-toastify";
import { setDoc } from "firebase/firestore";

function MyState(props) {
  // const navigate= useNavigate()

  // ******************** ADD Product *****************
  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const addProduct = async () => {
    if (
      products.title == null ||
      products.price == null ||
      products.imageUrl == null ||
      products.category == null ||
      products.description == null
    ) {
      return toast.error("Please fill all fields");
    } else {
      try {
        const productRef = collection(fireDB, "Products");
        await addDoc(productRef, products);
        toast.success("Product Add successfully");
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 800);
        console.lo(products);
        getProductData();
        setProducts("");
        closeModal();
      } catch (error) {
        toast.error(error.msg);
      }
    }
  };

  const [getProduct, setGetProduct] = useState([]);
  const getProductData = async () => {
    try {
      const q = query(collection(fireDB, "Products"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setGetProduct(productsArray);
      });
      return () => data;
    } catch (error) { }
    console.log(error);
  };

  useEffect(() => {
    getProductData();
  }, []);

  const edithandle = (item) => {
    setProducts(item);
  };
  //  update product
  const updateProduct = async (products) => {
    try {
      await setDoc(doc(fireDB, "Products", products.id), products);
      toast.success("Updated Successfully");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 800);
      getProductData();
    } catch (error) {
      console.log(error);
      toast.error("Failed to update product");
    }
  };

  const deleteProduct = async (item) => {
    try {
      await deleteDoc(doc(fireDB, "Products", item.id));
      toast.success("Deleted Successfully");
      getProductData();
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete product");
    }
  };


  const [order, setOrder] = useState([]);

  const getOrderData = async () => {
    
    try {
      const result = await getDocs(collection(fireDB, "orders"))
      const ordersArray = [];
      result.forEach((doc) => {
        ordersArray.push(doc.data());
        
      });
      setOrder(ordersArray);
      console.log(ordersArray);
      
    } catch (error) {
      console.log(error);
      
    }
  }

  const [user, setUser] = useState([]);

  const getUserData = async () => {
   
    try {
      const result = await getDocs(collection(fireDb, "user"))
      const usersArray = [];
      result.forEach((doc) => {
        usersArray.push(doc.data());
       
      });
      setUser(usersArray);
      console.log(usersArray)
      setLoading(false);
    } catch (error) {
      console.log(error)
     
    }
  }


  useEffect(() => {
    getProductData();
    getOrderData()
    getUserData();
  }, []);

  const [searchkey, setSearchkey] = useState('')
  const [filterType, setFilterType] = useState('')

  return (
    <MyContext.Provider
      value={{
        products,
        setProducts,
        addProduct,
        getProduct,
        edithandle,
        updateProduct,
        deleteProduct,
        order,
        user,
        searchkey,
        setSearchkey,
        filterType,
        setFilterType,

      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;
