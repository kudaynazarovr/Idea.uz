import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { ButtonContact } from "../../Buttons/ButtonContact";
import { useTranslation } from "react-i18next";

function Contact() {
    const { t } = useTranslation();

    return (
        <>
            <div className="w-full h-screen flex items-center justify-center">

                <div className="w-[80%] h-[80%] px-40 py-20 flex flex-col gap-y-20 bg-white dark:bg-black text-black dark:text-white rounded-2xl max-lg:px-30 max-md:px-10 max-md:w-full max-sm:px-0 max-sm:h-full">
                    
                    <div className="flex flex-col gap-y-5 max-sm:p-10">
                        <b className="text-3xl">
                            {t("contact_title")}
                        </b>

                        <div className="flex flex-col gap-y-4">

                            <div className="flex items-center gap-x-2 hover:text-pink-500 hover:cursor-pointer max-sm:flex-col max-sm:items-start">
                                <i className="text-2xl text-pink-500">
                                    <IoLocationOutline />
                                </i>

                                <b className="text-lg">{t("contact_address")}</b>

                                <p>г. Ташкент, ул Мирабад, 41/3</p>
                            </div>

                            <div className="flex items-center gap-x-2 hover:text-pink-500 hover:cursor-pointer max-sm:flex-col max-sm:items-start">
                                <i className="text-2xl text-pink-500">
                                    <FiPhone />
                                </i>

                                <b className="text-lg">{t("contact_phone")}</b>

                                <p>71 230 77 99</p>
                            </div>

                            <div className="flex items-center gap-x-2 hover:text-pink-500 hover:cursor-pointer max-sm:flex-col max-sm:items-start">
                                <i className="text-2xl text-pink-500">
                                    <MdOutlineEmail />
                                </i>

                                <b className="text-lg">{t("contact_email")}</b>

                                <p>info@ideagroup.uz</p>
                            </div>

                        </div>
                    </div>

                    <form className="flex flex-col gap-y-5 max-sm:items-center">

                        {/* NAME */}
                        <div className="w-[50%] relative max-md:w-[90%]">
                            <input
                                type="text"
                                placeholder=" "
                                className="peer w-full border border-gray-200 rounded-xl px-4 pt-5 pb-2 outline-none focus:border-blue-500 transition"
                            />
                            <label
                                className="absolute left-4 -top-2 text-sm text-gray-400 bg-white dark:bg-black dark:text-white px-1 transition-all
                                peer-placeholder-shown:top-3
                                peer-placeholder-shown:text-base
                                peer-focus:-top-2
                                peer-focus:text-sm
                                peer-focus:text-blue-500
                                peer-not-placeholder-shown:-top-2
                                peer-not-placeholder-shown:text-sm"
                            >
                                {t("contact_name")}
                            </label>
                        </div>

                        {/* EMAIL */}
                        <div className="w-[50%] relative max-md:w-[90%]">
                            <input
                                type="email"
                                placeholder=" "
                                className="peer w-full border border-gray-200 rounded-xl px-4 pt-5 pb-2 outline-none focus:border-blue-500 transition"
                            />
                            <label
                                className="absolute left-4 -top-2 text-sm text-gray-400 bg-white dark:bg-black dark:text-white px-1 transition-all
                                peer-placeholder-shown:top-3
                                peer-placeholder-shown:text-base
                                peer-focus:-top-2
                                peer-focus:text-sm
                                peer-focus:text-blue-500
                                peer-not-placeholder-shown:-top-2
                                peer-not-placeholder-shown:text-sm"
                            >
                                Email
                            </label>
                        </div>

                        {/* MESSAGE */}
                        <div className="w-[50%] relative max-md:w-[90%]">
                            <textarea
                                rows="4"
                                placeholder=" "
                                className="peer w-full border border-gray-200 rounded-xl px-4 pt-5 pb-2 outline-none resize-none focus:border-blue-500 transition"
                            />
                            <label
                                className="absolute left-4 -top-2 text-sm text-gray-400 bg-white dark:bg-black dark:text-white px-1 transition-all
                                peer-placeholder-shown:top-3
                                peer-placeholder-shown:text-base
                                peer-focus:-top-2
                                peer-focus:text-sm
                                peer-focus:text-blue-500
                                peer-not-placeholder-shown:-top-2
                                peer-not-placeholder-shown:text-sm"
                            >
                                {t("contact_message")}
                            </label>
                        </div>

                        <div className="w-[50%] max-md:w-[90%]">
                            <ButtonContact />
                        </div>

                    </form>

                </div>

            </div>
        </>
    )
}

export default Contact;