import { useLoaderData, useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { addToStoredCartList } from "../../Utilities/AddToDb";
const ProductDetail = () => {
    const { product_id } = useParams();

    const id = parseInt(product_id);

    const data = useLoaderData();

    const product = data.find(product => product.product_id === id);

    const { description, price, product_image, product_title, rating, specification, availability } = product;

    const handleAddToCart = (id) => {
        addToStoredCartList(id);
        // alert('clicked')
    }

    // console.log(typeof id)
    // const handleAddToWishlist = (id) =>{

    // }
    // console.log(typeof product_id, product_id, id, typeof id, data)
    return (
        <div className="bg-[#9538E2] py-8 relative lg:mb-[450px] md:mb-[850px]">
            <div className="text-center pb-[235px] max-w-3xl mx-auto">
                <h1 className="mb-4 font-bold text-3xl text-white">Product Details</h1>
                <p className="text-base text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="p-4 bg-white rounded-4xl absolute top-2/5 md:left-40 lg:left-80 border border-[rgb(0,0,0,.08)]">
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row">
                        <img
                            src={product_image}
                            className="max-w-md rounded-2xl shadow-2xl"
                        />
                        <div className="ml-8">
                            <h1 className="text-3xl text-[#09080F] font-semibold">{product_title}</h1>
                            <p className="py-6 font-semibold text-xl text-[rgba(9,8,15,.8)]">
                                Price: $ {price}
                            </p>


                            {
                                availability ? (<span className="bg-[rgba(48,156,8,.1)] rounded-4xl py-2 px-3 text-[14px] font-medium border border-[#309C08] text-[#309C08]">In Stock</span>) : (<span className="bg-[rgba(48,156,8,.1)] rounded-4xl py-2 px-3 border border-[#309C08] text-[14px] font-medium text-[#ff4400]">Out of Stock</span>)
                            }



                            <p className="pt-5 font-normal text-[18px] text-[rgba(9,8,15,.6)]">
                                {description}
                            </p>
                            <h5 className="text-[#09080F] pt-6 font-bold text-[18px]">Specification:</h5>
                            <ul>
                                {
                                    specification.map((spec, idx) => <li className="pt-3 text-[rgba(9,8,15,.6)] text-[18px]" key={idx}>{spec}</li>)
                                }
                            </ul>
                            <h5 className="text-[#09080F] pt-6 font-bold py-5 text-[18px]">Rating</h5>
                            <div className="flex items-center gap-2">
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                                </div>
                                <div className="w-[50px] h-[32px] bg-[rgba(9,8,15,.05)] rounded-4xl flex justify-center items-center"><span>{rating}</span></div>
                            </div>
                            <div className="flex items-center gap-5 py-6">

                                <button onClick={() => handleAddToCart(id)} className="cursor-pointer bg-[#9538E2] font-bold text-[18px] text-white rounded-4xl py-3 px-5 flex items-center gap-3">Add To Card <span className="text-2xl font-bold"><MdOutlineShoppingCart /></span></button>



                                <div className="w-[50px] h-[50px] border border-[rgba(9,8,15,.2)] rounded-4xl flex justify-center items-center">
                                    <span className="text-[#3A3A3A] text-2xl"><FaRegHeart /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;