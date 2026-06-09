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
  kind?: 'emoji' | 'badge' | 'logo'
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
    avatar: '👶',
    avatarColor: '#ccfb50',
    path: 'M -60 530 C 170 455, 310 455, 420 520 C 540 690, 655 710, 820 660 C 980 615, 1045 515, 1185 425 C 1325 335, 1485 340, 1625 375 C 1760 410, 1845 415, 1980 420',
    icons: [
      { label: 'HTML5', x: 610, y: 625, color: '#f05a28' },
      { label: 'CSS', x: 1405, y: 300, color: '#643395' },
    ],
    blocks: [
      { title: 'Старт', x: 180, y: 270, w: 300, size: 'lg' },
      {
        title: 'Основы HTML',
        items: ['Что такое HTML?', 'Структура HTML-документа', 'Семантика'],
        x: 670,
        y: 140,
        w: 430,
        accent: '#f45b2b',
        side: 'left',
      },
      {
        title: 'Теги и их атрибуты',
        items: ['Заголовки и подзаголовки', 'Текст', 'Ссылки', 'Изображения', 'Списки (маркированные, нумерованные)', 'Таблицы', 'Формы и элементы управления'],
        x: 670,
        y: 340,
        w: 520,
        accent: '#f45b2b',
        side: 'left',
      },
      { title: 'Основы CSS', x: 1470, y: 500, w: 300, accent: '#643395', side: 'left', accentDirection: 'up', accentLength: 20 },
      { title: 'Семантика', x: 1470, y: 560, w: 250, align: 'left', accent: '#643395', side: 'left', accentDirection: 'up', accentLength: 30 },
      { title: 'Каскадность и продвинутые стили', x: 1470, y: 620, w: 335, accent: '#643395', side: 'left', accentDirection: 'up', accentLength: 32 },
      { title: 'Grid и анимации', x: 1470, y: 720, w: 280, align: 'left', accent: '#643395', side: 'left', accentDirection: 'up', accentLength: 52 },
      { title: 'Cтилизация форм и таблиц', x: 1470, y: 780, w: 340, accent: '#643395', side: 'left', accentDirection: 'up', accentLength: 50  },
    ],
  },
  {
    id: 2,
    path: 'M -60 470 C 100 395, 220 520, 390 555 C 570 590, 650 515, 760 600 C 880 690, 940 740, 1030 640 C 1125 535, 1210 455, 1290 595 C 1360 720, 1535 660, 1660 635 C 1805 605, 1870 735, 1980 695',
    icons: [
      { label: 'React', x: 100, y: 430, color: '#26c6e8' },
      { label: 'useState', x: 420, y: 500, color: '#D1B506', iconColor: '#D1B506' },
      { label: 'TS', x: 1040, y: 470, color: '#3379C6' },
      { label: 'Data', x: 1600, y: 570, color: '#c505bc' },
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
    id: 3,
    path: 'M -60 555 C 150 430, 300 405, 430 535 C 545 655, 610 825, 755 720 C 875 630, 835 470, 1010 500 C 1160 530, 1115 785, 1290 720 C 1445 660, 1505 455, 1670 515 C 1810 565, 1800 655, 1980 640',
    icons: [
      { label: 'React Router', x: 120, y: 405, color: '#f44351' },
      { label: 'MUI', x: 530, y: 660, color: '#027af5' },
      { label: 'Flow', x: 1000, y: 500, color: '#130201' },
      { label: 'Storybook', x: 1530, y: 450, color: '#ff4081' },
    ],
    blocks: [
      { title: 'React-router', items: ['Роуты', 'Редиректы (useNavigate и Navigate)', 'Обработка ошибки 404', 'Работа с параметрами'], x: 150, y: 660, w: 360, accent: '#f44351', side: 'left', accentDirection: 'up', accentLength: 40 },
      { title: 'Material UI', items: ['Введение в Material UI', 'Подключение и использование библиотечных компонентов', 'Material UI: стандартные элементы ввода', 'Material UI: элементы сетки', 'Стилизация'], x: 590, y: 250, w: 390, align: 'left', accent: '#027af5', side: 'left', accentLength: 190 },
      { title: 'Компоненты / формы / таблицы', items: ['Headless компоненты', 'Radix UI / Base UI', 'ShadCN', 'Работа с таблицами'], x: 1030, y: 775, w: 475, accent: '#130201', side: 'left', accentLength: 50, accentDirection: 'up' },
      { title: 'Storybook', items: ['Введение в Storybook.', 'Тестирование React-компонентов (Snapshot/Screenshot)'], x: 1545, y: 260, w: 290, align: 'left', accent: '#ff4081', side: 'left', accentLength: 90 },
    ],
  },
  {
    id: 4,
    path: 'M -60 520 C 135 405, 280 365, 415 470 C 545 570, 585 685, 735 625 C 875 570, 900 440, 1045 500 C 1170 550, 1145 700, 1280 640 C 1435 570, 1500 500, 1635 555 C 1770 610, 1815 720, 1980 645',
    icons: [
      { label: 'Redux Toolkit', x: 145, y: 370, color: '#5a3e89' },
      { label: 'VITEST', x: 665, y: 545, color: '#46ba4c' },
      { label: 'AJAX', x: 1090, y: 570, color: '#5b2be4' },
      { label: 'WS', x: 1640, y: 455, color: '#d8edf9', iconColor: "#131414" },
    ],
    blocks: [
      { title: 'Redux Toolkit', items: ['configureStore', 'createSlice', 'createAction', 'immerJS', 'createSelector', 'createAsyncThunk', 'обработка ошибок / rejectWithValue', 'builder (addCase, addMatcher)', 'matching utilities'], x: 205, y: 660, w: 440, accent: '#5a3e89', side: 'left', accentDirection: 'up', accentLength: 72 },
      { title: 'Тестирование', items: ['Работа с Jest / Vitest', 'Покрытие редьюсера тестами', 'Test Driven Development (TDD)', 'Playwright'], x: 725, y: 105, w: 400, accent: '#46ba4c', side: 'left', accentLength: 115 },
      { title: 'Взаимодействие с сервером', items: ['Запросы к серверу (Ajax Request) с Axios', 'Работа с REST API', 'Реализация CRUD операций', 'Типизация запросов и использование "дженериков"'], x: 1170, y: 835, w: 540, accent: '#5b2be4', side: 'left', accentDirection: 'up', accentLength: 75 },
      { title: 'WebSocket', items: ['Постоянное соединение клиента и сервера', 'Передача данных в реальном времени без задержек'], x: 1320, y: 160, w: 300, accent: '#131414', side: 'right', accentLength: 185 },
    ],
  },
  {
    id: 5,
    path: 'M -60 500 C 180 360, 325 350, 455 490 C 565 610, 640 650, 760 585 C 910 505, 1000 385, 1145 350 C 1280 320, 1360 340, 1390 455 C 1435 620, 1365 760, 1515 790 C 1665 820, 1785 675, 1980 485',
    icons: [
      { label: 'Errors', x: 205, y: 355, color: '#df526b' },
      { label: 'React Hook Form + Zod', x: 865, y: 215, color: '#ec4c8a' },
      { label: 'Login', x: 1668, y: 675, color: '#0e3a50' },
    ],
    blocks: [
      { title: 'Обработка ошибок / loaders', items: ['Preloaders (отображение на UI)', 'Disable кнопок и компонент, как часть правильного UX', 'Обработка ошибок'], x: 365, y: 750, w: 440, accent: '#df526b', side: 'left', accentDirection: 'up', accentLength: 125 },
      { title: 'React hook form', items: ['Получение данных', 'Валидация и обработка ошибок', 'Валидация форм и ответа сервера с Zod'], x: 1025, y: 700, w: 420, accent: '#ec4c8a', side: 'left', accentDirection: 'up', accentLength: 170 },
      { title: 'Auth flow', items: ['Axios interceptors', 'Protected routes', 'Реализация авторизационного Flow (login, logout, authMe)'], x: 1540, y: 240, w: 310, accent: '#0e3a50', side: 'right', accentLength: 275 },
    ],
  },
  {
    id: 6,
    path: 'M -60 540 C 155 455, 275 545, 395 665 C 505 775, 580 555, 705 425 C 820 305, 950 440, 1065 555 C 1195 685, 1210 680, 1320 620 C 1460 545, 1580 555, 1690 625 C 1800 695, 1860 665, 1980 645',
    icons: [
      { label: 'RTK Query', x: 265, y: 650, color: '#764abc' },
      { label: 'TanStack + Zustand', x: 445, y: 255, color: '#28a45b' },
      { label: '+ ESLint', x: 1200, y: 500, color: '#4b32bd' },
      { label: '⚙', x: 1665, y: 535, color: '#5bb8ed' },
    ],
    blocks: [
      { title: 'RTK Query', items: ['Query запросы (Get)', 'Mutation запросы (Post, Delete, Put)', 'Conditional fetching', 'Кеширование и обновление данных', 'Обработка ошибок', 'Optimistic update'], x: 185, y: 190, w: 240, accent: '#764abc', side: 'right', accentLength: 225 },
      { title: 'TanStack & Zustand', items: ['TanStack Query: управление server state (fetching, caching, синхронизация), автоматическая инвалидация и refetch данных', 'Query оптимизация: staleTime, cacheTime, prefetching, optimistic updates для мгновенного UI', 'Zustand: легковесный state manager для client state, минималистичный API без boilerplate', 'Разделение состояния: TanStack Query для серверных данных, Zustand для UI-состояния и глобальных настроек'], x: 605, y: 640, w: 620, accent: '#28a45b', side: 'left', accentDirection: 'up', accentLength: 135 },
      { title: 'Code style', items: ['Prettier', 'ESlint', 'Stylelint', 'Работа с импортами'], x: 1365, y: 780, w: 360, accent: '#4b32bd', side: 'left', accentDirection: 'up', accentLength: 90 },
      { title: 'Оптимизация приложения', items: ['React memo', 'useCallback', 'useMemo', 'Оптимизация рендеринга React-компонентов'], x: 1480, y: 160, w: 360, accent: '#5bb8ed', side: 'right', accentLength: 195 },
    ],
  },
  {
    id: 7,
    path: 'M -60 430 C 140 345, 220 555, 330 670 C 455 800, 430 930, 585 885 C 735 840, 1015 850, 1100 760 C 1195 660, 1165 610, 1345 575 C 1515 545, 1655 420, 1765 555 C 1845 650, 1875 650, 1980 640',
    icons: [
      { label: 'JavaScript', x: 400, y: 795, color: '#f7df1e' },
      { label: 'Git', x: 1065, y: 610, color: '#f25a4e' },
      { label: 'GitHub', x: 1665, y: 470, color: '#111' },
    ],
    blocks: [
      { title: 'Введение', items: ['Объекты', 'Функции', 'Деструктурирующие присваивания', 'Ассоциативный массив'], x: 60, y: 180, w: 430, accent: '#f7df1e', side: 'right', accentLength: 90 },
      { title: 'Замыкания и асинхронное программирование', items: ['Лексическое окружение', 'Замыкания', 'Promise', 'async-await, try catch', 'event loop'], x: 60, y: 355, w: 430, accent: '#f7df1e', side: 'right', accentLength: 150 },
      { title: 'Работа с массивами и функции высшего порядка', items: ['Работа с массивом (map, filter)', 'Callback', 'События (onClick, onChange, onBlur)', 'Имутабельность'], x: 510, y: 190, w: 490, accent: '#f7df1e', side: 'left', accentLength: 160 },
      { title: 'Объектно-ориентированное программирование', items: ['ООП: This, new, call, apply, bind', 'Классы (Class)', 'Прототипы (proto)', 'Observer, Publisher-Subscriber'], x: 510, y: 480, w: 480, accent: '#f7df1e', side: 'left', accentDirection: 'up', accentLength: 35 },
      { title: 'Git', items: ['Базовые команды: init, add, commit, push, pull', 'Командная работа: ветки, разрешение конфликтов', 'Code Review: создание PR, ревью чужого кода с комментариями', 'Автоматизация: Git Hooks (husky, lint-staged) для проверок перед коммитом'], x: 1215, y: 160, w: 570, accent: '#f25a4e', side: 'left', accentLength: 155 },
      { title: 'GitHub', items: ['Remote-репозитории: push, fetch, pull, настройка SSH-ключей', 'PR-процесс: создание PR, правки после ревью, разрешение конфликтов', 'Управление проектом: GitHub Projects (Kanban), Issues для трекинга задач', 'Профиль: оформление профиля как портфолио, поддержание активности'], x: 1315, y: 705, w: 520, accent: '#111', side: 'right', accentDirection: 'up', accentLength: 85 },
    ],
  },
  {
    id: 8,
    path: 'M -60 700 C 170 615, 245 790, 375 835 C 520 885, 650 790, 790 650 C 910 530, 955 520, 1085 505 C 1195 492, 1195 370, 1305 335 C 1450 288, 1650 325, 1980 435',
    icons: [
      { label: 'Architecture', x: 45, y: 660, color: '#ffc94d' },
      { label: 'Next.js', x: 1485, y: 125, color: '#111' },
    ],
    blocks: [
      { title: 'Архитектура', items: ['Разделение ответственности: компонентная структура, разделение UI/логики/данных, принципы SOLID', 'State Management: выбор подхода (локальный state, Context, Zustand/Redux), избегание prop drilling', 'Масштабируемость: файловая структура проекта (feature-based/layer-based), переиспользуемые компоненты, UI-kit', 'Паттерны проектирования: Container/Presentational, Compound Components, Render Props, HOC', 'Производительность: code splitting, lazy loading, мемоизация, виртуализация списков'], x: 165, y: 160, w: 730, accent: '#ffc94d', side: 'left', accentLength: 170 },
      { title: 'Next.js', items: ['Маршрутизация: файловая структура, Layouts, Nested Routes, спецфайлы (loading.js, error.js, not-found.js)', "RSC: разделение на серверные (по умолчанию) и клиентские ('use client') компоненты для минимизации бандла", 'Data Fetching: async/await в компонентах, управление кэшем (revalidateTag, revalidatePath)', 'Server Actions: обработка форм и мутаций без API-эндпоинтов и useEffect', 'Рендеринг: Static/Dynamic Rendering, PPR (Partial Prerendering)', 'Оптимизация: next/image, шрифты, скрипты, Turbopack для быстрой сборки'], x: 880, y: 615, w: 700, accent: '#111', side: 'right', accentDirection: 'up', accentLength: 105 },
    ],
  },
  {
    id: 9,
    path: 'M -60 490 C 185 335, 330 380, 485 505 C 600 600, 665 575, 740 615 C 840 665, 910 805, 1040 775 C 1140 750, 1190 680, 1185 805 C 1180 950, 1320 1010, 1435 960 C 1545 910, 1580 800, 1690 780 C 1825 755, 1880 810, 1980 720',
    icons: [
      { label: 'AI', x: 140, y: 305, color: '#695bc4' },
      { label: 'DEVOPS', x: 950, y: 690, color: '#111' },
      { label: 'Security', x: 1685, y: 695, color: '#42c66d' },
    ],
    blocks: [
      { title: 'AI-инструменты', items: ['AI-IDE: Cursor / Claude Code / Codex / Warp', 'Prompt Engineering: контекстные промпты, .cursorrules для передачи стайл-гайда и стека проекта', 'AI-UI: генерация React-компонентов из скриншотов/макетов', 'Рефакторинг: поиск узких мест, объяснение legacy-кода, автофикс ошибок по логам', 'AI-тестирование: автогенерация тестов (Vitest, Playwright), моковых данных и граничных случаев', 'Верификация: критическая проверка AI-кода на галлюцинации, уязвимости и соответствие бизнес-логике', 'Документация: автогенерация docs и схем данных (Zod/TypeScript) из описаний API'], x: 250, y: 590, w: 610, accent: '#695bc4', side: 'left', accentDirection: 'up', accentLength: 80 },
      { title: 'DevOps', items: ['CI/CD: автозапуск тестов и сборки через GitHub Actions/GitLab CI, блокировка деплоя при падении тестов', 'Deployment: работа с Vercel. Preview-деплои для каждой ветки', 'Docker: контейнеризация SSR-приложений (Next.js, Remix)', 'Environment Variables: управление секретами и .env для dev/staging/prod'], x: 435, y: 160, w: 620, accent: '#111', side: 'right', accentLength: 135 },
      { title: 'Security', items: ['XSS & Injection: защита от внедрения скриптов, санитизация пользовательского ввода, использование dangerouslySetInnerHTML только с очисткой', 'Аутентификация: безопасное хранение токенов (httpOnly cookies vs localStorage), защита от CSRF-атак', 'HTTPS & CORS: работа только по HTTPS, понимание политик CORS и Content Security Policy (CSP)', 'Секреты: никогда не хранить API-ключи и токены в коде, использование environment variables', 'Валидация: проверка данных на клиенте и сервере, не доверять клиентским данным'], x: 1080, y: 240, w: 650, accent: '#42c66d', side: 'right', accentLength: 160 },
    ],
  },
  {
    id: 10,
    path: 'M -60 555 C 115 720, 220 835, 370 845 C 500 855, 540 790, 620 700 C 735 570, 820 560, 980 520 C 1110 488, 1145 315, 1300 300 C 1475 285, 1605 405, 1665 535 C 1740 680, 1820 720, 1980 655',
    icons: [
      { label: 'Team', x: 190, y: 685, color: '#6a58c8' },
      { label: 'Backend', x: 1260, y: 160, color: '#ffd866' },
      { label: 'Finish', x: 1648, y: 475, color: '#40e02e' },
    ],
    blocks: [
      { title: 'Командная работа', items: ['Agile-процессы: спринты, daily stand-ups, ретроспективы, планирование задач', 'Task Management: работа с Jira/Linear/Asana, декомпозиция задач, оценка Story Points', 'Kanban-flow: управление статусами задач (To Do -> In Progress -> Review -> Done), WIP-лимиты', 'Code Review: культура ревью кода, конструктивная обратная связь, соблюдение DoD (Definition of Done)', 'Коммуникация: документирование решений, синхронизация с командой, прозрачность блокеров'], x: 365, y: 220, w: 650, accent: '#6a58c8', side: 'left', accentLength: 160 },
      { title: 'Основы Backend', items: ['REST API & HTTP: методы (GET, POST, PUT, DELETE), статус-коды, заголовки, работа с JSON', 'Аутентификация: JWT-токены, OAuth, cookie/session, refresh-токены', 'Базы данных: основы SQL/NoSQL, структура таблиц, связи (один-ко-многим, многие-ко-многим)', 'API-дизайн: версионирование, пагинация, фильтрация, сортировка, обработка ошибок', 'Server-Side логика: валидация данных, middleware, rate limiting, CORS'], x: 580, y: 720, w: 760, accent: '#ffd866', side: 'right', accentDirection: 'up', accentLength: 90 },
    ],
  },
]
