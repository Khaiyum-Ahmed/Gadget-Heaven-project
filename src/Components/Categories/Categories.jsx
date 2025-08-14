

const Categories = ({ category, selectCategory, setSelectCategory}) => {
    const { category_name } = category;

    // console.log(category)
    return (
        <div className="text-center mb-4">
             <button
            onClick={() => setSelectCategory(category_name)}
            className={`w-full py-3 rounded-full mb-2 ${
                selectCategory === category_name ? "bg-purple-500 text-white" : "bg-gray-200"
            }`}
        >
            {category_name}
        </button>


        </div>
    );
};

export default Categories;