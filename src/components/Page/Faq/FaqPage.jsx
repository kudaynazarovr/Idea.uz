import { useTranslation } from "react-i18next";

function FaqPage() {
    const { t } = useTranslation();

    return (
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-10 space-y-4">

            {/* 1 */}
            <details className="group border border-gray-200 dark:border-zinc-700 rounded-2xl bg-white dark:bg-zinc-900 p-5 transition-all duration-300 hover:shadow-md open:shadow-xl">
                <summary className="flex justify-between items-center cursor-pointer list-none text-sm md:text-lg font-semibold text-gray-900 dark:text-white">
                    {t("faq1")}
                    <span className="ml-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-zinc-800 transition group-open:rotate-180 group-hover:bg-pink-100">
                        ▼
                    </span>
                </summary>

                <div className="grid transition-all duration-300 ease-in-out [grid-template-rows:0fr] group-open:[grid-template-rows:1fr]">
                    <div className="overflow-hidden">
                        <div className="mt-4 text-gray-600 dark:text-gray-300 space-y-2 text-sm md:text-base">
                            <b className="text-black dark:text-white">{t("faq1_desc1")}</b>
                            <p>{t("faq1_desc2")}</p>
                            <p>{t("faq1_desc3")}</p>
                            <p>{t("faq1_desc4")}</p>
                            <p>{t("faq1_desc5")}</p>
                            <p>{t("faq1_desc6")}</p>
                        </div>
                    </div>
                </div>
            </details>

            {/* 2 */}
            <details className="group border border-gray-200 dark:border-zinc-700 rounded-2xl bg-white dark:bg-zinc-900 p-5 transition-all duration-300 hover:shadow-md open:shadow-xl">
                <summary className="flex justify-between items-center cursor-pointer list-none text-sm md:text-lg font-semibold text-gray-900 dark:text-white">
                    {t("faq2")}
                    <span className="ml-4">▼</span>
                </summary>

                <div className="grid transition-all duration-300 ease-in-out [grid-template-rows:0fr] group-open:[grid-template-rows:1fr]">
                    <div className="overflow-hidden">
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            {t("faq2_desc")}
                        </p>
                    </div>
                </div>
            </details>

            {/* 3 */}
            <details className="group border border-gray-200 dark:border-zinc-700 rounded-2xl bg-white dark:bg-zinc-900 p-5 transition-all duration-300 hover:shadow-md open:shadow-xl">
                <summary className="flex justify-between items-center cursor-pointer list-none text-sm md:text-lg font-semibold text-gray-900 dark:text-white">
                    {t("faq3")}
                    <span className="ml-4">▼</span>
                </summary>

                <div className="grid transition-all duration-300 ease-in-out [grid-template-rows:0fr] group-open:[grid-template-rows:1fr]">
                    <div className="overflow-hidden">
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            {t("faq3_desc")}
                        </p>
                    </div>
                </div>
            </details>

            {/* 4 */}
            <details className="group border border-gray-200 dark:border-zinc-700 rounded-2xl bg-white dark:bg-zinc-900 p-5 transition-all duration-300 hover:shadow-md open:shadow-xl">
                <summary className="flex justify-between items-center cursor-pointer list-none text-sm md:text-lg font-semibold text-gray-900 dark:text-white">
                    {t("faq4")}
                    <span className="ml-4">▼</span>
                </summary>

                <div className="grid transition-all duration-300 ease-in-out [grid-template-rows:0fr] group-open:[grid-template-rows:1fr]">
                    <div className="overflow-hidden">
                        <div className="mt-4 text-gray-600 dark:text-gray-300 space-y-2">
                            <ul className="list-disc pl-5">
                                <li>{t("faq4_desc1")}</li>
                                <li>{t("faq4_desc2")}</li>
                            </ul>
                            <p>{t("faq4_desc3")}</p>
                        </div>
                    </div>
                </div>
            </details>

            {/* 5 */}
            <details className="group border border-gray-200 dark:border-zinc-700 rounded-2xl bg-white dark:bg-zinc-900 p-5 transition-all duration-300 hover:shadow-md open:shadow-xl">
                <summary className="flex justify-between items-center cursor-pointer list-none text-sm md:text-lg font-semibold text-gray-900 dark:text-white">
                    {t("faq5")}
                    <span className="ml-4">▼</span>
                </summary>

                <div className="grid transition-all duration-300 ease-in-out [grid-template-rows:0fr] group-open:[grid-template-rows:1fr]">
                    <div className="overflow-hidden">
                        <div className="mt-4 text-gray-600 dark:text-gray-300 space-y-2">
                            <p>{t("faq5_desc1")}</p>
                            <p>{t("faq5_desc2")}</p>
                        </div>
                    </div>
                </div>
            </details>

            {/* 6 */}
            <details className="group border border-gray-200 dark:border-zinc-700 rounded-2xl bg-white dark:bg-zinc-900 p-5 transition-all duration-300 hover:shadow-md open:shadow-xl">
                <summary className="flex justify-between items-center cursor-pointer list-none text-sm md:text-lg font-semibold text-gray-900 dark:text-white">
                    {t("faq6")}
                    <span className="ml-4">▼</span>
                </summary>

                <div className="grid transition-all duration-300 ease-in-out [grid-template-rows:0fr] group-open:[grid-template-rows:1fr]">
                    <div className="overflow-hidden">
                        <ul className="mt-4 text-gray-600 dark:text-gray-300 list-disc pl-5 space-y-1">
                            <li>{t("faq6_desc1")}</li>
                            <li>{t("faq6_desc2")}</li>
                            <li>{t("faq6_desc3")}</li>
                        </ul>
                    </div>
                </div>
            </details>

            {/* 7 */}
            <details className="group border border-gray-200 dark:border-zinc-700 rounded-2xl bg-white dark:bg-zinc-900 p-5 transition-all duration-300 hover:shadow-md open:shadow-xl">
                <summary className="flex justify-between items-center cursor-pointer list-none text-sm md:text-lg font-semibold text-gray-900 dark:text-white">
                    {t("faq7")}
                    <span className="ml-4">▼</span>
                </summary>

                <div className="grid transition-all duration-300 ease-in-out [grid-template-rows:0fr] group-open:[grid-template-rows:1fr]">
                    <div className="overflow-hidden">
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            {t("faq7_desc")}
                        </p>
                    </div>
                </div>
            </details>

        </div>
    );
}

export default FaqPage;