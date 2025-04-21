import React, { useEffect, useState } from 'react'
import MyContext from './myContext'
import { Timestamp, addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, setDoc, where } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { fireDB } from '../../fireabase/FirebaseConfig';

function MyState(props) {
    const [mode, setMode] = useState('light');
    const [loading, setLoading] = useState(false);

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = "rgb(17, 24, 39)";
        } else {
            setMode('light');
            document.body.style.backgroundColor = "white";
        }
    }

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
        })
    });

    const addProduct = async () => {
        if (products.title == null || products.price == null || products.imageUrl == null || 
            products.category == null || products.description == null) {
            return toast.error("All fields are required");
        }

        setLoading(true);
        try {
            const productRef = collection(fireDB, 'products');
            await addDoc(productRef, products);
            toast.success("Product added successfully");
            setTimeout(() => {
                window.location.href = '/dashboard';
            }, 800);
            getProductData();
        } catch (error) {
            console.log(error);
            toast.error("Failed to add product");
        } finally {
            setLoading(false);
        }
    }

    const [product, setProduct] = useState([]);

    const getProductData = async () => {
        setLoading(true);
        try {
            const q = query(collection(fireDB, 'products'), orderBy('time'));
            const data = onSnapshot(q, (QuerySnapshot) => {
                let productArray = [];
                QuerySnapshot.forEach((doc) => {
                    productArray.push({ ...doc.data(), id: doc.id });
                });
                setProduct(productArray);
            });
            return () => data;
        } catch (error) {
            console.log(error);
            toast.error("Failed to fetch products");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProductData();
    }, []);

    const edithandle = (item) => {
        setProducts(item);
    }

    const updateProduct = async () => {
        setLoading(true);
        try {
            await setDoc(doc(fireDB, 'products', products.id), products);
            toast.success("Product updated successfully");
            setTimeout(() => {
                window.location.href = '/dashboard';
            }, 800);
            getProductData();
        } catch (error) {
            console.log(error);
            toast.error("Failed to update product");
        } finally {
            setLoading(false);
        }
    }

    const deleteProduct = async (item) => {
        setLoading(true);
        try {
            await deleteDoc(doc(fireDB, 'products', item.id));
            toast.success('Product deleted successfully');
            getProductData();
        } catch (error) {
            console.log(error);
            toast.error("Failed to delete product");
        } finally {
            setLoading(false);
        }
    }

    const [order, setOrder] = useState([]);

    const getOrderData = async () => {
        setLoading(true);
        try {
            const result = await getDocs(collection(fireDB, "order"));
            const ordersArray = [];
            result.forEach((doc) => {
                ordersArray.push({ ...doc.data(), id: doc.id });
            });
            setOrder(ordersArray);
        } catch (error) {
            console.log(error);
            toast.error("Failed to fetch orders");
        } finally {
            setLoading(false);
        }
    }

    const deleteOrder = async (orderId) => {
        setLoading(true);
        try {
            await deleteDoc(doc(fireDB, 'order', orderId));
            toast.success('Order deleted successfully');
            getOrderData();
        } catch (error) {
            console.log(error);
            toast.error("Failed to delete order");
        } finally {
            setLoading(false);
        }
    }

    const [user, setUser] = useState([]);

    const getUserData = async () => {
        setLoading(true);
        try {
            const result = await getDocs(collection(fireDB, "users"));
            const usersArray = [];
            result.forEach((doc) => {
                usersArray.push(doc.data());
            });
            setUser(usersArray);
        } catch (error) {
            console.log(error);
            toast.error("Failed to fetch users");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getOrderData();
        getUserData();
    }, []);

    const [searchkey, setSearchkey] = useState('');
    const [filterType, setFilterType] = useState('');
    const [filterPrice, setFilterPrice] = useState('');

    return (
        <MyContext.Provider value={{
            mode, toggleMode, loading, setLoading,
            products, setProducts, addProduct, product,
            edithandle, updateProduct, deleteProduct, order,
            user, searchkey, setSearchkey, filterType, setFilterType,
            filterPrice, setFilterPrice, deleteOrder
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyState;