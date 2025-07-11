# Gulp — твой незаменимый помощник в веб-разработке! 🚀✨

<p align="center">
  <img src="images/bear.gif" alt="Gulp gif">
</p>

Gulp — это супергерой среди инструментов автоматизации! 💪 С ним твоя разработка становится быстрой и эффективной. Он помогает тебе автоматизировать рутинные задачи, будь то компиляция стилей, минификация файлов или обновление браузера. 🤖
Почему Gulp — лучший выбор?

    Скорость⚡️: Gulp работает на потоках Node.js, что делает его невероятно быстрым.
    Простота использования 🛠: Удобная настройка задач с помощью JavaScript.
    Модульность 🔄: Бесконечное количество плагинов для любых нужд.
    Параллельная работа 🏎: Одновременное выполнение задач экономит твоё время.

Попробуй Gulp один раз — и ты не захочешь возвращаться к старым методам! 🌟

## О проекте

Проект разработан командой InfoCoder, которая специализируется на создании веб-приложений и сайтов, включая проекты на платформе WordPress.

## Разработчики

Проект создан командой InfoCoder. Основные участники:

- [Анна Кесслер](https://github.com/enotstitch) — фронтенд-разработчик, отвечает за создание интерфейсов и стилизацию, а также проводит тестирование и выявление багов.
- [Константин Могилёв](https://github.com/ZayRexan) — фронтенд-разработчик, работает с PHP в проектах на WordPress и занимается интеграцией серверной и клиентской частей.

## Структура папок и файлов

```
├── .husky                         # Конфигурация хуков Git
├── .publish                       # Папка для публикации готовых файлов проекта на хостинг
├── assets                         # Исходники проекта
│   ├── html                       # HTML файлы и шаблоны
│   │   └── data                   # Данные для шаблонов
│   │   └── helpers                # Вспомогательные скрипты и функции
│   │   └── layouts                # Основные шаблоны страниц
│   │       └── default.html       # Базовый шаблон страницы
│   │   ├── partials               # Частичные шаблоны (header, footer и т.д.)
│   │   ├── index.html             # Главная страница проекта
│   ├── js                         # JavaScript файлы
│   │   └── libs                   # Внешние библиотеки JavaScript
│   │   └── scripts                # Пользовательские скрипты
│   │       ├── scripts.js         # Основной файл скриптов
│   ├── resources                  # Дополнительные ресурсы проекта
│   │   ├── files                  # Документы и файлы проекта
│   │       ├── favicon            # Иконки для сайта
│   │   ├── fonts                  # Шрифты
│   │   ├── img                    # Изображения
│   │       ├── svg                # SVG-файлы
│   ├── scss                       # SCSS файлы и стили
│   │   └── chunk                  # Отдельные блоки стилей
│   │   ├── libs                   # Библиотеки стилей
│   │   ├── mixins                 # Миксины для SCSS
│   │   ├── _fonts.scss            # Подключение и стилизация шрифтов
│   │   ├── _interface.scss        # Стили интерфейса
│   │   ├── _settings.scss         # Глобальные настройки стилей
│   │   ├── _vars.scss             # Переменные для стилей
│   │   ├── critical.scss          # Критические стили
│   │   ├── libs.scss              # Подключение библиотек стилей
│   │   ├── styles.scss            # Основной файл стилей
├── build                          # Собранные файлы проекта
├── gulp                           # Конфигурация и задачи Gulp
│   ├── config                     # Конфигурационные файлы Gulp
│   ├── tasks                      # Отдельные задачи для Gulp
└── .editorconfig                  # Конфигурация для редактора кода
└── .env                           # Переменные окружения
└── .gitignore                     # Игнорируемые файлы Git
└── .htmlhintrc                    # Конфигурация для HTMLHint
└── .prettierrc                    # Конфигурация для Prettier
└── .stylelintrc                   # Конфигурация для Stylelint
└── eslint.config.js               # Конфигурация для ESLint
└── gulpfile.js                    # Основной файл Gulp
└── package-lock.json              # Файл для фиксации версий пакетов
└── package.json                   # Метаинформация о проекте
└── README.md                      # Документация проекта
└── webpack.config.js              # Конфигурация Webpack
```

## Лицензия

Этот проект лицензирован под лицензией MIT. Подробнее см. в файле [LICENSE](./LICENSE).

Copyright © 2025 Команда разработки InfoCoder
