import { useTranslation } from "react-i18next";

function Offer() {
    const { t } = useTranslation();

    return (
        <>
            <div className="px-40 py-20 max-lg:px-20 max-md:px-10 max-sm:px-4 flex flex-col gap-8 bg-white dark:bg-black text-black dark:text-white">

                <b className="text-3xl md:text-4xl font-semibold">
                    {t("offer_title")}
                </b>

                <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100
    p-6 text-gray-700 leading-relaxed text-base
    max-h-[650px] overflow-y-auto scroll-smooth space-y-6 dark:bg-black dark:text-white">

                    <div className="text-center space-y-3">
                        <b className="text-lg md:text-xl font-semibold text-gray-900 bg-white dark:bg-black dark:text-white block">
                            {t("offer_header")}
                        </b>

                        <p>{t("offer_intro")}</p>
                    </div>

                    <div className="space-y-3">
                        <b className="text-gray-900 bg-white dark:bg-black dark:text-white font-semibold">{t("offer_s1")}</b>
                        <p>{t("offer_s1_1")}</p>
                        <p>{t("offer_s1_2")}</p>
                        <p>{t("offer_s1_3")}</p>
                        <p>{t("offer_s1_4")}</p>
                        <p>{t("offer_s1_5")}</p>
                        <p>{t("offer_s1_6")}</p>
                        <p>{t("offer_s1_7")}</p>
                    </div>

                    <div className="space-y-3">
                        <b className="text-gray-900 bg-white dark:bg-black dark:text-white font-semibold">{t("offer_s2")}</b>
                        <p>{t("offer_s2_1")}</p>
                        <p>{t("offer_s2_2")}</p>
                    </div>

                    <div className="space-y-3">
                        <b className="text-gray-900 bg-white dark:bg-black dark:text-white font-semibold">{t("offer_s3")}</b>
                        <p>{t("offer_s3_1")}</p>
                        <p>{t("offer_s3_2")}</p>
                    </div>

                    <div className="space-y-3">
                        <b className="text-gray-900 bg-white dark:bg-black dark:text-white font-semibold">{t("offer_s4")}</b>
                        <p>{t("offer_s4_1")}</p>
                        <p>{t("offer_s4_2")}</p>
                    </div>

                    <div className="space-y-3">
                        <b className="text-gray-900 bg-white dark:bg-black dark:text-white font-semibold">{t("offer_s5")}</b>
                        <p>{t("offer_s5_1")}</p>
                        <p>{t("offer_s5_2")}</p>
                    </div>

                    <div className="space-y-3">
                        <b className="text-gray-900 bg-white dark:bg-black dark:text-white font-semibold">{t("offer_s6")}</b>
                        <p>{t("offer_s6_1")}</p>
                    </div>

                    <div className="space-y-3">
                        <b className="text-gray-900 bg-white dark:bg-black dark:text-white font-semibold">{t("offer_s7")}</b>
                        <p>{t("offer_s7_1")}</p>
                    </div>

                    <div className="space-y-3">
                        <b className="text-gray-900 bg-white dark:bg-black dark:text-white font-semibold">{t("offer_s8")}</b>
                        <p>{t("offer_s8_1")}</p>
                    </div>

                    <div className="space-y-3">
                        <b className="text-gray-900 bg-white dark:bg-black dark:text-white font-semibold">{t("offer_s9")}</b>
                        <p>{t("offer_s9_1")}</p>
                    </div>

                    <div className="space-y-3">
                        <b className="text-gray-900 bg-white dark:bg-black dark:text-white font-semibold">{t("offer_s10")}</b>
                        <p>{t("offer_s10_1")}</p>
                    </div>

                    <div className="space-y-3">
                        <b className="text-gray-900 bg-white dark:bg-black dark:text-white font-semibold">{t("offer_s11")}</b>
                        <p>{t("offer_s11_1")}</p>
                    </div>

                    <div className="space-y-3">
                        <b className="text-gray-900 bg-white dark:bg-black dark:text-white font-semibold">{t("offer_s12")}</b>
                        <p>{t("offer_s12_1")}</p>
                    </div>

                    <div className="space-y-3">
                        <b className="text-gray-900 bg-white dark:bg-black dark:text-white font-semibold">{t("offer_s13")}</b>
                        <p>{t("offer_s13_1")}</p>
                    </div>

                    <div className="space-y-3">
                        <b className="text-gray-900 bg-white dark:bg-black dark:text-white font-semibold">{t("offer_s14")}</b>
                        <p>{t("offer_s14_1")}</p>
                    </div>

                    <div className="space-y-3">
                        <b className="text-gray-900 bg-white dark:bg-black dark:text-white font-semibold">{t("offer_s15")}</b>
                        <p>{t("offer_s15_1")}</p>
                    </div>

                    <div className="space-y-3">
                        <b className="text-gray-900 bg-white dark:bg-black dark:text-white font-semibold">{t("offer_s16")}</b>
                        <p>{t("offer_s16_1")}</p>
                        <p>{t("offer_s16_2")}</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Offer;