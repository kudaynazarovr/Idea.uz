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
            ВопросыИОтветы: "Вопросы и ответы",
            КакСделатьЗаказНаСайте: "Как сделать заказ на сайте",
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
            faq1: "Как можно оформить заказ с сайта?",
            faq1_desc1: "Вам необходимо:",
            faq1_desc2: "1. выбрать понравившуюся модель бытовой техники или электроники",
            faq1_desc3: "2. добавить товар в корзину",
            faq1_desc4: "3. указать Имя и Фамилию, а также номер телефона",
            faq1_desc5: "Наши специалисты оперативно свяжутся с Вами для уточнения информации",
            faq1_desc6: "Детали заказа можно увидеть в личном кабинете в разделе 'Заказы'",

            faq2: "Можно ли оформить заказ по всему Узбекистану?",
            faq2_desc: "Да, товары можно приобрести самовывозом или с доставкой",

            faq3: "На какие товары распространяется гарантия?",
            faq3_desc: "Гарантия распространяется на всю технику",

            faq4: "Какие документы нужны для рассрочки?",
            faq4_desc1: "Паспорт",
            faq4_desc2: "Пластиковая карта Uzcard / Humo",
            faq4_desc3: "Решение вы получите сразу после скоринга",

            faq5: "Что такое скоринг?",
            faq5_desc1: "Скоринг — это система оценки платежеспособности",
            faq5_desc2: "Система анализирует данные и выдает результат",

            faq6: "Какие критерии влияют на скоринг?",
            faq6_desc1: "стабильный доход",
            faq6_desc2: "ежемесячные поступления",
            faq6_desc3: "отсутствие задолженностей",

            faq7: "Отличается ли цена онлайн и в магазине?",
            faq7_desc: "Цена одинаковая во всех магазинах и на сайте",

            order_title: "Как сделать заказ на сайте",

            order_method1: "Способ 1",
            order_method1_text1: "Зайдите на страницу товара и нажмите на кнопку «Добавить в корзину». Далее можно продолжить покупки или перейти к оформлению заказа.",
            order_method1_text2: "Пока оформление заказа не завершено, можно изменять количество экземпляров товара в корзине, стоимость пересчитается автоматически. В конце проверьте данные и нажмите «Перейти к оформлению».",
            order_method1_text3: "Введите свои данные и нажмите «Оформить заказ». Вы получите номер заказа и SMS-подтверждение.",

            order_method2: "Способ 2",
            order_method2_text: "Зайдите на страницу товара и нажмите «Заказать». Введите данные и отправьте заявку. Вы получите SMS-подтверждение.",

            order_note: "*Обратите внимание, что под каждым товаром есть кнопка «Добавить в список желаний».",

            exchange_title: "Возврат и обмен",
            exchange_rules: "ПРАВИЛА ОБМЕНА И ВОЗВРАТА ТОВАРОВ",

            exchange_section1: "1. Возврат и обмен товаров надлежащего качества",
            exchange_p1: "Покупатель имеет право в течение 10 дней обменять товар при сохранении его состояния.",
            exchange_p2: "При отсутствии аналогичного товара возвращается денежная сумма.",

            exchange_conditions: "1.2. Условия возврата:",
            exchange_c1: "товар не использовался",
            exchange_c2: "сохранён товарный вид",
            exchange_c3: "есть чек",

            exchange_not_return: "1.3. Товары, не подлежащие возврату:",
            exchange_n1: "товары гигиены и медицины",
            exchange_n2: "косметика и парфюмерия",
            exchange_n3: "техника и электроника",

            exchange_section2: "2. Возврат товаров ненадлежащего качества",
            exchange_defects: "Покупатель имеет право требовать:",
            exchange_d1: "ремонт",
            exchange_d2: "замену",
            exchange_d3: "возврат денег",

            exchange_procedure: "Процедура:",
            exchange_pr1: "заявление",
            exchange_pr2: "экспертиза",
            exchange_pr3: "решение",

            exchange_terms: "Сроки:",
            exchange_t1: "7 дней — дефект",
            exchange_t2: "до 20 дней — экспертиза",

            exchange_law: "Правовые основания",
            about_title: "О нас",

            about_p1: "idea — это сеть магазинов бытовой техники и электроники, ориентированная на предоставление клиентам возможности покупать товары в рассрочку без лишних усилий. Сеть была основана в 2019 году.",

            about_p2: "Основной концепцией магазина является «Один документ, одна цена, одна idea». Поэтому оформить рассрочку можно за несколько минут.",

            about_p3: "Товары можно оформить в рассрочку без первоначального взноса на 12, 18 или 24 месяцев.",

            about_p4: "Широкий ассортимент, сертифицированная техника мировых брендов и квалифицированный персонал помогут сделать правильный выбор.",
            regions_title: "Все области",
            shops_title: "Где есть магазины",

            region_tashkent: "Ташкент",
            region_tashkent_region: "Ташкентская область",
            region_karakalpak: "Республика Каракалпакстан",
            region_andijan: "Андижанская область",
            region_bukhara: "Бухарская область",
            region_jizzakh: "Джизакская область",
            region_kashkadarya: "Кашкадарьинская область",
            region_navoi: "Навоийская область",
            region_namangan: "Наманганская область",
            region_samarkand: "Самаркандская область",
            region_surxondaryo: "Сурхандарьинская область",
            region_sirdaryo: "Сырдарьинская область",
            region_fergana: "Ферганская область",
            region_khorezm: "Хорезмская область",
            contact_title: "Контакты",
            contact_address: "Адрес:",
            contact_phone: "Телефон:",
            contact_email: "E-mail:",

            contact_name: "Ваше имя",
            contact_message: "Сообщение",
            articles_title: "Статьи",

            article1_title: "Оплата покупки быстро и легко",
            article1_desc: "На сайте доступна оплата заказа через систему мобильного",

            article2_title: "Покупка техники по перечислению",

            article3_title: "Оплата покупки быстро и легко",
            article3_desc: "На сайте доступна оплата заказа через систему мобильного",

            article4_title: "Цены на товары",

            article5_title: "О нас пишут",
            article5_desc: "В Ташкенте открылся первый магазин бытовой техники и..",

            article6_title: "Настоящая рассрочка",
            article6_desc: "Что такое настоящая рассрочка?",

            article7_title: "Доставим бесплатно",
            article7_desc: "Вот вам небольшой спойлер: техника будет приезжать к вам сама!",
            installment_title: "Рассрочка",

            installment_p1: "В магазине бытовой техники и электроники idea можно оформить моментальную рассрочку на весь ассортимент.",
            installment_p2: "Забирайте - сейчас, платите - потом!",
            installment_p3: "Во всех филиалах сети магазинов idea можно купить технику в рассрочку на 6, 12, 18, 24 или 30 месяцев без предоплаты и с бесплатной доставкой.",
            installment_p4: "В интернет-магазине доступна рассрочка на 6 месяцев без предоплаты.",
            installment_p5: "При оформлении заключается договор с финансовым партнёром.",
            installment_p6: "idea не несёт ответственности за нарушение условий договора сторонами.",
            installment_p7: "Условия и документы:",

            installment_b1: "1.Оформление на паспорт:",
            installment_p8: "-ежемесячный доход от 500 000 сум",

            installment_b2: "2.Паспорт + карта Uzcard или Humo:",
            installment_p9: "-принимаются Uzcard, Humo",
            installment_p10: "-карта от 3 месяцев",
            installment_p11: "-доступно по всему Узбекистану",

            installment_p12: "Решение принимается сразу после скоринга.",
            installment_b3: "Минимальная сумма — 500 000 сум.",
            installment_p13: "Можно оформить онлайн, по телефону или в магазине.",
            offer_title: "Оферта",
            offer_header: "ПУБЛИЧНАЯ ОФЕРТА ООО «IDEA CONCEPT GROUP»",
            offer_intro: "Настоящая публичная Оферта является официальным предложением заключить договор купли-продажи.",

            offer_s1: "1. ТЕРМИНЫ И ОПРЕДЕЛЕНИЯ",
            offer_s1_1: "Акцепт — согласие Покупателя.",
            offer_s1_2: "Покупатель — физическое лицо.",
            offer_s1_3: "Продавец — ООО «IDEA CONCEPT GROUP».",
            offer_s1_4: "Сайт — https://idea.uz.",
            offer_s1_5: "Заказ — оформленные товары.",
            offer_s1_6: "Интернет-магазин — сайт.",
            offer_s1_7: "Товар — продукция.",

            offer_s2: "2. ПРЕДМЕТ ДОГОВОРА",
            offer_s2_1: "Продавец передает товар, покупатель оплачивает.",
            offer_s2_2: "Условия определяются при заказе.",

            offer_s3: "3. АКЦЕПТ ОФЕРТЫ",
            offer_s3_1: "Оплата = согласие.",
            offer_s3_2: "Договор считается заключённым.",

            offer_s4: "4. ОБЩИЕ ПОЛОЖЕНИЯ",
            offer_s4_1: "Продавец может изменять условия.",
            offer_s4_2: "Актуальная версия на сайте.",

            offer_s5: "5. ПРАВА И ОБЯЗАННОСТИ",
            offer_s5_1: "Продавец выполняет заказ.",
            offer_s5_2: "Покупатель оплачивает.",

            offer_s6: "6. ИНФОРМАЦИЯ О ТОВАРЕ",
            offer_s6_1: "Информация предоставляется на сайте.",

            offer_s7: "7. ПОРЯДОК ПОКУПКИ",
            offer_s7_1: "Заказ через сайт или магазин.",

            offer_s8: "8. ЦЕНА",
            offer_s8_1: "Цена может изменяться.",

            offer_s9: "9. ДОСТАВКА",
            offer_s9_1: "Срок зависит от региона.",

            offer_s10: "10. ГАРАНТИЯ",
            offer_s10_1: "Гарантия от производителя.",

            offer_s11: "11. ВОЗВРАТ",
            offer_s11_1: "Согласно закону.",

            offer_s12: "12. ФОРС-МАЖОР",
            offer_s12_1: "Ответственность снимается.",

            offer_s13: "13. ОТВЕТСТВЕННОСТЬ",
            offer_s13_1: "Споры по закону.",

            offer_s14: "14. СПОРЫ",
            offer_s14_1: "Переговоры или суд.",

            offer_s15: "15. ПРОЧЕЕ",
            offer_s15_1: "Данные обрабатываются.",

            offer_s16: "16. РЕКВИЗИТЫ",
            offer_s16_1: "г. Ташкент, ул. Мирабад 41/3",
            offer_s16_2: "ИНН: 306 330 566",
            vacancies_title: "Резюме в формате PDF или DOCX",

            vacancy1_title: "Менеджер по оформлению",
            vacancy1_desc: "Коммуникабельность, активность, нацеленность на результат, ответственность, способность к обучению — всё это потребуется на данную позицию!",
            vacancy1_time: "по итогам собеседования",

            vacancy2_title: "Продавец-консультант",
            vacancy2_desc: "Если Вы активны и любите технику, общение для Вас как воздух, а помощь людям — Ваше призвание, тогда эта вакансия для Вас!",
            vacancy2_time: "по итогам собеседования",

            vacancy_desc_label: "Описание :",
            vacancy_time_label: "Рабочие часы :",
            feedback_title: "Обратная связь",
            feedback_name: "Ваше имя",
            feedback_message: "Сообщение",
            feedback_button: "Отправить"
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
            КакСделатьЗаказНаСайте: "How to order on the site",
            ВопросыИОтветы: "Questions and Answers",
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
            faq1: "How to place an order on the website?",
            faq1_desc1: "You need to:",
            faq1_desc2: "1. choose a product",
            faq1_desc3: "2. add it to cart",
            faq1_desc4: "3. enter your name and phone",
            faq1_desc5: "Our managers will contact you",
            faq1_desc6: "Order details are in your account",

            faq2: "Can I order across Uzbekistan?",
            faq2_desc: "Yes, delivery and pickup are available",

            faq3: "What products have warranty?",
            faq3_desc: "All products have official warranty",

            faq4: "What documents are needed?",
            faq4_desc1: "Passport",
            faq4_desc2: "Uzcard / Humo card",
            faq4_desc3: "Instant decision after scoring",

            faq5: "What is scoring?",
            faq5_desc1: "Scoring evaluates your creditworthiness",
            faq5_desc2: "System analyzes your data",

            faq6: "What affects scoring?",
            faq6_desc1: "stable income",
            faq6_desc2: "monthly income",
            faq6_desc3: "no debts",

            faq7: "Are prices the same?",
            faq7_desc: "Yes, same in stores and online",

            order_title: "How to order on the website",

            order_method1: "Method 1",
            order_method1_text1: "Go to the product page and click 'Add to cart'.",
            order_method1_text2: "You can change quantity before checkout. The price updates automatically.",
            order_method1_text3: "Enter your details and confirm order. You will receive an SMS confirmation.",

            order_method2: "Method 2",
            order_method2_text: "Click 'Order', enter your details and submit the request.",

            order_note: "*Each product has an 'Add to wishlist' button.",
            exchange_title: "Return and exchange",
            exchange_rules: "RETURN POLICY",

            exchange_section1: "1. Return of proper quality goods",
            exchange_p1: "You can return goods within 10 days.",
            exchange_p2: "If no replacement — refund is issued.",

            exchange_conditions: "Return conditions:",
            exchange_c1: "unused",
            exchange_c2: "original condition",
            exchange_c3: "receipt available",

            exchange_not_return: "Non-returnable goods:",
            exchange_n1: "hygiene products",
            exchange_n2: "cosmetics",
            exchange_n3: "electronics",

            exchange_section2: "2. Defective goods",
            exchange_defects: "You can request:",
            exchange_d1: "repair",
            exchange_d2: "replacement",
            exchange_d3: "refund",

            exchange_procedure: "Procedure:",
            exchange_pr1: "application",
            exchange_pr2: "inspection",
            exchange_pr3: "decision",

            exchange_terms: "Terms:",
            exchange_t1: "7 days — defect",
            exchange_t2: "up to 20 days — inspection",

            exchange_law: "Legal basis",
            about_title: "About us",

            about_p1: "idea is a chain of electronics stores offering easy installment purchases. Founded in 2019.",

            about_p2: "The concept is simple: one document, one price, one idea.",

            about_p3: "Products are available in installments for 12, 18 or 24 months without down payment.",

            about_p4: "Wide ассортимент, certified products and professional staff help customers choose.",
            regions_title: "All regions",
            shops_title: "Where we are located",

            region_tashkent: "Tashkent",
            region_tashkent_region: "Tashkent region",
            region_karakalpak: "Karakalpakstan",
            region_andijan: "Andijan region",
            region_bukhara: "Bukhara region",
            region_jizzakh: "Jizzakh region",
            region_kashkadarya: "Kashkadarya region",
            region_navoi: "Navoi region",
            region_namangan: "Namangan region",
            region_samarkand: "Samarkand region",
            region_surxondaryo: "Surkhandarya region",
            region_sirdaryo: "Sirdarya region",
            region_fergana: "Fergana region",
            region_khorezm: "Khorezm region",
            contact_title: "Contacts",
            contact_address: "Address:",
            contact_phone: "Phone:",
            contact_email: "E-mail:",

            contact_name: "Your name",
            contact_message: "Message",
            articles_title: "Articles",

            article1_title: "Easy and fast payment",
            article1_desc: "You can pay online easily",

            article2_title: "Purchase by transfer",

            article3_title: "Easy and fast payment",
            article3_desc: "You can pay online easily",

            article4_title: "Product prices",

            article5_title: "About us in media",
            article5_desc: "First electronics store opened in Tashkent...",

            article6_title: "Real installment",
            article6_desc: "What is real installment?",

            article7_title: "Free delivery",
            article7_desc: "Small spoiler: your tech comes to you!",
            installment_title: "Installment",

            installment_p1: "You can get instant installment for all products.",
            installment_p2: "Take now, pay later!",
            installment_p3: "Installment available for 6, 12, 18, 24 or 30 months.",
            installment_p4: "Online store offers 6-month installment.",
            installment_p5: "A contract is signed with financial partner.",
            installment_p6: "idea is not responsible for contract violations.",
            installment_p7: "Conditions:",

            installment_b1: "1.Passport:",
            installment_p8: "monthly income from 500,000",

            installment_b2: "2.Passport + card:",
            installment_p9: "Uzcard, Humo accepted",
            installment_p10: "card active 3 months",
            installment_p11: "available in Uzbekistan",

            installment_p12: "Decision is instant.",
            installment_b3: "Minimum price — 500,000.",
            installment_p13: "Apply online, by phone or in store.",
            offer_title: "Offer",
            offer_header: "PUBLIC OFFER IDEA CONCEPT GROUP",
            offer_intro: "This is a public offer to conclude a sales contract.",

            offer_s1: "1. TERMS",
            offer_s1_1: "Acceptance — agreement.",
            offer_s1_2: "Buyer — individual.",
            offer_s1_3: "Seller — company.",
            offer_s1_4: "Website — idea.uz",
            offer_s1_5: "Order — selected goods",
            offer_s1_6: "Store — website",
            offer_s1_7: "Product — goods",

            offer_s2: "2. SUBJECT",
            offer_s2_1: "Seller transfers goods.",
            offer_s2_2: "Conditions at checkout.",

            offer_s3: "3. ACCEPTANCE",
            offer_s3_1: "Payment = agreement.",
            offer_s3_2: "Contract is active.",

            offer_s4: "4. GENERAL",
            offer_s4_1: "Seller may change terms.",
            offer_s4_2: "Actual version online.",

            offer_s5: "5. RIGHTS",
            offer_s5_1: "Seller processes order.",
            offer_s5_2: "Buyer pays.",

            offer_s6: "6. INFO",
            offer_s6_1: "Info on site.",

            offer_s7: "7. ORDER",
            offer_s7_1: "Via site/store.",

            offer_s8: "8. PRICE",
            offer_s8_1: "Price may change.",

            offer_s9: "9. DELIVERY",
            offer_s9_1: "Depends on region.",

            offer_s10: "10. WARRANTY",
            offer_s10_1: "Manufacturer warranty.",

            offer_s11: "11. RETURN",
            offer_s11_1: "According to law.",

            offer_s12: "12. FORCE MAJEURE",
            offer_s12_1: "No responsibility.",

            offer_s13: "13. LIABILITY",
            offer_s13_1: "Legal resolution.",

            offer_s14: "14. DISPUTES",
            offer_s14_1: "Negotiation or court.",

            offer_s15: "15. OTHER",
            offer_s15_1: "Data processed.",

            offer_s16: "16. DETAILS",
            offer_s16_1: "Tashkent address",
            offer_s16_2: "TIN: 306330566",
            vacancies_title: "Resume in PDF or DOCX",

            vacancy1_title: "Documentation Manager",
            vacancy1_desc: "Communication skills, activity, responsibility and willingness to learn are required.",
            vacancy1_time: "after interview",

            vacancy2_title: "Sales Consultant",
            vacancy2_desc: "If you love technology and helping people, this job is for you!",
            vacancy2_time: "after interview",

            vacancy_desc_label: "Description:",
            vacancy_time_label: "Working hours:",
            feedback_title: "Feedback",
            feedback_name: "Your name",
            feedback_message: "Message",
            feedback_button: "Send"
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