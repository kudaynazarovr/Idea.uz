import { useTranslation } from "react-i18next";
import Aboutimg from '../../../assets/Aboutimg.jpg'

function About() {
    const { t } = useTranslation();

    return (
        <>
            <div className='px-40 py-20 flex flex-col gap-y-5 max-lg:px-30 max-md:px-15 max-sm:px-0 bg-white dark:bg-black text-black dark:text-white'>

                <b className='text-3xl'>
                    {t("about_title")}
                </b>

                <div className='flex flex-col gap-y-5 bg-white dark:bg-black text-black dark:text-white p-5 rounded-2xl shadow-[0px_0px_27px_0px_rgba(34,60,80,0.19)]'>

                    <img src={Aboutimg} className="rounded-xl" />

                    <div className='flex flex-col gap-y-4 text-gray-800 dark:text-gray-300 text-lg'>
                        <p>{t("about_p1")}</p>
                        <p>{t("about_p2")}</p>
                        <p>{t("about_p3")}</p>
                        <p>{t("about_p4")}</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default About;