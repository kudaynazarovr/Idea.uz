import { useTranslation } from "react-i18next";

function Exchange() {
    const { t } = useTranslation();

    return (
        <section className="max-w-4xl mx-auto px-4 py-10">
            <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-700 
            shadow-sm p-6 md:p-10 space-y-6 leading-relaxed 
            text-black dark:text-white transition duration-300">

                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    {t("exchange_title")}
                </h1>

                <h2 className="font-semibold text-gray-800 dark:text-gray-300">
                    {t("exchange_rules")}
                </h2>

                <h3 className="font-semibold text-gray-900 dark:text-white">
                    {t("exchange_section1")}
                </h3>

                <p className="text-gray-700 dark:text-gray-300">
                    {t("exchange_p1")}
                </p>

                <p className="text-gray-700 dark:text-gray-300">
                    {t("exchange_p2")}
                </p>

                <p className="font-medium">{t("exchange_conditions")}</p>

                <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>{t("exchange_c1")}</li>
                    <li>{t("exchange_c2")}</li>
                    <li>{t("exchange_c3")}</li>
                </ul>

                <p>{t("exchange_not_return")}</p>

                <ul className="grid md:grid-cols-2 gap-1 text-gray-700 dark:text-gray-300">
                    <li>• {t("exchange_n1")}</li>
                    <li>• {t("exchange_n2")}</li>
                    <li>• {t("exchange_n3")}</li>
                </ul>

                <h3 className="font-semibold text-gray-900 dark:text-white">
                    {t("exchange_section2")}
                </h3>

                <p>{t("exchange_defects")}</p>

                <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>{t("exchange_d1")}</li>
                    <li>{t("exchange_d2")}</li>
                    <li>{t("exchange_d3")}</li>
                </ul>

                <p>{t("exchange_procedure")}</p>

                <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>{t("exchange_pr1")}</li>
                    <li>{t("exchange_pr2")}</li>
                    <li>{t("exchange_pr3")}</li>
                </ul>

                <p>{t("exchange_terms")}</p>

                <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                    <li>• {t("exchange_t1")}</li>
                    <li>• {t("exchange_t2")}</li>
                </ul>

                <h3 className="font-semibold text-gray-900 dark:text-white">
                    {t("exchange_law")}
                </h3>

            </div>
        </section>
    );
}

export default Exchange;