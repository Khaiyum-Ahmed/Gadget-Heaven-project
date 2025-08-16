import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCartList, getStoredWistList } from "../../Utilities/AddToDb";
import CartProduct from "../CartProduct/CartProduct";
import Product from "../Product/Product";

const Dashboard = () => {
    const allProducts = useLoaderData();

    const [cartList, setCartList] = useState([]);

    const [wishList, setWishList] = useState([]);

    const [view, setView] = useState("cart");

    const [sort, setSort] = useState('');

    useEffect(() => {
        const storedCartList = getStoredCartList();

        const storedCartListInt = storedCartList.map(id => parseInt(id));

        const addCartList = allProducts.filter(product => storedCartListInt.includes(product.product_id));

        setCartList(addCartList);

        const storedWishList = getStoredWistList();

        const storedWishListInt = storedWishList.map(id => parseInt(id));
        const addWishList = allProducts.filter(product => storedWishListInt.includes(product.product_id));
        setWishList(addWishList)
    }, [allProducts]);

    const totalPrice = (list) => {
        let sum = 0;

        list.forEach(item => {
            sum += item.price;
        });

        return sum;
    };

    const handleSort = sortPrice =>{
        setSort(sortPrice);
        // if(sortPrice === "price"){
        //     const sortedCartList = [...cartList].sort((a,b)=> b.price - a.price);
        //     setCartList(sortedCartList)
        // }
          const sortedCartList = [...cartList].sort((a,b)=> b.price - a.price);
          const sortedWishtList = [...wishList].sort((a,b)=> b.price - a.price);
            setCartList(sortedCartList)
            setWishList(sortedWishtList)
    }

    const displayedList = view === "cart" ? cartList : wishList;

    // console.log(allProducts, cartList)

    return (
        <div>
            <div className="bg-[#9538E2] py-8 text-center">
                <div className="text-center max-w-3xl pb-8 mx-auto">
                    <h1 className="mb-4 font-bold text-3xl text-white">Product Details</h1>
                    <p className="text-base text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>

                <div className="space-x-4 text-[18px]">

                    <button onClick={() => setView("cart")} className={`rounded-4xl cursor-pointer py-3 px-16 ${view === "cart" ? "text-[#9538E2] bg-white font-extrabold" : "bg-transparent border border-[#fff] text-white"}`}>Cart</button>
                    <button onClick={() => setView("wishlist")}
                        className={`rounded-4xl py-3 cursor-pointer px-16 ${view === "wishlist" ? "text-[#9538E2] bg-white font-extrabold" : "bg-transparent border border-[#fff] text-white"}`}>Wishlist</button>
                </div>
            </div>

            <div className="my-8">
                <div className="flex justify-between items-center">
                    <div><h3 className="font-bold text-2xl text-[#0B0B0B]">
                        {view === "cart" ? "Cart" : "WishList"}
                    </h3></div>
                    <div className="flex items-center gap-3">
                        <h6 className="font-bold text-2xl text-[#0B0B0B]">Total Cost: ${totalPrice(displayedList)}</h6>
                        <button onClick={()=>handleSort()} className="text-[#9538E2] text-[18px] font-semibold py-3 px-6 rounded-4xl border cursor-pointer border-[#9538E2]">Sort by Price</button>
                        <button className="font-medium text-[18px] text-white bg-[#9538E2] py-3 px-6 rounded-4xl cursor-pointer"> Purchase</button>
                    </div>
                </div>
            </div>

            <div>
                {
                    displayedList.map(product => (<CartProduct key={product.product_id} product={product}></CartProduct>))
                }

            </div>

        </div>
    );
};

export default Dashboard;