import { useTranslation } from "react-i18next"

export const ButtonLeaveMessege = () => {
    const { t } = useTranslation()

    return (
        <button className="px-5 py-2 border border-white text-white rounded-2xl hover:text-pink-500 hover:border-pink-500 transition-colors duration-300 cursor-pointer">
            {t("ОставитьCообщение")}
        </button>
    )
}