import { useTranslation } from "react-i18next";

export const Feedback = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="px-40 py-20 max-lg:px-10 max-md:px-5 max-sm:px-0 flex items-center justify-center bg-white dark:bg-black text-black dark:text-white">
                <form className="w-[70%] h-[70%] shadow-[0px_0px_27px_0px_rgba(34,60,80,0.19)] bg-white dark:bg-black text-black dark:text-white p-5 rounded-2xl flex flex-col gap-y-5 max-sm:w-full max-sm:h-full">

                    <b className="text-3xl">
                        {t("feedback_title")}
                    </b>

                    <div className="relative">
                        <input
                            type="text"
                            placeholder=" "
                            className="peer w-full border border-gray-200 rounded-xl px-4 pt-5 pb-2 outline-none focus:border-blue-500 transition"
                        />
                        <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all
      peer-placeholder-shown:top-3
      peer-placeholder-shown:text-base
      peer-focus:-top-2
      peer-focus:text-sm
      peer-focus:text-blue-500
      bg-white dark:bg-black dark:text-white px-1"
                        >
                            {t("feedback_name")}
                        </label>
                    </div>

                    <div className="relative">
                        <input
                            type="email"
                            placeholder=" "
                            className="peer w-full border border-gray-200 rounded-xl px-4 pt-5 pb-2 outline-none focus:border-blue-500 transition"
                        />
                        <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all
      peer-placeholder-shown:top-3
      peer-placeholder-shown:text-base
      peer-focus:-top-2
      peer-focus:text-sm
      peer-focus:text-blue-500
      bg-white dark:bg-black dark:text-white px-1"
                        >
                            Email
                        </label>
                    </div>

                    <div className="relative">
                        <textarea
                            rows="4"
                            placeholder=" "
                            className="peer w-full border border-gray-200 rounded-xl px-4 pt-5 pb-2 outline-none resize-none focus:border-blue-500 transition"
                        />
                        <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all
      peer-placeholder-shown:top-3
      peer-placeholder-shown:text-base
      peer-focus:-top-2
      peer-focus:text-sm
      peer-focus:text-blue-500
      bg-white dark:bg-black dark:text-white px-1"
                        >
                            {t("feedback_message")}
                        </label>
                    </div>

                    <button className="w-full cursor-pointer bg-pink-500 text-2xl text-white rounded-2xl px-5 py-2">
                        {t("feedback_button")}
                    </button>

                </form>
            </div>
        </>
    )
}