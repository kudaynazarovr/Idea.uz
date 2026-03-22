import { CgShoppingCart } from "react-icons/cg";

export const ButtonBasket = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="w-[30%] bg-gray-200 dark:bg-white dark:text-black flex items-center justify-center rounded-2xl text-xl cursor-pointer hover:bg-pink-500 hover:text-white"
        >
            <CgShoppingCart />
        </button>
    );
};