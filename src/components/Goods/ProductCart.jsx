import { products } from '../../product'
import { ButtonBasket } from '../Buttons/ButtonBasket'
import { ButtonBuyNow } from '../Buttons/ButtonBuyNow'
import { useContext } from "react";
import { MyContext } from "../../MyContext";
import { IoMdHeartEmpty } from 'react-icons/io';
import { FaBalanceScale } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';


function ProductCart({ search }) {
    const { t } = useTranslation()
    const { addToCart } = useContext(MyContext);
    const { addToLike } = useContext(MyContext);

    const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
            <div className='grid grid-cols-6 gap-x-4 gap-y-3 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 max-xl:grid-cols-4'>
                {filteredProducts.map((product) => (
                    <div key={product.id} className='w-full h-full shadow-[0px_0px_19px_0px_rgba(34,60,80,0.34)] flex flex-col gap-y-2 p-3 bg-white dark:bg-black text-black dark:text-white  rounded-2xl relative group'>
                        <div className='flex items-center justify-center'>
                            <img src={product.image} className='w-[130px] h-[140px]' />
                            <i
                                onClick={() => addToLike(product)}
                                className='text-xl hover:text-pink-500 cursor-pointer absolute top-2 left-2'>
                                <IoMdHeartEmpty />
                            </i>

                            <i
                                onClick={() => addToLike(product)}
                                className='text-xl opacity-0 hover:text-pink-500 cursor-pointer absolute right-2 top-2 group-hover:opacity-100 transition duration-300'>
                                <FaBalanceScale />
                            </i>
                        </div>
                        <b className='text-xl'>{product.price} $</b>
                        <h2 className='w-full text-[18px]'>{product.name}</h2>
                        <p className='w-[60%] text-[17px] text-gray-600 hover:text-pink-600'><b className='text-gray-400'>{t("Бренд")}:</b>{product.brand}</p>

                        <div className='flex gap-x-2'>
                            <ButtonBuyNow />
                            <ButtonBasket onClick={() => addToCart(product)} />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProductCart