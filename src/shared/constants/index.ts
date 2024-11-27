import { Dimensions, LayoutAnimation, NativeModules, Platform } from "react-native";

export const SUPPORT_EMAIL = "easyFind@gmail.com";

export const LayoutAmimationConfig = {
  duration: 200,
  create: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity
  },
  update: {
    type: LayoutAnimation.Types.easeInEaseOut
  },
  delete: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity
  }
};

export const SCREEN_WIDTH = Dimensions.get("window").width;
export const SCREEN_HEIGHT = Dimensions.get("window").height;
export const TERMS_AND_CONDITIONS_LINK = "";
export const PRIVACY_POLICY_LINK = "";
export const HIT_SLOP = {
  left: 10,
  right: 10,
  bottom: 10,
  top: 10
};

export const emailRegexp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
export const BUTTON_VARIANTS = {
  primary: "primary",
  secondary: "secondary"
};
export const LOTTIE_BLACK_LOADER = require("shared/assets/lottie/loader-black.json");
export const LOTTIE_WHITE_LOADER = require("shared/assets/lottie/loader-white.json");

export const LOGO_ICON = require("shared/assets/images/logoCircle.png");
export const LOGIN_BACKGROUND = require("shared/assets/images/loginBackground.png");

export const FONT_SIZE = {
  /** xs = 10 */
  xs: 10,
  /** sm = 12 */
  sm: 12,
  /** md = 14 */
  md: 14,
  /** md = 16 */
  lg: 16,
  /** xl = 20 */
  xl: 20,
  /** xxl = 24 */
  xxl: 24
};

export const SIZE = {
  /** xs = 2 */
  xs: 2,
  /** xs = 4 */
  x2s: 4,
  /** s = 6 */
  s: 6,
  /** sm = 8 */
  sm: 8,
  /** s2m = 12 */
  s2m: 12,
  /** md = 16 */
  md: 16,
  /** lg = 20 */
  lg: 20,
  /** xl = 24 */
  xl: 24,
  /** xxl = 28 */
  xxl: 28,
  /** x3l = 36 */
  x3l: 36
};
export const isIOS = Platform.OS === "ios";

const locale = isIOS
  ? NativeModules.SettingsManager.settings.AppleLocale ||
  NativeModules.SettingsManager.settings.AppleLanguages[0]
  : NativeModules.I18nManager.localeIdentifier;

export enum AppLanguages {
  En = "en",
  Ua = "es",
}

export const AppLanguagesNames: { [key: string]: string } = {
  "En": "English", "Ua": "Spanish"
};

export enum MMKVStorageKeys {
  Language = "Language",
}

export const FirstNameList = ["Брудний", "Дикий", "Червоний", "Сонячний", "Пухнастий", "Голий", "Потішний", "Пихатий", "Трясовий", "Веселий", "Танцюючий", "Хроплячий", "Голубий", "Хрумкий", "Босий", "Косматий", "Мокрий", "Сирий", "Задимлений", "Швидкий", "Повільний", "Заплутаний", "Стрибучий", "Розпатланий", "Круглий", "Гігантський", "Маленький", "Кульгавий", "Блискучий", "Сопливий", "Колючий", "Млинцевий", "Задумливий", "Тихий", "Гарячий", "Холодний", "Наляканий", "Пінний", "Шипучий", "Величний", "Собачий", "Болотний", "Котлетний", "Пузатий", "Грімкий", "Пташиний", "Дятловий", "Волохатий", "Бадьорий", "Дірявий", "Сонячний", "Гарбузовий", "Відьомський", "Капустяний", "Картопляний", "Шалений", "Хитрий", "Балакучий", "Гучний", "Сором’язливий", "Животний", "Рожевий", "Часниковий", "Кетчуповий", "Хрусткий", "Нічний", "Трав’яний", "Носатий", "Задиханий", "Сніговий", "Громовий", "Підступний", "Загадковий", "Пожежний", "Липовий", "Медовий", "Пухнастий", "Лисий", "Блимучий", "Муркотливий", "Збитий", "Крутий", "Шалений", "Грибний", "Перчений", "Левиний", "Трояндовий", "Лев’яний", "Камінцевий", "Льодовий", "Зв’язаний", "Переплутаний", "Твердий", "Солодкий", "Гарячковий", "Тривожний", "Зоряний", "Крижаний", "Відьмацький", "Зачарований"];
export const LastNameList = ["Помідор", "Кабан", "Борщ", "Підштаник", "Картопля", "Морквина", "Чебурек", "Млинчик", "Хрущ", "Гарбуз", "Часник", "Огірок", "Кетчуп", "Ріпка", "Сир", "Кабачок", "Майонез", "Халва", "Пампух", "Лимон", "Кавун", "Олівець", "Кирпатий", "Бублик", "Тюльпан", "Баклажан", "Коровай", "Цибуля", "Хом'як", "Булька", "Пухир", "Півник", "Гусак", "Сирник", "Ковбаска", "Печиво", "Щур", "Морж", "Їжачок", "Горобець", "Лопух", "Тюлька", "Камінчик", "Пеньок", "Сніговик", "Бурулька", "Равлик", "Чортополох", "Лавр", "Петрушка", "Ведмідь", "Криголам", "Патик", "Качур", "Жабка", "Мед", "Ланцюг", "Клоп", "Крижень", "Гілка", "Дротик", "Колода", "Бобик", "Шухлядка", "Гвіздок", "Цвях", "Папір", "Тарган", "Черевик", "Плавник", "Кулька", "Тістечко", "Човник", "Погримашка", "Дрібниця", "Ворона", "Галинка", "Павучок", "Патлатий", "Курдупель", "Хвилька", "Півонія", "Пончик", "Кіт", "Зозуля", "Куцак", "Пузир", "Киця", "Патякало", "Лис", "Рогатий", "Сопло", "Змійка", "Сокира", "Шарфик", "Кукурудза", "Ціпок", "Пуховик", "Гуляка", "Ракета"];
export const ThemeNamesList = [
  {
    _id: 1,
    name: "Культура",
    locationList: ["Клуб", "Бібліотека", "Театр", "Музей", "Концертний зал", "Художня галерея", "Кінотеатр", "Балет", "Опера", "Філармонія", "Виставковий зал", "Лекційний зал", "Культурний центр", "Музична школа", "Студія мистецтв", "Арт-простір", "Книжковий ярмарок", "Публічний лекторій", "Історичний музей", "Реміснича майстерня"]
  },
  {
    _id: 2,
    name: "Спорт",
    locationList: ["Стадіон", "Басейн", "Фітнес клуб", "Тенісний корт", "Баскетбольний майданчик", "Футбольне поле", "Гольф-клуб", "Бейсбольний стадіон", "Бігова доріжка", "Гімнастичний зал", "Лижний курорт", "Скейт-парк", "Картинг", "Боксерський ринг", "Бадмінтонний майданчик", "Йога-студія", "Альпіністська стіна", "Велотрек", "Бойовий клуб", "Пейнтбольний майданчик"]
  },
  {
    _id: 3,
    name: "Освіта",
    locations: ["Школа", "Університет", "Коледж", "Лабораторія", "Класна кімната", "Бібліотека", "Навчальний центр", "Дитячий садок", "Лекційна зала", "Комп'ютерний клас", "Музична школа", "Мовна школа", "Художня студія", "Науковий центр", "Аудиторія", "Читальний зал", "Технічний коледж", "Медичний факультет", "Академія", "Тренувальна база"]
  },
  {
    _id: 4,
    name: "Розваги",
    locationList: ["Парк атракціонів", "Цирк", "Караоке", "Аквапарк", "Зоопарк", "Боулінг", "Більярдний клуб", "Ігровий центр", "Квест-кімната", "Дитячий парк", "Лазертаг", "Парк пригод", "Картинг", "Луна-парк", "Кінопарк", "Ігрова кімната", "Зоокуточок", "Атракціон жахів", "VR-клуб", "Батути"]
  },
  {
    _id: 5,
    name: "Туризм",
    locationList: ["Готель", "Хостел", "Кемпінг", "Курорт", "Туристична база", "Пляж", "Гірський притулок", "Круїзний лайнер", "Туристичний центр", "Парк наметів", "Лижна база", "Приватна садиба", "Вілла", "Будиночок на дереві", "Гостьовий будинок", "Екотуризм база", "Річковий тур", "Печери", "Заповідник", "Пункт прокату"]
  },
  {
    _id: 6,
    name: "Медицина",
    locationList: ["Лікарня", "Поліклініка", "Аптека", "Стоматологія", "Кабінет лікаря", "Реабілітаційний центр", "Лабораторія", "Фізіотерапевтичний кабінет", "Швидка допомога", "Офтальмологія", "Хірургічний блок", "Родильний будинок", "Кардіологічний центр", "Психіатрична лікарня", "Ветклініка", "Діагностичний центр", "Кабінет масажу", "Ендокринологія", "Кабінет УЗД", "Інфекційне відділення"]
  },
  {
    _id: 7,
    name: "Транспорт",
    locationList: ["Аеропорт", "Залізничний вокзал", "Автобусна станція", "Метро", "Порт", "Таксопарк", "Автосервіс", "Гараж", "Зал очікування", "Поромний термінал", "Зупинка", "Авіакомпанія", "Транспортна компанія", "Магазин запчастин", "Заправка", "Автомийка", "Станція техобслуговування", "Стоянка таксі", "Вокзальна площа", "Пункт прокату авто"]
  },
  {
    _id: 8,
    name: "Природа",
    locationList: ["Ліс", "Гори", "Річка", "Озеро", "Парк", "Заповідник", "Пляж", "Степ", "Болото", "Печера", "Водоспад", "Долина", "Пустеля", "Скелі", "Луг", "Оазис", "Сад", "Національний парк", "Затока", "Гай"]
  },
  {
    _id: 9,
    name: "Кримінал",
    locationList: ["В'язниця", "Поліцейський відділок", "Суд", "Слідчий ізолятор", "Кімната допитів", "Казначейство", "Каземат", "Центр утримання", "Оперативний штаб", "Зал суду", "В'язничний двір", "Камера", "Слідчий відділ", "Патрульна машина", "Пункт охорони", "Арсенал", "Детективне бюро", "Морг", "Лабораторія доказів", "Пункт реабілітації"]
  },
  {
    _id: 10,
    name: "Технології",
    locationList: ["Лабораторія", "IT-компанія", "ЦОД", "Серверна кімната", "Коворкінг", "Інкубатор", "Фабрика роботів", "Друкарня", "3D-студія", "Майстерня", "Технопарк", "Дизайн-студія", "Програмістська кімната", "Хакерський простір", "Кіберкафе", "Аудиторія для стартапів", "Офіс розробників", "Фабрика мікрочіпів", "Студія VR", "Інженерний відділ"]
  }
];
