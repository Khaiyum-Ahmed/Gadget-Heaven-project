import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStoredCartList, getStoredWistList } from "../../Utilities/AddToDb";
const NavBar = () => {

    const [cartList, setCartList] = useState('');
    const [wishList, setWishList] = useState('');

    useEffect(()=>{
        const storeCartList = getStoredCartList();
        console.log(storeCartList);
        setCartList(storeCartList);
        const storeWishList = getStoredWistList();
        setWishList(storeWishList);
    },[])

    const links = <>

        <li><NavLink to='/' className={({ isActive, isPending }) => isActive ? `text-[#9538E2] font-bold text-xl` : isPending ? `text-[rgba(11,11,11,.7)] font-medium text-base` : ''} >Home</NavLink></li>
        <li><NavLink to='statistics' className={({ isActive, isPending }) => isActive ? `text-[#9538E2] font-bold text-xl` : isPending ? `text-[rgba(11,11,11,.7)] font-medium text-base` : ''} >Statistics</NavLink></li>
        <li><NavLink to='dashboard' className={({ isActive, isPending }) => isActive ? `text-[#9538E2] font-bold text-xl` : isPending ? `text-[rgba(11,11,11,.7)] font-medium text-base` : ''} >Dashboard</NavLink></li>


    </>
    return (
        <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[rgba(11,11,11,.7)] font-medium text-base">
                        {links}
                    </ul>
                </div>
                <a href="/" className="btn btn-ghost text-xl text-[#0B0B0B] font-bold">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[rgba(11,11,11,.7)] font-medium text-base">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-3">

                <div className="indicator btn w-[40px] h-[40px] border border-[rgba(11,11,11,.1)] rounded-full flex justify-center items-center">
                    <span className="indicator-item text-red-500">{cartList.length}</span>
                    <span className="text-xl"><IoCartOutline /></span>
                </div>

                <div className="indicator btn w-[40px] h-[40px] border border-[rgba(11,11,11,.1)] rounded-full flex justify-center items-center">
                    <span className="indicator-item text-red-500">{wishList.length}</span>
                    <span className="text-xl"><FaRegHeart /></span>
                </div>

            </div>
        </div>
    );
};

export default NavBar;