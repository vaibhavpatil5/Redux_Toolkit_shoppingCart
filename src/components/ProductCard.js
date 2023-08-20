/* eslint-disable jsx-a11y/anchor-is-valid */

import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../reducer/cartSlice";
import swal from "sweetalert";




const ProductCard = () => {
    //   const [data, setData] = useState([]);

    //   const getApiData = async () => {
    //     const response = await fetch("https://fakestoreapi.com/products");
    //     const result = await response.json();
    //     console.log(result);
    //     setData(result);
    //   };

    //   useEffect(() => {
    //     getApiData();
    //   }, []);




    const items = useSelector((state) => state.allCart.items);
    const dispatch = useDispatch();

    const handleAdd = (ele) => {
        dispatch(addToCart(ele));
        swal("Great Choice!", "Your Item is added to the Cart !", "success");
    };

    return (
        <>
            <div className="bg-back-color" >
                <div className="section grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                    {items.map((ele) => (
                        <div
                            key={ele.id}

                            className="container border-2 border-solid border-borderColor mx-auto"
                        >
                            <div className="bg-grey h-[400px] flex items-center justify-center">
                                <img
                                    src={ele.image}
                                    alt=""
                                    className="mix-blend-multiply w-[200px]"
                                />
                            </div>
                            <div className="px-5 bg-card-color pb-5">
                                <div className="flex justify-between mb-5">
                                    <h5 className="text-xl text-wrap pt-2 font-semibold tracking-tight text-white dark:text-white">
                                        {ele.title}
                                    </h5>

                                    <div className="flex items-center ">
                                        <svg
                                            className="w-4 h-4 text-yellow-300 mr-1"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 22 20"
                                        >
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>

                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                                            {ele.rating}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl flex font-bold head dark:text-white">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 head"
                                            viewBox="0 0 30 30"
                                            id="rupee"
                                        >
                                            <path
                                                fill="none"
                                                stroke="#000"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M20 6H10M20 11H10M10 6h2a5 5 0 0 1 5 5h0a5 5 0 0 1-5 5h-2l8 8"
                                            ></path>
                                        </svg>
                                        {ele.price}
                                    </span>
                                    <button
                                        className=" text-base   undefined  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                                            hover:bg-bgbtn hover:text-teal-100 
                                            bg-teal-100 
                                            text-teal-700 
                                            border duration-200 ease-in-out 
                                            border-teal-600 transition"
                                        onClick={() => handleAdd(ele)}
                                    >

                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProductCard;
