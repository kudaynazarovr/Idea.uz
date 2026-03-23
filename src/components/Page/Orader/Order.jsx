import { useTranslation } from "react-i18next";

function Order() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col gap-y-4 px-40 py-20 max-lg:px-10 max-md:px-5 max-sm:px-0 
        bg-white dark:bg-black text-black dark:text-white">

            <h1 className="text-4xl font-bold flex items-center justify-center max-md:items-start">
                {t("order_title")}
            </h1>

            <div className="w-full flex items-center justify-center">
                <div className="w-[80%] max-sm:w-full flex flex-col gap-y-5 
                shadow-[0px_0px_27px_0px_rgba(34,60,80,0.19)] 
                dark:shadow-[0px_0px_27px_0px_rgba(255,255,255,0.05)]
                rounded-2xl p-5 
                bg-white dark:bg-zinc-900 
                transition duration-300">

                    <div className="flex flex-col gap-y-2">
                        <b className="text-xl">{t("order_method1")}</b>

                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            {t("order_method1_text1")}
                        </p>
                    </div>

                    <div>
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            {t("order_method1_text2")}
                        </p>
                    </div>

                    <div>
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            {t("order_method1_text3")}
                        </p>
                    </div>

                    <div className="flex flex-col gap-y-2 pt-2 border-t border-gray-100 dark:border-zinc-700">
                        <b className="text-xl">{t("order_method2")}</b>

                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            {t("order_method2_text")}
                        </p>
                    </div>

                    <div className="pt-2 border-t border-gray-100 dark:border-zinc-700">
                        <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                            {t("order_note")}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Order;