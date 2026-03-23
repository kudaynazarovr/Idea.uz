import { useTranslation } from "react-i18next";

function Installment() {
    const { t } = useTranslation();

    return (
        <>
            <div className="px-40 py-20 max-lg:px-20 max-md:px-10 max-sm:px-0 flex flex-col gap-y-5 bg-white dark:bg-black text-black dark:text-white">
                <b className="text-4xl">{t("installment_title")}</b>

                <div className="w-full h-full flex flex-col gap-y-4 text-lg rounded-2xl p-5 shadow-[0px_0px_27px_0px_rgba(34,60,80,0.19)] bg-white dark:bg-black text-black dark:text-white">

                    <p>{t("installment_p1")}</p>

                    <p>{t("installment_p2")}</p>

                    <p>{t("installment_p3")}</p>

                    <p>{t("installment_p4")}</p>

                    <p>{t("installment_p5")}</p>

                    <p>{t("installment_p6")}</p>

                    <p>{t("installment_p7")}</p>

                    <b>{t("installment_b1")}</b>

                    <p>{t("installment_p8")}</p>

                    <b>{t("installment_b2")}</b>

                    <p>{t("installment_p9")}</p>

                    <p>{t("installment_p10")}</p>

                    <p>{t("installment_p11")}</p>

                    <p>{t("installment_p12")}</p>

                    <b>{t("installment_b3")}</b>

                    <p>{t("installment_p13")}</p>

                </div>
            </div>
        </>
    )
}

export default Installment;