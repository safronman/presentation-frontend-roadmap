export type RoadmapTextBlock = {
  title: string
  items?: string[]
  x: number
  y: number
  w: number
  align?: 'left' | 'center' | 'right'
  accent?: string
  side?: 'left' | 'right'
  accentDirection?: 'up' | 'down'
  accentLength?: number
  size?: 'sm' | 'md' | 'lg'
}

export type RoadmapIcon = {
  label: string
  icon?: string
  iconColor?: string
  x?: number
  y?: number
  w?: number
  h?: number
  kind?: 'emoji' | 'badge' | 'logo' | 'milestone'
  color?: string
}

export type RoadmapSlideData = {
  id: number
  level?: string
  avatar?: string
  avatarColor?: string
  path: string
  blocks: RoadmapTextBlock[]
  icons: RoadmapIcon[]
}

export const roadmapSlides: RoadmapSlideData[] = [
  {
    id: 1,
    avatar: '👨‍🚀',
    avatarColor: '#ccfb50',
    path: 'M 250 515 C 370 455, 445 500, 520 615 C 575 700, 620 765, 660 795 C 780 890, 980 690, 1120 535 C 1235 410, 1290 255, 1370 150 C 1460 265, 1615 315, 1745 360 C 1845 395, 1915 405, 1980 420',
    icons: [
      {label: 'HTML5', x: 590, y: 725, color: '#f05a28'},
      {label: 'CSS', x: 1300, y: 80, color: '#0478bd'},
    ],
    blocks: [
      {title: 'Старт', x: 180, y: 270, w: 300, size: 'lg'},
      {
        title: 'Основы HTML',
        items: ['Что такое HTML', 'Структура HTML-документа', 'Семантическая верстка'],
        x: 650,
        y: 80,
        w: 430,
        accent: '#f45b2b',
        side: 'left',
      },
      {
        title: 'Работа с контентом',
        items: ['Заголовки и текст', 'Ссылки и изображения', 'Списки и таблицы'],
        x: 650,
        y: 240,
        w: 520,
        accent: '#f45b2b',
        side: 'left',
      },
      {
        title: 'Формы и взаимодействие',
        items: ['Поля ввода', 'Кнопки и элементы управления', 'Валидация форм'],
        x: 650,
        y: 400,
        w: 520,
        accent: '#f45b2b',
        side: 'left',
      },
      {
        title: 'Современный HTML',
        items: ['Accessibility (A11y)', 'SEO-основы', 'Метаданные'],
        x: 650,
        y: 540,
        w: 520,
        accent: '#f45b2b',
        side: 'left',
        accentLength: 75
      },
      {
        title: 'Основы CSS',
        items: ['Селекторы', 'Свойства и значения', 'Единицы измерения'],
        x: 1320,
        y: 330,
        w: 300,
        accent: '#0478bd',
        side: 'left',
        accentDirection: 'up',
        accentLength: 30
      },
      {
        title: 'Семантика',
        items: ['Блочная модель (Box Model)', 'Position', 'Display'],
        x: 1320,
        y: 480,
        w: 500,
        align: 'left',
        accent: '#0478bd',
        side: 'left',
        accentDirection: 'up',
        accentLength: 90
      },
      {
        title: 'Каскадность и продвинутые стили',
        items: ['Специфичность', 'Наследование', 'CSS-переменные'],
        x: 1320,
        y: 630,
        w: 600,
        accent: '#0478bd',
        side: 'left',
        accentDirection: 'up',
        accentLength: 90
      },
      {
        title: 'Grid и анимации',
        items: ['Flexbox', 'CSS Grid', 'Transitions и Animations'],
        x: 1320,
        y: 770,
        w: 500,
        align: 'left',
        accent: '#0478bd',
        side: 'left',
        accentDirection: 'up',
        accentLength: 90
      },
      {
        title: 'Cтилизация форм и таблиц',
        items: ['Стилизация форм', 'Стилизация таблиц', 'Адаптивная верстка'],
        x: 1320,
        y: 900,
        w: 500,
        accent: '#0478bd',
        side: 'left',
        accentDirection: 'up',
        accentLength: 90
      },
    ],
  },
  {
    id: 2,
    path: 'M -60 430 C 140 345, 220 555, 330 670 C 455 800, 430 930, 585 885 C 735 840, 1015 850, 1100 760 C 1195 660, 1165 610, 1345 575 C 1515 545, 1655 420, 1765 555 C 1845 650, 1875 650, 1980 640',
    icons: [
      {label: 'JavaScript', x: 400, y: 795, color: '#f7df1e'},
      {label: 'Git', x: 1065, y: 610, color: '#f25a4e'},
      {label: 'GitHub', x: 1665, y: 470, color: '#111'},
    ],
    blocks: [
      {
        title: 'Базовый JS',
        items: ['Объекты', 'Функции', 'Деструктурирующие присваивания', 'Ассоциативный массив', 'Лексическое окружение', 'Замыкания',],
        x: 465,
        y: 60,
        w: 530,
        accent: '#f7df1e',
        accentLength: 120
      },
      {
        title: 'Методы массивов, события',
        items: ['Работа с массивом (map, filter)', 'Callback', 'События (onClick, onChange, onBlur)', 'Имутабельность'],
        x: 465,
        y: 280,
        w: 530,
        accent: '#f7df1e',
        side: 'left',
        accentLength: 160
      },
      {
        title: 'Асинхронное программирование',
        items: ['Promise', 'async-await, try catch', 'event loop'],
        x: 465,
        y: 460,
        w: 530,
        accent: '#f7df1e',
        accentLength: 150
      },
      {
        title: 'ООП',
        items: ['ООП: This, new, call, apply, bind', 'Классы (Class)', 'Прототипы (proto)', 'Observer, Publisher-Subscriber'],
        x: 465,
        y: 620,
        w: 530,
        accent: '#f7df1e',
        side: 'left',
        accentLength: 70
      },
      {
        title: 'Git',
        items: ['Основы Git — репозиторий, коммиты, история изменений', 'Работа с ветками — создание, переключение, слияние', 'Командная работа — GitHub, Pull Request, Code Review', 'Синхронизация изменений — получение и отправка изменений', 'Разрешение конфликтов — merge conflicts и их исправление'],
        x: 1120,
        y: 260,
        w: 700,
        accent: '#f25a4e',
        side: 'left',
        accentLength: 155
      },
      {
        title: 'GitHub',
        items: ['Remote-репозитории: push, fetch, pull, настройка SSH-ключей', 'PR-процесс: создание PR, правки после ревью, разрешение конфликтов', 'Управление проектом: GitHub Projects (Kanban), Issues для трекинга задач'],
        x: 1280,
        y: 705,
        w: 520,
        accent: '#111',
        side: 'right',
        accentDirection: 'up',
        accentLength: 35
      },
    ],
  },
  {
    id: 3,
    path: 'M -60 470 C 100 395, 220 520, 390 555 C 570 590, 650 515, 760 600 C 880 690, 940 740, 1030 640 C 1125 535, 1210 455, 1290 595 C 1360 720, 1535 660, 1660 635 C 1805 605, 1870 735, 1980 695',
    icons: [
      {label: 'React', x: 100, y: 430, color: '#26c6e8'},
      {label: 'useState', x: 420, y: 500, color: '#D1B506', iconColor: '#D1B506'},
      {label: 'TS', x: 1040, y: 470, color: '#3379C6'},
      {label: 'Data', x: 1600, y: 570, color: '#c505bc'},
    ],
    blocks: [
      {
        title: 'Введение и настройка проекта',
        items: ['Создание проекта для работы с React (сборщик Vite)', 'Рассмотрение структуры проекта: модули, пакеты, JSX'],
        x: 145,
        y: 95,
        w: 650,
        accent: '#14c9e8',
        side: 'left',
      },
      {
        title: 'Основы React',
        items: ['Что такое React и зачем он нужен?', 'CRUD-операции', 'Зачем нужны компоненты?', 'Разработка первого компонента', 'Работа с объектом props'],
        x: 145,
        y: 220,
        w: 500,
        accent: '#14c9e8',
        side: 'left',
        accentLength: 90
      },
      {
        title: 'Состояние и управление React',
        items: ['Использование useState', 'Обработка изменений состояния с колбэками', 'Иммутабельность и обновление интерфейса', 'Рендеринг списков и использование атрибута key'],
        x: 485,
        y: 760,
        w: 540,
        align: 'left',
        accent: '#D1B506',
        side: 'left',
        accentDirection: 'up',
        accentLength: 50
      },
      {
        title: 'TypeScript',
        items: ['Знакомство с TypeScript', 'Типизация примитивов', 'Типизация сложных типов данных', 'Дженерики', 'Утилитные типы'],
        x: 1100,
        y: 235,
        w: 440,
        accent: '#3379C6',
        side: 'left',
        accentLength: 110,
      },
      {
        title: 'Cтруктуры данных / Обработка событий',
        items: ['Ассоциативный массив', 'Универсальные компоненты', 'Обработка событий onClick, onChange', 'Условный рендеринг и условное присвоение классов'],
        x: 1140,
        y: 770,
        w: 535,
        align: 'left',
        accent: '#c505bc',
        side: 'right',
        accentDirection: 'up',
        accentLength: 20
      },
    ],
  },
  {
    id: 4,
    path: 'M -60 555 C 150 430, 300 405, 430 535 C 545 655, 610 825, 755 720 C 875 630, 835 470, 1010 500 C 1160 530, 1115 785, 1290 720 C 1445 660, 1505 455, 1670 515 C 1810 565, 1800 655, 1980 640',
    icons: [
      {label: 'React Router', x: 120, y: 405, color: '#f44351'},
      {label: 'MUI', x: 530, y: 660, color: '#027af5'},
      {label: 'Flow', x: 1000, y: 500, color: '#130201'},
      {label: 'Storybook', x: 1530, y: 450, color: '#ff4081'},
    ],
    blocks: [
      {
        title: 'React-router',
        items: ['Маршрутизация приложения — настройка страниц и URL', 'Навигация между страницами — Link, NavLink, useNavigate', 'Динамические маршруты — параметры URL (:id)', 'Вложенные маршруты — структура страниц через Outlet', 'Защита маршрутов — приватные и публичные страницы'],
        x: 150,
        y: 820,
        w: 760,
        accent: '#f44351',
        side: 'left',
        accentDirection: 'up',
        accentLength: 120
      },
      {
        title: 'Material UI',
        items: ['Готовые UI-компоненты — кнопки, поля ввода, таблицы, модальные окна', 'Система стилизации — sx, styled, темы', 'Макеты и адаптивность — Grid, Stack, Container', 'Работа с формами — TextField, Select, Checkbox и другие элементы', 'Кастомизация дизайна — создание собственной темы и переопределение стилей'],
        x: 545,
        y: 260,
        w: 700,
        align: 'left',
        accent: '#027af5',
        side: 'left',
        accentLength: 190
      },
      {
        title: 'Radix UI / Base UI',
        items: ['Примитивы для интерфейсов — Dialog, Tooltip, Popover и др', 'Высокая доступность (A11y)', 'Полный контроль над стилями', 'Композиция сложных компонентов', 'Основа для собственных дизайн-систем'],
        x: 1030,
        y: 775,
        w: 700,
        accent: '#130201',
        side: 'left',
        accentLength: 50,
        accentDirection: 'up'
      },
      {
        title: 'Storybook',
        items: ['Изолированная разработка компонентов', 'Документирование UI-компонентов', 'Создание и просмотр Stories', 'Тестирование состояний компонентов', 'Построение дизайн-системы проекта'],
        x: 1175,
        y: 70,
        w: 450,
        align: 'left',
        accent: '#ff4081',
        side: 'right',
        accentLength: 180
      },
    ],
  },
  {
    id: 5,
    path: 'M -60 520 C 135 405, 280 365, 415 470 C 545 570, 585 685, 735 625 C 875 570, 900 440, 1045 500 C 1170 550, 1145 700, 1280 640 C 1435 570, 1500 500, 1635 555 C 1770 610, 1815 720, 1980 645',
    icons: [
      {label: 'Redux Toolkit', x: 145, y: 370, color: '#5a3e89'},
      {label: 'VITEST', x: 665, y: 545, color: '#46ba4c'},
      {label: 'AJAX', x: 1120, y: 570, color: '#5b2be4'},
      {label: 'WS', x: 1640, y: 495, color: '#d8edf9', iconColor: '#131414'},
    ],
    blocks: [
      {
        title: 'Redux Toolkit',
        items: ['Создание глобального состояния (createSlice)', 'Управление данными через actions и reducers', 'Асинхронные запросы через thunks', 'Получение данных через selectors', 'Масштабирование и организация state приложения'],
        x: 205,
        y: 710,
        w: 640,
        accent: '#5a3e89',
        side: 'left',
        accentDirection: 'up',
        accentLength: 90
      },
      {
        title: 'Тестирование',
        items: ['Написание unit-тестов для функций и компонентов', 'Тестирование пользовательских сценариев', 'Test Driven Development (TDD)', 'Playwright', 'Автоматический запуск тестов в CI/CD'],
        x: 700,
        y: 250,
        w: 500,
        accent: '#46ba4c',
        side: 'left',
        accentLength: 130
      },
      {
        title: 'Взаимодействие с сервером',
        items: ['Запросы к серверу (Ajax Request) с Axios', 'Работа с REST API', 'Реализация CRUD операций', 'Типизация запросов и использование "дженериков"'],
        x: 1200,
        y: 835,
        w: 540,
        accent: '#5b2be4',
        side: 'left',
        accentDirection: 'up',
        accentLength: 50
      },
      {
        title: 'WebSocket',
        items: ['Установка постоянного соединения с сервером', 'Обмен данными в реальном времени', 'Отправка сообщений от клиента к серверу', 'Получение событий от сервера без перезапросов', 'Автоматическое обновление интерфейса при изменении данных'],
        x: 1220,
        y: 100,
        w: 550,
        accent: '#131414',
        side: 'right',
        accentLength: 205
      },
    ],
  },
  {
    id: 6,
    path: 'M -60 500 C 180 360, 325 350, 455 490 C 565 610, 640 650, 760 585 C 910 505, 1000 385, 1145 350 C 1280 320, 1360 340, 1390 455 C 1435 620, 1365 760, 1515 790 C 1665 820, 1785 675, 1980 485',
    icons: [
      {label: 'Loaders', x: 70, y: 305, color: '#d1b404'},
      {label: 'Errors', x: 370, y: 405, color: '#d11031'},
      {label: 'ReactHookForm', x: 700, y: 520, color: '#ec4c8a'},
      {label: 'Zod', x: 1035, y: 300, color: '#3e7aff'},
      {label: 'Login', x: 1668, y: 655, color: '#0e3a50'},
    ],
    blocks: [
      {
        title: 'Loaders',
        items: ['Отображение индикатора загрузки (Loader) во время запросов', 'Хранение статуса запроса в Redux (idle, loading, succeeded, failed)', 'Управление отображением загрузки для улучшения пользовательского опыта.', 'Disable кнопок и компонент, как часть правильного UX'],
        x: 143,
        y: 750,
        w: 540,
        accent: '#d1b404',
        side: 'left',
        accentDirection: 'up',
        accentLength: 145
      },
      {
        title: 'Обработка ошибок',
        items: ['Отображение ошибок пользователю через ErrorSnackbar', 'Обработка сетевых ошибок (Network Error) в блоке catch', 'Обработка ошибок сервера через resultCode', 'Централизация логики в утилитах handleServerNetworkError и handleServerAppError', 'Хранение и управление ошибками через глобальный state (Redux)'],
        x: 410,
        y: 90,
        w: 540,
        accent: '#d11031',
        side: 'left',
        accentLength: 145
      },
      {
        title: 'React hook form',
        items: ['Управление состоянием формы через useForm', 'Регистрация полей через register', 'Обработка отправки формы через handleSubmit', 'Встроенная валидация и отображение ошибок', 'Интеграция со сложными компонентами через Controller'],
        x: 770,
        y: 780,
        w: 620,
        accent: '#ec4c8a',
        side: 'left',
        accentDirection: 'up',
        accentLength: 50
      },
      {
        title: 'Zod',
        items: ['Валидация данных в runtime', 'Автоматическая генерация TypeScript-типов', 'Удобная интеграция с React Hook Form', 'Проверка и защита от ошибок backend API', 'Гибкая обработка ошибок и поддержка сложных типов данных'],
        x: 1055,
        y: 70,
        w: 720,
        accent: '#3e7aff',
        side: 'left',
        accentLength: 90
      },
      {
        title: 'Auth flow',
        items: ['Реализация авторизационного Flow (login, logout, authMe)', 'Axios interceptors', 'Protected routes', 'Bearer token'],
        x: 1470,
        y: 370,
        w: 310,
        accent: '#0e3a50',
        side: 'right',
        accentLength: 125
      },
    ],
  },
  {
    id: 7,
    path: 'M -60 540 C 155 455, 275 545, 395 665 C 505 775, 580 555, 705 425 C 820 305, 950 440, 1065 555 C 1195 685, 1210 680, 1320 620 C 1460 545, 1580 555, 1690 625 C 1800 695, 1860 665, 1980 645',
    icons: [
      {label: 'RTKQuery', x: 80, y: 420, color: '#764abc'},
      {label: 'TanStack', x: 405, y: 575, color: '#fc532b'},
      {label: 'Zustand', x: 745, y: 330, color: '#783110'},
      {label: 'ESLint', x: 1280, y: 500, color: '#4b32bd'},
      {label: 'Optimization', x: 1680, y: 555, color: '#5bb8ed'},
    ],
    blocks: [
      {
        title: 'RTK Query',
        items: ['Query запросы (Get)', 'Mutation запросы (Post, Delete, Put)', 'Conditional fetching', 'Кеширование и обновление данных', 'Обработка ошибок', 'Optimistic update'],
        x: 120,
        y: 700,
        w: 440,
        accent: '#764abc',
        accentDirection: 'up',
        accentLength: 50
      },
      {
        title: 'TanStack',
        items: ['TanStack Query: управление server state (fetching, caching, синхронизация)', ' Автоматическая инвалидация и refetch данных', 'Query оптимизация: staleTime, cacheTime, prefetching', 'Optimistic updates для мгновенного UI',],
        x: 475,
        y: 140,
        w: 620,
        accent: '#fc532b',
        side: 'left',
        accentLength: 205
      },
      {
        title: 'Zustand',
        items: ['Создание глобального состояния', 'Работа со store без Provider', 'Обновление состояния через actions', 'Подписка компонентов на изменения', 'Простое управление UI-состоянием'],
        x: 785,
        y: 640,
        w: 620,
        accent: '#783110',
        side: 'left',
        accentDirection: 'up',
        accentLength: 75
      },
      {
        title: 'Linting & Formatting',
        items: ['Prettier', 'ESlint', 'Stylelint', 'Git Hooks (husky, lint-staged)', 'Работа с импортами'],
        x: 1345,
        y: 800,
        w: 560,
        accent: '#4b32bd',
        side: 'left',
        accentDirection: 'up',
        accentLength: 70
      },
      {
        title: 'Оптимизация приложения',
        items: ['React memo', 'useCallback', 'useMemo', 'Оптимизация рендеринга React-компонентов'],
        x: 1480,
        y: 220,
        w: 310,
        accent: '#5bb8ed',
        side: 'right',
        accentLength: 150
      },
    ],
  },
  {
    id: 8,
    path: 'M -60 700 C 170 615, 245 790, 375 835 C 520 885, 650 790, 790 650 C 910 530, 955 520, 1085 505 C 1195 492, 1195 370, 1305 335 C 1450 288, 1650 325, 1980 435',
    icons: [
      {label: 'Architecture', x: 45, y: 610, color: '#59c4dc'},
      {label: 'Next.js', x: 1485, y: 240, color: '#111'},
    ],
    blocks: [
      {
        title: 'Архитектура',
        items: ['Разделение ответственности: компонентная структура, разделение UI/логики/данных, принципы SOLID', 'State Management: выбор подхода (локальный state, Context, Zustand/Redux), избегание prop drilling', 'Масштабируемость: файловая структура проекта (feature-based/layer-based), переиспользуемые компоненты, UI-kit', 'Паттерны проектирования: Container/Presentational, Compound Components, Render Props, HOC', 'Производительность: code splitting, lazy loading, мемоизация, виртуализация списков'],
        x: 105,
        y: 210,
        w: 1030,
        accent: '#59c4dc',
        side: 'left',
        accentLength: 170
      },
      {
        title: 'Next.js',
        items: ['Маршрутизация: файловая структура, Layouts, Nested Routes, спецфайлы (loading.js, error.js, not-found.js)', 'RSC: разделение на серверные (по умолчанию) и клиентские (\'use client\') компоненты для минимизации бандла', 'Data Fetching: async/await в компонентах, управление кэшем (revalidateTag, revalidatePath)', 'Server Actions: обработка форм и мутаций без API-эндпоинтов и useEffect', 'Рендеринг: Static/Dynamic Rendering, PPR (Partial Prerendering)', 'Оптимизация: next/image, шрифты, скрипты, Turbopack для быстрой сборки'],
        x: 930,
        y: 615,
        w: 700,
        accent: '#111',
        side: 'right',
        accentDirection: 'up',
        accentLength: 105
      },
    ],
  },
  {
    id: 9,
    path: 'M -60 490 C 185 335, 330 380, 485 505 C 600 600, 665 575, 740 615 C 840 665, 910 805, 1040 775 C 1140 750, 1190 680, 1185 805 C 1180 950, 1320 1010, 1435 960 C 1545 910, 1580 800, 1690 780 C 1825 755, 1880 810, 1980 720',
    icons: [
      {label: 'Backend', x: 140, y: 305, color: '#2E7D32'},
      {label: 'Security', x: 950, y: 690, color: '#0668a0'},
      {label: 'DEVOPS', x: 1685, y: 695, color: '#024ac5'},
    ],
    blocks: [
      {
        title: 'Основы Backend',
        items: ['REST API & HTTP: методы (GET, POST, PUT, DELETE), статус-коды, заголовки, работа с JSON', 'Аутентификация: JWT-токены, OAuth, cookie/session, refresh-токены', 'Базы данных: основы SQL/NoSQL, структура таблиц, связи (один-ко-многим, многие-ко-многим)', 'API-дизайн: версионирование, пагинация, фильтрация, сортировка, обработка ошибок', 'Server-Side логика: валидация данных, middleware, rate limiting, CORS'],
        x: 180,
        y: 710,
        w: 610,
        accent: '#2E7D32',
        side: 'left',
        accentDirection: 'up',
        accentLength: 120
      },
      {
        title: 'Security',
        items: ['Защита от XSS и CSRF атак', 'Безопасная работа с токенами и куками (JWT, HttpOnly, Secure)', 'Настройка Content Security Policy (CSP) и CORS', 'Валидация и санитизация пользовательского ввода', 'Аудит зависимостей и уязвимостей (npm audit, Snyk)'],
        x: 435,
        y: 110,
        w: 620,
        accent: '#0668a0',
        side: 'right',
        accentLength: 280
      },
      {
        title: 'DevOps',
        items: ['Автоматизация CI/CD пайплайнов (GitHub Actions, Vercel, Netlify)', 'Контейнеризация фронтенд-приложений с Docker', 'Мониторинг и логирование ошибок в продакшне (Sentry, Datadog)', 'Управление окружениями и переменными (env, staging, production)', 'Оптимизация сборки и деплоя (кэширование, CDN, bundle analysis)'
        ],
        x: 1180,
        y: 240,
        w: 650,
        accent: '#024ac5',
        side: 'right',
        accentLength: 205
      },
    ],
  },
  {
    id: 10,
    path: 'M -60 555 C 115 720, 220 835, 370 845 C 500 855, 540 790, 620 700 C 735 570, 820 560, 980 520 C 1110 488, 1145 315, 1300 300 C 1475 285, 1605 405, 1665 535 C 1682 565, 1704 570, 1723 550',
    icons: [
      {label: 'Team', x: 190, y: 710, color: '#13c1eb'},
      {label: 'AI', x: 1460, y: 260, color: '#c505bc'},
      {label: 'Finish', icon: 'ph:flag-checkered', x: 1573, y: 400, w: 300, h: 300, kind: 'milestone', color: '#ccfb50', iconColor: '#050505'},
    ],
    blocks: [
      {
        title: 'Командная работа',
        items: ['Agile-процессы: спринты, daily stand-ups, ретроспективы, планирование задач', 'Task Management: работа с Jira/Linear/Asana, декомпозиция задач, оценка Story Points', 'Kanban-flow: управление статусами задач (To Do -> In Progress -> Review -> Done), WIP-лимиты', 'Code Review: культура ревью кода, конструктивная обратная связь, соблюдение DoD (Definition of Done)', 'Коммуникация: документирование решений, синхронизация с командой, прозрачность блокеров'],
        x: 200,
        y: 220,
        w: 750,
        accent: '#13c1eb',
        side: 'left',
        accentLength: 230
      },
      {
        title: 'AI-инструменты',
        items: ['Генерация и рефакторинг кода через AI-агентов (Codex, Claude code)', 'Подключение MCP-серверов для работы с внешними сервисами', 'Использование готовых skills/промптов для типовых задач (тесты, документация, ревью)', 'Эффективный промтинг — как правильно ставить задачи AI для точного результата'],
        x: 860,
        y: 620,
        w: 700,
        accent: '#c505bc',
        side: 'right',
        accentDirection: 'up',
        accentLength: 100
      },
    ],
  },
]
