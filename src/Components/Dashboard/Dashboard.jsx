import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCartList } from "../../Utilities/AddToDb";

const Dashboard = () => {
        const allProducts = useLoaderData();

        const [cartList, setCartList] = useState([]);

        useEffect(()=>{
            const storedCartList = getStoredCartList();
            const storedCartListInt = storedCartList.map(id => parseInt(id));
            const addCartList = allProducts.filter(product => storedCartListInt.includes(product.product_id));

            setCartList(addCartList)

        },[allProducts]);


        console.log(allProducts)

    return (
        // relative lg:mb-[450px] md:mb-[850px]
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
    );
};

export default Dashboard;