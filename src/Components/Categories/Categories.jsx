
import { NavLink } from "react-router-dom";

const Categories = ({ category }) => {
    const { category_id, category_name } = category;

    // console.log(category)
    return (
        <div className="text-center mb-4">
            <button className="bg-[rgba(9,8,15,.05)] rounded-4xl text-[18px] font-medium w-full text-[rgba(9,8,15,.6)] py-3">
                <NavLink to={`products/${category_id}`}
                >{category_name}</NavLink>
            </button>


        </div>
    );
};

export default Categories;