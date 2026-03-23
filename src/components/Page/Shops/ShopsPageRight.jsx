import { Dropdown } from "antd";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";

const cities = [
    "Чиланзар",
    "Юнусабад",
    "Сергели",
    "Бектемир",
    "Мирабад",
    "Шайхантахур",
    "Навои",
    "Самарканд",
    "Нукус",
    "Конгырат",
    "Хожели",
    "Мойнак",
    "Чирчик",
    "Ерлых Кала",
    "Беруни",
    "Бухара",
    "Хива",
];

export const ShopsPageRight = () => {
    const { t, i18n } = useTranslation();

    const [selected, setSelected] = useState("Все области");

    // 🔥 фикс: обновление при смене языка
    useEffect(() => {
        setSelected(t("regions_title"));
    }, [i18n.language]);

    const regions = [
        t("region_tashkent"),
        t("region_tashkent_region"),
        t("region_karakalpak"),
        t("region_andijan"),
        t("region_bukhara"),
        t("region_jizzakh"),
        t("region_kashkadarya"),
        t("region_navoi"),
        t("region_namangan"),
        t("region_samarkand"),
        t("region_surxondaryo"),
        t("region_sirdaryo"),
        t("region_fergana"),
        t("region_khorezm"),
    ];

    const items = regions.map((region, index) => ({
        key: index,
        label: (
            <div
                onClick={() => setSelected(region)}
                className={`flex items-center justify-between px-3 py-2 rounded-xl transition cursor-pointer
                ${selected === region
                        ? "bg-blue-500 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
            >
                <span>{region}</span>

                {selected === region && (
                    <Check size={18} className="ml-2" />
                )}
            </div>
        ),
    }));

    return (
        <div className="w-[30%] bg-white dark:bg-black text-black dark:text-white p-5 rounded-2xl">

            {/* DROPDOWN */}
            <Dropdown
                menu={{ items }}
                trigger={["click"]}
                overlayClassName="rounded-2xl shadow-xl"
            >
                <button
                    onClick={(e) => e.preventDefault()}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
                >
                    <span className="text-gray-800 font-medium">
                        {selected}
                    </span>

                    <span className="text-gray-400">▼</span>
                </button>
            </Dropdown>

            {/* CITIES */}
            <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">
                    {t("shops_title")}
                </h3>

                <div className="grid grid-cols-2 gap-3">
                    {cities.map((city, index) => (
                        <div
                            key={index}
                            className="p-4 rounded-2xl text-white font-medium cursor-pointer
                            bg-gradient-to-br from-blue-500 to-indigo-600
                            hover:scale-105 hover:shadow-lg transition"
                        >
                            {city}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};