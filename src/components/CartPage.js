/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCartTotal, removeToCart, decreaseItemQuantity, increaseItemQuantity, } from "../reducer/cartSlice";
import swal from 'sweetalert';
import { Link } from "react-router-dom";


const CartPage = () => {




  const dispatch = useDispatch();

  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);


  const handleRemove = (productId) => {

    swal({
      title: "Are you sure?",
      text: "You want delete it?,No problem,Add other Products!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          dispatch(removeToCart(productId));
          swal("Poof! Your Product has been deleted!", {
            icon: "success",
          });
        } else {

          swal("Your Product is safe, Enjoy Shopping!");
        }
      });
  };

  return (
    <>
      <section className="bg-back-color h-full">
        <div className="pt-20">
          <div className="flex container justify-around">
            <h1 className="mb-5 mt-5 mr-10 text-2xl font-bold"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="40"
              height="40" fill="none" viewBox="0 0 24 24" id="left-arrow"><path fill="#000" fill-rule="evenodd"
                d="M12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 
         16.6944 3.5 12C3.5 7.30558 7.30558 3.5 12 3.5ZM21.5 12C21.5 6.75329 17.2467 2.5 12 2.5C6.75329
          2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5C17.2467 21.5 21.5 17.2467 21.5 12Z"
                clip-rule="evenodd"></path><path fill="#000" fill-rule="evenodd" d="M17.5 12C17.5 11.7239 
          17.2761 11.5 17 11.5H7.5C7.22386 11.5 7 11.7239 7 12C7 12.2761 7.22386 12.5 7.5 12.5H17C
          17.2761 12.5 17.5 12.2761 17.5 12Z" clip-rule="evenodd"></path><path fill="#000" fill-rule=
                "evenodd" d="M10.8536 8.14645C10.6583 7.95118 10.3417 7.95118 10.1464 8.14645L6.64645 11.6464C6.45118 11.8417 6.45118 12.1583 6.64645 12.3536L10.1464 15.8536C10.3417 16.0488 10.6583 16.0488 10.8536 15.8536C11.0488 15.6583 11.0488 15.3417 10.8536 15.1464L7.70711 12L10.8536 8.
        85355C11.0488 8.65829 11.0488 8.34171 10.8536 8.14645Z" clip-rule="evenodd"></path></svg></Link></h1>
            <h1 className="mb-5 mt-5 text-center text-2xl font-bold">Cart Items</h1>
          </div>
          <div className="mx-auto  max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3 ">
              {cart.map((ele) => (
                <div className="justify-between mb-6 rounded-lg bg-ince p-6 shadow-md sm:flex sm:justify-start">
                  <img alt='' src={ele.image} className="w-full rounded-lg sm:w-40" />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-2xl font-bold text-totalCard">{ele.title}</h2>

                      <p className="mt-3 bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold mr-2 
                    px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex
                     items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5" viewBox="0 0 30 30" id="rupee">
                          <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" d="M20 6H10M20 11H10M10 6h2a5 5 0 0 1 5 5h0a5 5 0 0 1-5 5h-2l8 8">
                          </path></svg>{ele.price}</p>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6  sm:block sm:space-x-6">
                      <button
                        className="text-base mr-0  md:w-auto  undefined  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                          hover:bg-red-700 hover:text-teal-100 
                          bg-white-100 
                          text-black-700 
                          border duration-200 ease-in-out 
                          border-red-600 transition"
                        onClick={() => handleRemove(ele.id)}
                      >
                        Remove
                      </button>


                      <div className="flex items-center border-gray-100">
                        <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-bgbtn hover:text-blue-50"
                          onClick={() =>
                            dispatch(decreaseItemQuantity(ele.id))
                          }
                        > - </span>
                        <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={ele.quantity} min="1" />
                        <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-bgbtn hover:text-blue-50"
                          onClick={() =>
                            dispatch(increaseItemQuantity(ele.id))
                          }
                        > + </span>
                      </div>

                    </div>
                  </div>
                </div>))}

            </div>

            <div className="mt-6 h-full rounded-lg border bg-totalCard p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700 head">Subtotal</p>
                <p className="text-gray-700 head">{totalQuantity}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700 head">Shipping</p>
                <p className="text-gray-700 head">0</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold head">Total</p>
                <div className="mr-0">
                  <p className="mb-1 flex justify-end text-lg head  font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5" viewBox="0 0 30 30" id="rupee">
                      <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" d="M20 6H10M20 11H10M10 6h2a5 5 0 0 1 5 5h0a5 5 0 0 1-5 5h-2l8 8">
                      </path></svg>
                    <span className="text-2xl"> {totalPrice}</span></p>
                  <p className="text-sm text-gray-700 head">including GST</p>
                </div>
              </div>
              <button className="mt-6 text-base w-full  undefined  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-700 hover:text-teal-100 
        bg-teal-100 
        text-teal-700 
        border duration-200 ease-in-out 
        border-teal-600 transition ">Checkout</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default CartPage;