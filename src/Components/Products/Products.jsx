import { useEffect, useState } from "react";
import Product from "../Product/Product";
import Categories from "../Categories/Categories";

const Products = () => {
    const [products, setProducts] = useState([]);
    // const [productCategories, setProductCategories] = useState([]);
    // useEffect(() => {
    //     fetch('allData.json')
    //         .then(res => res.json())
    //         .then(data => setProductCategories(data))
    // }, []);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div className="mt-96 lg:pt-80">

            <h2 className="text-center font-bold lg:text-5xl md:text-3xl text-2xl pb-12 text-[#0B0B0B]">Explore Cutting-Edge Gadgets</h2>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                <div className="grid grid-cols-1">
                    {/* {
                        
                        productCategories.map(productCate =><Categories productCate={category}></Categories>)
                    } */}
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 col-span-3 ">
                    {
                        products.map(product => <Product key={product.product_id} product={product}></Product>)
                    }
                </div>

            </div>

        </div>
    );
};

export default Products;