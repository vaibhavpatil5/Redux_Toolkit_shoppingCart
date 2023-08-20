
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { getCartTotal } from "../reducer/cartSlice";

const NavBar = () => {


  const { cart, totalQuantity } = useSelector((state) => state.allCart)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);


  return (
    <>
      <div className="navbar bg-nav-color border-b-black   fixed top-0 left-0 w-full z-20  ">
        <div className="container mx-auto">
          <div className="flex-1">
            <h3 className="normal-case font-bold pl-6 text-2xl"><Link to="/">VaibzShop</Link></h3>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  <span className="badge bg-bgbtn head badge-sm indicator-item">{totalQuantity}</span>
                </div>
              </label>
              <div tabIndex={0} className="mt-2 z-[1] card card-compact dropdown-content w-52 bg-bgbtn shadow">
                <div className="card-body">
                  <span className="font-bold head text-lg"><span className="text-2xl" >{totalQuantity}</span> Items in the Cart</span>

                  <div className="card-actions">
                    <div className="btn-block">
                      <div >
                        <button class="dark:bg-slate-200 w-full  bg-grey duration-200" 
                        disabled={totalQuantity === 0} >
                          <div
                            class="bg-slate-200 text-center  dark:bg-slate-900 dark:border-slate-200 active:translate-x-0 active:translate-y-0 flex items-center border-slate-900 border-2 duration-200 px-4 py-2 -translate-x-1 -translate-y-1 hover:-translate-x-1.5 hover:-translate-y-1.5 w-full"
                          >

                            <h1 class="dark:text-slate-200 mx-auto font-bold text-lg   duration-200" >
                            {totalQuantity === 0 ? (
                              <span>Please Add Products</span>
                            ) : (
                              <Link to="/Cart">View cart</Link>
                            )}
                            </h1>
                          </div>
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
};

export default NavBar;
