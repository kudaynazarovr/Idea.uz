import { useTranslation } from "react-i18next";

function Vacancies() {
    const { t } = useTranslation();

    return (
        <>
            <div className="px-6 md:px-16 lg:px-40 py-16 flex flex-col gap-10 bg-white dark:bg-black text-black dark:text-white">

                <b className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                    {t("vacancies_title")}
                </b>

                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">

                    <div className="group bg-white dark:bg-black text-black dark:text-white rounded-2xl p-5 border border-gray-100 shadow-sm
      hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer">

                        <b className="text-xl md:text-2xl text-gray-900 bg-white dark:bg-black dark:text-white group-hover:text-pink-500 transition">
                            {t("vacancy1_title")}
                        </b>

                        <div className="mt-4 space-y-3 text-sm md:text-base">
                            <div>
                                <b className="text-gray-900 bg-white dark:bg-black dark:text-white">
                                    {t("vacancy_desc_label")}
                                </b>
                                <p className="text-gray-600 bg-white dark:bg-black dark:text-white mt-1 group-hover:text-gray-800 transition">
                                    {t("vacancy1_desc")}
                                </p>
                            </div>

                            <div>
                                <b className="text-gray-900 bg-white dark:bg-black dark:text-white">
                                    {t("vacancy_time_label")}
                                </b>
                                <p className="text-gray-600 bg-white dark:bg-black dark:text-white mt-1 group-hover:text-gray-800 transition">
                                    {t("vacancy1_time")}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="group bg-white dark:bg-black text-black dark:text-white rounded-2xl p-5 border border-gray-100 shadow-sm
      hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer">

                        <b className="text-xl md:text-2xl text-gray-900 bg-white dark:bg-black dark:text-white group-hover:text-pink-500 transition">
                            {t("vacancy2_title")}
                        </b>

                        <div className="mt-4 space-y-3 text-sm md:text-base">
                            <div>
                                <b className="text-gray-900 bg-white dark:bg-black dark:text-white">
                                    {t("vacancy_desc_label")}
                                </b>
                                <p className="text-gray-600 bg-white dark:bg-black dark:text-white mt-1 group-hover:text-gray-800 transition">
                                    {t("vacancy2_desc")}
                                </p>
                            </div>

                            <div>
                                <b className="text-gray-900 bg-white dark:bg-black dark:text-white">
                                    {t("vacancy_time_label")}
                                </b>
                                <p className="text-gray-600 bg-white dark:bg-black dark:text-white mt-1 group-hover:text-gray-800 transition">
                                    {t("vacancy2_time")}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Vacancies