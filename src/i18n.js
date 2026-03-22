import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    ru: {
        translation: {
            Избранное: "Избранное",
            Корзина: "Корзина",
            Тема: "Тема",
            Войти: "Войти",
            Сравнение: "Сравнение",
            Бренд: "Бренд",
            КупитьCразу: "Купить сразу",
            Партнерам: "Партнерам",
            СтатьПартнером: "Стать партнером",
            УсловияCотрудничества: "Условия сотрудничества",
            ВозвратИОбмен: "Возврат и обмен",
            ОНас: "О нас",
            НашиМагазины: "Наши магазины",
            Контакты: "Контакты",
            Статьи: "Статьи",
            Рассрочка: "Рассрочка",
            Оферта: "Оферта",
            Вакансии: "Вакансии",
            ЕжедневноC: "Ежедневно с 9:00 до 21:00",
            Почта: "Почта",
            ОставитьCообщение: "Оставить сообщение",
        }
    },
    en: {
        translation: {
            Избранное: "Favorites",
            Корзина: "Card",
            Тема: "Topic",
            Войти: "Login",
            Сравнение: "Comparison",
            Бренд: "Brand",
            КупитьCразу: "Buy Now",
            Партнерам: "Partners",
            СтатьПартнером: "Become a partner",
            УсловияCотрудничества: "Terms of cooperation",
            ВозвратИОбмен: "Return and exchange",
            ОНас: "About us",
            НашиМагазины: "Our stores",
            Контакты: "Contacts",
            Статьи: "Articles",
            Рассрочка: "Installment",
            Оферта: "Offer",
            Вакансии: "Vacancies",
            ЕжедневноC: "Daily from 9:00 to 21:00",
            Почта: "Mail",
            ОставитьCообщение: "Leave a message",
        }
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: localStorage.getItem("Lang") || "ru",
    interpolation: {
        escapeValue: false
    }
});

export default i18n;