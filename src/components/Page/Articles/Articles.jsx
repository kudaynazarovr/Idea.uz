import { useTranslation } from "react-i18next";

import Articleimg1 from '../../../assets/Articleimg1.png'
import Articleimg2 from '../../../assets/Articleimg2.jpg'
import Articleimg3 from '../../../assets/Articleimg3.png'
import Articleimg4 from '../../../assets/Articleimg4.png'
import Articleimg5 from '../../../assets/Articleimg5.png'
import Articleimg6 from '../../../assets/Articleimg6.jpg'
import Articleimg7 from '../../../assets/Articleimg7.jpg'

function Articles() {
    const { t } = useTranslation();

    const articles = [
        {
            img: Articleimg1,
            title: t("article1_title"),
            desc: t("article1_desc"),
        },
        {
            img: Articleimg2,
            title: t("article2_title"),
        },
        {
            img: Articleimg3,
            title: t("article3_title"),
            desc: t("article3_desc"),
        },
        {
            img: Articleimg4,
            title: t("article4_title"),
        },
        {
            img: Articleimg5,
            title: t("article5_title"),
            desc: t("article5_desc"),
        },
        {
            img: Articleimg6,
            title: t("article6_title"),
            desc: t("article6_desc"),
        },
        {
            img: Articleimg7,
            title: t("article7_title"),
            desc: t("article7_desc"),
        },
    ];

    return (
        <>
            <div className="px-6 md:px-16 lg:px-40 py-16 bg-white dark:bg-black text-black dark:text-white">

                <h2 className="text-2xl font-semibold mb-8">
                    {t("articles_title")}
                </h2>

                <div className="grid gap-6 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3">

                    {articles.map((item, index) => (
                        <div
                            key={index}
                            className="group rounded-2xl border border-gray-100 overflow-hidden bg-white dark:bg-black text-white dark:text-white
            hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                                />
                            </div>

                            <div className="p-4">
                                <b className="block text-gray-900 bg-white dark:bg-black dark:text-white text-lg mb-2 group-hover:text-pink-500 transition">
                                    {item.title}
                                </b>

                                {item.desc && (
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        {item.desc}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Articles