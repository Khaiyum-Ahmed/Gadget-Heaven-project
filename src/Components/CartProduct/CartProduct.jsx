import { IoMdCloseCircleOutline } from "react-icons/io";
const CartProduct = ({ product,handleRemoveList }) => {
    const { description, product_image, product_title, price,product_id } = product;
    return (
        <div>
            <div className="bg-base-200 rounded-3xl p-6 mb-6">
                <div className="flex items-center gap-6">
                    <img
                        src={product_image}
                        className="max-w-md rounded-lg shadow-2xl"
                    />
                    <div className="ml-8 w-full flex justify-between">
                        <div>
                            <h1 className="text-2xl font-semibold text-[#09080F]">{product_title}</h1>
                        <p className="py-6 font-normal text-[18px] text-[rgba(9,8,15,.6)]">
                            {description}
                        </p>
                        <h3 className="text-xl font-semibold text-[rgba(9,8,15,.8)]">Price: $ {price}</h3>
                        </div>
                        <div className="mr-8">
                            <span onClick={()=>handleRemoveList(product_id)} className="text-4xl cursor-pointer text-[#FF0000]"><IoMdCloseCircleOutline /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;