import React, { useState } from 'react';
import { Modal } from 'antd';
import { useTranslation } from 'react-i18next';

export const ButtonBuyNow = () => {
    const { t } = useTranslation()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    return (
        <>
            <button onClick={showModal} className="w-[70%] py-2 bg-gray-200 dark:white text-black dark:text-black font-bold rounded-2xl cursor-pointer hover:bg-pink-500 hover:text-white">
                {t("КупитьCразу")}
            </button>

            <Modal
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={null}
            >
                <div className='flex flex-col gap-y-5 py-10'>

                    <h1 className='text-3xl text-center font-bold'>Моментальная покупка</h1>

                    <div className='flex flex-col gap-y-2'>
                        <b className='text-xl'>Метод оплаты</b>

                        <label className='flex items-center gap-x-2 cursor-pointer text-lg'>
                            <input type="radio" name="payment" />
                            <p className='text-gray-400'>Купить сразу через CLICK</p>
                        </label>

                        <label className='flex items-center gap-x-2 cursor-pointer text-lg'>
                            <input type="radio" name="payment" />
                            <p className='text-gray-400'>Купить сразу через Payme</p>
                        </label>
                    </div>

                    <form className='flex flex-col gap-y-5'>
                        <div className='relative'>
                            <input
                                type="text"
                                placeholder=" "
                                className="peer w-full border border-gray-400 p-3 rounded-2xl outline-0"
                            />

                            <label className="absolute left-3 top-2 px-1 bg-white text-gray-400 text-sm transition-all
        peer-placeholder-shown:top-3
        peer-placeholder-shown:text-base
        
        peer-focus:-top-2
        peer-focus:text-sm
        
        peer-[&:not(:placeholder-shown)]:-top-2
        peer-[&:not(:placeholder-shown)]:text-sm
        ">
                                Имя и фамилия *
                            </label>
                            <div />
                        </div>

                        <div className='relative'>

                            <input
                                type="number"
                                placeholder=" "
                                className="peer w-full border border-gray-400 p-3 rounded-2xl outline-0"
                            />

                            <label className="absolute left-3 top-2 px-1 bg-white text-gray-400 text-sm transition-all
        peer-placeholder-shown:top-3
        peer-placeholder-shown:text-base
        
        peer-focus:-top-2
        peer-focus:text-sm
        
        peer-[&:not(:placeholder-shown)]:-top-2
        peer-[&:not(:placeholder-shown)]:text-sm
        ">
                                Номер телефона *
                            </label>
                        </div>
                    </form>

                    <button className='w-full py-3 text-xl cursor-pointer font-bold bg-pink-500 text-white rounded-2xl'>
                        Отправить
                    </button>


                </div>
            </Modal >
        </>
    )
}