import { useEffect, useState } from "react";
import Product from "../Product/Product";
import Categories from "../Categories/Categories";

const Products = () => {
    const [products, setProducts] = useState([]);

    const [categories, setCategories] = useState([]);

    const [selectCategory, setSelectCategory] = useState("All Products");

    const filteredProducts = selectCategory === "All Products" ? products : products.filter((p) => p.category === selectCategory);

    // console.log(filteredProducts, selectCategory)

    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div className="mt-96 lg:pt-80">

            <h2 className="text-center font-bold lg:text-5xl md:text-3xl text-2xl pb-12 text-[#0B0B0B]">Explore Cutting-Edge Gadgets</h2>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                <div className="grid-cols-1">
                    {
                        categories.map(category => <Categories key={category.category_id} category={category} selectCategory={selectCategory} setSelectCategory={setSelectCategory}></Categories>)
                    }

                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 col-span-3 ">
                    {

                       filteredProducts.length > 0 ?(
                         filteredProducts.map(product => (
                            <Product key={product.product_id} product={product} />
                        ))
                       ) : <p className="text-center text-4xl font-bold col-span-3 content-center">No Data Found</p>

                    }
                </div>

            </div>

        </div>
    );
};

export default Products;