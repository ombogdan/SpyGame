Вимоги для мобільного додатку "Шпигун":

### Основна Функціональність:
1. Реєстрація Гравців:
   - Користувач вводить імена гравців, які додаються у список.
   - Кількість гравців: від 4 до 10 осіб (мінімум 4 для цікавого геймплею).

2. Вибір Теми:
   - Вибір конкретної теми або можливість вибрати всі теми для випадкового вибору.
   - Теми можуть включати: Місто, Зоопарк, Кінотеатр тощо.

3. Роздача Ролей:
   - Кожен гравець по черзі отримує телефон в руки і натискає на екран, щоб побачити свою карту.
   - Карта містить інформацію про роль гравця: "Шпигун" або "Звичайний гравець".

4. Питання по Колу:
   - Гравці отримують сповіщення, хто має поставити запитання і кому (наприклад, "Гравець 1 питає Гравця 2").
   - Можливість автоматично змінювати черговість, щоб кожен міг запитати кожного.

5. Раунд Обговорення:
   - Після першого кола питань, запускається таймер на 1 хвилину для загального обговорення.
   - Після цього гравці голосують, чи виганяти когось зі шпигунів.

6. Раунд Асоціацій:
   - Кожному гравцеві показується предмет на екрані (напр. "Карта", "Стіл").
   - Гравці повинні коротко розповісти, як цей предмет пов'язаний із темою.

7. Раунд Голосування:
   - Гравці голосують, хто, на їхню думку, є шпигуном.
   - Якщо більшість голосує за одну особу — її виганяють.

8. Спеціальна Дія: "Ми знайшли шпигуна":
   - У будь-який момент між раундами можна обрати цю дію, щоб одразу запустити голосування.


### Базовий Дизайн Інтерфейсу:

1. Екран Реєстрації Гравців:
   - Текстове поле для введення імені та кнопка "Додати гравця".
   - Список гравців, що поповнюється після кожного додавання.
   - Кнопка "Почати гру" — стає активною, коли введено мінімум 4 гравці.

2. Екран Вибору Теми:
   - Модалка з вибором теми: список тем, де можна обрати одну або всі теми.
   - Кнопка "Почати роздачу ролей".

3. Екран Роздачі Ролей:
   - Інструкція для гравця: "Передайте телефон Гравцю 1".
   - Кнопка "Переглянути свою карту", після натискання якої з'являється роль ("Шпигун" або "Звичайний гравець").
   - Кнопка "Передати наступному гравцю".

4. Перший раунд:
   - Інформаційний блок: Хто має задати запитання кому (наприклад, "Гравець 1 питає Гравця 2").
   - Кнопка "Наступний гравець" для переходу до наступної пари.

5. Екран Обговорення:
   - Таймер на 1 хвилину.
   - Кнопка "Завершити обговорення та голосувати".

6. Другий раунд:
   - Інформаційний блок: Хто має задати запитання кому (наприклад, "Гравець 1 питає Гравця 2").
   - Кнопка "Наступний гравець" для переходу до наступної пари.

6. Екран Обговорення:
   - Таймер на 1 хвилину.
   - Кнопка "Завершити обговорення та голосувати".

6. Екран Голосування:
   - Список гравців з можливістю обрати гравця, за якого голосують.
   - Кнопка "Голосувати" після вибору.

7. Екран Асоціацій:
   - Предмет на екрані (напр. картинка з назвою).
   - Текстове поле для введення асоціації або кнопка "Далі", якщо асоціація вже озвучена.

8. Екран Спеціальної Дії "Ми знайшли шпигуна":
   - Кнопка для активації голосування.
   - Перехід на екран голосування.

9. Фінальний Екран:
   - Відображення результату (хто був шпигуном, хто виграв).
   - Кнопка "Почати нову гру".
