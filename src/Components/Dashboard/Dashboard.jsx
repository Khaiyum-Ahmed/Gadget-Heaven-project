import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCartList } from "../../Utilities/AddToDb";
import CartProduct from "../CartProduct/CartProduct";
import Product from "../Product/Product";

const Dashboard = () => {
    const allProducts = useLoaderData();

    const [cartList, setCartList] = useState([]);

    useEffect(() => {
        const storedCartList = getStoredCartList();
        const storedCartListInt = storedCartList.map(id => parseInt(id));
        const addCartList = allProducts.filter(product => storedCartListInt.includes(product.product_id));

        setCartList(addCartList)
    }, []);

    
    const totalPrice = () => {
        return cartList.reduce((sum, item) => sum + item.price, 0);
    };
    
    // console.log(allProducts, cartList)

    return (
        <div>
            <div className="bg-[#9538E2] py-8 text-center">
                <div className="text-center max-w-3xl pb-8 mx-auto">
                    <h1 className="mb-4 font-bold text-3xl text-white">Product Details</h1>
                    <p className="text-base text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>

                <div>

                    <button className="btn btn-info mr-6">Cart</button>
                    <button className="btn btn-info">Wishlist</button>
                </div>
            </div>

            <div className="my-8">
                <div className="flex justify-between items-center">
                    <div><h3 className="font-bold text-2xl text-[#0B0B0B]">Cart</h3></div>
                    <div className="flex items-center gap-3">
                        <h6 className="font-bold text-2xl text-[#0B0B0B]">Total Cost : $ {totalPrice()}</h6>
                        <button className="btn btn-accent">Sort by Price</button>
                        <button className="btn btn-info"> Purchase</button>
                    </div>
                </div>
            </div>

            <div>
                 {
                cartList.map( product => <CartProduct key={product.product_id} product={product}></CartProduct>)
                 }
            </div>

        </div>
    );
};

export default Dashboard;