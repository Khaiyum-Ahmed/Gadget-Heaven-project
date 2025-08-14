import { Link } from "react-router-dom";

const Product = ({ product }) => {
    const { product_image, product_title, price, product_id } = product;
    return (
        <div>
            {/* <div>
                <h1>categories</h1>
            </div> */}
            <div className="card border-4 w-96 p-5 border-[#f6f6f6]">
                <figure className="w-80 h-[180px] mx-auto ">
                    <img className="w-full h-full object-contain rounded-2xl"
                        src={product_image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-semibold text-[#09080F] mb-3">{product_title}</h2>
                    <p className="text-xl font-medium text-[rgba(9,8,15,.6)] mb-4">Price: ${price}</p>
                    <div className="card-actions ">
                        <Link to={`/products/${product_id}`}>
                            <button className="btn-outline btn text-[#9538E2] text-xl font-semibold py-3 px-5 rounded-4xl">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;