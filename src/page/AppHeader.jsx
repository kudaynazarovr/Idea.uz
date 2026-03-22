import { Layout, Input, Modal, Drawer } from 'antd';
import React, { useState } from "react";
import logo from '../assets/idea.uz-logo.png'
import { IoMdHeartEmpty } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { FaRegUser, FaBalanceScale } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import { useTranslation } from 'react-i18next';
import { MyContext } from "../MyContext";
import { useContext } from "react";
import { MdOutlineDelete } from "react-icons/md";

const { Search } = Input;
const { Header } = Layout;


function AppHeader({ search, setSearch, }) {
    const { toggleTheme, theme } = useContext(MyContext);
    const { cart } = useContext(MyContext);

    const [drawerOpen1, setDrawerOpen1] = useState(false);
    const [drawerOpen2, setDrawerOpen2] = useState(false);
    const [drawerOpen3, setDrawerOpen3] = useState(false);
    const [compareList, setCompareList] = useState([]);
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [registerModalOpen, setRegisterModalOpen] = useState(false);

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const { t, i18n } = useTranslation()

    const toggleLang = () => {
        const newLang = i18n.language === 'ru' ? 'en' : 'ru'
        i18n.changeLanguage(newLang)
        localStorage.setItem('lang', newLang)
    }

    const register = () => {
        console.log("REGISTER:", username, email, password)
    }

    const itemKey = (item) => item.id ?? item.name ?? JSON.stringify(item);

    const toggleCompare = (item) => {
        setCompareList(prev => {
            const exists = prev.some(x => itemKey(x) === itemKey(item));
            if (exists) return prev.filter(x => itemKey(x) !== itemKey(item));
            return [...prev, item];
        });
    };

    return (
        <Header style={{ padding: 0, margin: 0 }} className='w-full h-full'>
            <div className='w-full h-full max-md:px-15 max-xl:px-20 px-40 py-[10px] flex items-center justify-between gap-x-10 bg-white dark:bg-black text-black dark:text-white'>

                <div className='flex items-center gap-x-5'>
                    <img src={logo} className='w-[7%] max-md:w-[16%] max-xl:w-[15%] max-sm:w-[30%] cursor-pointer' />
                    <Search
                        placeholder="input search text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <button
                    onClick={toggleLang}
                    className='w-[4%] h-[90%] flex items-center justify-center rounded-2xl cursor-pointer text-xl hover:bg-gray-300 max-md:w-[25%] max-sm:w-[100%]'
                >
                    {i18n.language === 'ru' ? 'en' : 'ru'}
                </button>

                <div className='flex items-center z-50 bg-white dark:bg-black text-black dark:text-white gap-x-10 text-xl max-md:absolute max-md:bottom-0 max-md:left-0 max-md:p-4 max-md:w-full max-md:justify-between max-md:shadow'>

                    <i
                        onClick={() => setDrawerOpen1(true)}
                        className='flex flex-col items-center cursor-pointer hover:text-pink-500'>
                        <IoMdHeartEmpty />
                        <p className='text-[11px]'>{t("Избранное")}</p>
                    </i>

                    <i
                        onClick={() => setDrawerOpen2(true)}
                        className='flex flex-col items-center cursor-pointer hover:text-pink-500'
                    >
                        <SlBasket />
                        <p className='text-[11px]'>{t('Корзина')}</p>
                    </i>

                    <i
                        onClick={toggleTheme}
                        className='flex flex-col items-center cursor-pointer hover:text-pink-500'>
                        {theme === "light" ? <FaMoon /> : <LuSun />}
                        <p className='text-[11px]'>{t('Тема')}</p>
                    </i>

                    <i
                        onClick={() => setLoginModalOpen(true)}
                        className='flex flex-col items-center cursor-pointer hover:text-pink-500'
                    >
                        <FaRegUser />
                        <p className='text-[11px]'>{t('Войти')}</p>
                    </i>

                    <i
                        onClick={() => setDrawerOpen3(true)}
                        className='max-md:hidden flex flex-col items-center cursor-pointer hover:text-pink-500'>
                        <FaBalanceScale />
                        <p className='text-[11px]'>{t('Сравнение')}</p>
                    </i>
                </div>

                <Drawer
                    title={`Избранное (${cart.length})`}
                    onClose={() => setDrawerOpen1(false)}
                    open={drawerOpen1}
                >
                    {cart.length === 0 ? (
                        <p>Избранное пустая</p>
                    ) : (
                        cart.map((item, index) => (
                            <div key={index} className="flex gap-3 p-2 mb-4 items-center border-b border-gray-500 w-full">
                                <img src={item.image} className="w-[60px]" />

                                <div className='w-full flex items-center justify-between'>
                                    <div className='felx items-center'>
                                        <b className='text-xl'>{item.price} $</b>
                                        <h2 className='w-full text-[18px]'>{item.name}</h2>
                                        <p className='w-[60%] text-[17px] text-gray-600 hover:text-pink-600'><b className='text-gray-400'>Бренд:</b>{item.brand}</p>
                                    </div>

                                    <div className='flex flex-col gap-y-2 text-2xl'>
                                        <i className='flex flex-col items-center cursor-pointer hover:text-pink-500'>
                                            <SlBasket />
                                        </i>

                                        <i className='flex items-center cursor-pointer hover:text-pink-500'>
                                            <FaBalanceScale />
                                        </i>

                                        <i className='flex items-center cursor-pointer hover:text-pink-500'>
                                            <MdOutlineDelete />
                                        </i>
                                    </div>
                                </div>

                            </div>
                        ))
                    )}
                </Drawer>

                <Drawer
                    title={`Корзина (${cart.length})`}
                    onClose={() => setDrawerOpen2(false)}
                    open={drawerOpen2}
                >
                    {cart.length === 0 ? (
                        <p>Корзина пустая</p>
                    ) : (
                        cart.map((item, index) => (
                            <div key={index} className="flex gap-3 p-2 mb-4 items-center border-b border-gray-500 w-full">
                                <img src={item.image} className="w-[60px]" />

                                <div className='w-full flex items-center justify-between'>
                                    <div className='felx items-center'>
                                        <b className='text-xl'>{item.price} $</b>
                                        <h2 className='w-full text-[18px]'>{item.name}</h2>
                                        <p className='w-[60%] text-[17px] text-gray-600 hover:text-pink-600'><b className='text-gray-400'>Бренд:</b>{item.brand}</p>
                                    </div>

                                    <div className='flex flex-col gap-y-2 text-2xl'>
                                        <i className='flex flex-col items-center cursor-pointer hover:text-pink-500'>
                                            <IoMdHeartEmpty />
                                        </i>

                                        <i className='flex items-center cursor-pointer hover:text-pink-500'>
                                            <FaBalanceScale />
                                        </i>

                                        <i className='flex items-center cursor-pointer hover:text-pink-500'>
                                            <MdOutlineDelete />
                                        </i>
                                    </div>
                                </div>

                            </div>
                        ))
                    )}
                </Drawer>

                <Drawer
                    title={`Сравнение (${compareList.length})`}
                    onClose={() => setDrawerOpen3(false)}
                    open={drawerOpen3}
                >
                    {compareList.length === 0 ? (
                        <p>Добавьте товары для сравнения</p>
                    ) : (
                        compareList.map((item, index) => (
                            <div key={index} className="flex gap-3 p-2 mb-4 items-center border-b border-gray-500 w-full">
                                <img src={item.image} className="w-[60px]" />
                                <div className='w-full flex items-center justify-between'>
                                    <div className='felx items-center'>
                                        <b className='text-xl'>{item.price} $</b>
                                        <h2 className='w-full text-[18px]'>{item.name}</h2>
                                        <p className='w-[60%] text-[17px] text-gray-600 hover:text-pink-600'><b className='text-gray-400'>Бренд:</b>{item.brand}</p>
                                    </div>
                                    <div className='flex flex-col gap-y-2 text-2xl'>
                                        <i className='flex items-center cursor-pointer hover:text-pink-500' onClick={() => toggleCompare(item)}>
                                            <MdOutlineDelete />
                                        </i>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </Drawer>


                <Modal
                    open={loginModalOpen}
                    onCancel={() => setLoginModalOpen(false)}
                    footer={null}
                >
                    <div className='flex flex-col gap-y-5 py-10'>
                        <h1 className='text-3xl text-center font-bold'>Вход</h1>

                        <input
                            type="email"
                            placeholder="Email"
                            className="border p-3 rounded-2xl"
                        />

                        <input
                            type="password"
                            placeholder="Пароль"
                            className="border p-3 rounded-2xl"
                        />

                        <button className='bg-pink-500 text-white py-3 rounded-2xl'>
                            Войти
                        </button>

                        <p className='text-center'>
                            Нет аккаунта?
                            <span
                                className='text-pink-500 cursor-pointer ml-2'
                                onClick={() => {
                                    setLoginModalOpen(false)
                                    setRegisterModalOpen(true)
                                }}
                            >
                                Зарегистрироваться
                            </span>
                        </p>
                    </div>
                </Modal>

                <Modal
                    open={registerModalOpen}
                    onCancel={() => setRegisterModalOpen(false)}
                    footer={null}
                >
                    <div className='flex flex-col gap-y-5 py-10'>
                        <h1 className='text-3xl text-center font-bold'>Регистрация</h1>

                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="border p-3 rounded-2xl"
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border p-3 rounded-2xl"
                        />

                        <input
                            type="password"
                            placeholder="Пароль"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border p-3 rounded-2xl"
                        />

                        <button
                            onClick={register}
                            className='bg-pink-500 text-white py-3 rounded-2xl'
                        >
                            Зарегистрироваться
                        </button>
                    </div>
                </Modal>

            </div>
        </Header>
    )
}

export default AppHeader;