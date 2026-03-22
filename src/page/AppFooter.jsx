import { Layout } from 'antd';
import { LiaTelegramPlane } from "react-icons/lia";
import { RiFacebookFill } from "react-icons/ri";
import { LiaInstagram } from "react-icons/lia";
import { ButtonLeaveMessege } from '../components/Buttons/ButtonLeaveMessege';
import { useTranslation } from 'react-i18next';

const { Footer } = Layout;

function AppFooter() {
    const { t } = useTranslation()
    return (
        <>
            <Footer className='w-full'>
                <div className='w-full px-40 py-20 flex justify-between bg-gray-900 text-white max-lg:flex-col max-lg:px-20 max-lg:gap-y-5 max-md:px-10'>

                    <div className='flex flex-col gap-y-5 max-md:border-b border-gray-300 pb-5'>
                        <h1 className='text-5xl font-bold'>
                            Idea
                        </h1>

                        <div className='flex items-center gap-x-2 max-sm:flex-col max-sm:gap-y-2 max-sm:items-start'>
                            <i className='p-3 border border-gray-300 text-2xl rounded-full cursor-pointer'>
                                <LiaTelegramPlane />
                            </i>

                            <i className='p-3 border border-gray-300 text-2xl rounded-full cursor-pointer'>
                                <RiFacebookFill />
                            </i>

                            <i className='p-3 border border-gray-300 text-2xl rounded-full cursor-pointer'>
                                <LiaInstagram />
                            </i>
                        </div>
                    </div>

                    <div className='flex flex-col gap-y-5 max-md:border-b border-gray-300 pb-5'>
                        <b className='text-xl'>{t("Партнерам")}</b>

                        <ul className='flex flex-col gap-y-2'>

                            <li className='text-gray-300 hover:text-pink-500 cursor-pointer'>{t("СтатьПартнером")}</li>

                            <li className='text-gray-300 hover:text-pink-500 cursor-pointer'>{t("УсловияCотрудничества")}</li>

                            <li className='text-gray-300 hover:text-pink-500 cursor-pointer'>{t("ВозвратИОбмен")}</li>

                        </ul>
                    </div>

                    <div className='flex flex-col gap-y-5 max-md:border-b border-gray-300 pb-5'>
                        <b className='text-xl'>idea.uz</b>

                        <ul className='flex flex-col gap-y-2'>

                            <li className='text-gray-300 hover:text-pink-500 cursor-pointer'>{t("ОНас")}</li>

                            <li className='text-gray-300 hover:text-pink-500 cursor-pointer'>{t("НашиМагазины")}</li>

                            <li className='text-gray-300 hover:text-pink-500 cursor-pointer'>{t("Контакты")}</li>

                        </ul>
                    </div>


                    <div className='flex flex-col gap-y-5 max-md:border-b border-gray-300 pb-5'>
                        <b className='text-xl'>Информация</b>

                        <ul className='flex flex-col gap-y-2'>

                            <li className='text-gray-300 hover:text-pink-500 cursor-pointer'>{t("Статьи")}</li>

                            <li className='text-gray-300 hover:text-pink-500 cursor-pointer'>{t("Рассрочка")}</li>

                            <li className='text-gray-300 hover:text-pink-500 cursor-pointer'>{t("Оферта")}</li>

                            <li className='text-gray-300 hover:text-pink-500 cursor-pointer'>{t("Вакансии")}</li>

                        </ul>
                    </div>

                    <div className='flex flex-col gap-y-5 max-md:border-b border-gray-300 pb-5' >

                        <b>Обратная связь</b>

                        <ButtonLeaveMessege />

                        <div className='flex flex-col gap-y-2'>
                            <b className='text-lg hover:text-pink-500'>71 230 77 99</b>

                            <p className='text-gray-300'>{t("ЕжедневноC")}  9:00 до 21:00</p>
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <b className='text-lg hover:text-pink-500'>info@ideagroup.uz</b>

                            <p className='text-gray-300'>{t("Почта")}</p>
                        </div>

                    </div>

                </div>
            </Footer>
        </>
    )
}

export default AppFooter