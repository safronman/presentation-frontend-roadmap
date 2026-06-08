export type RoadmapTextBlock = {
  title: string
  items?: string[]
  x: number
  y: number
  w: number
  align?: 'left' | 'center' | 'right'
  accent?: string
  side?: 'left' | 'right'
  size?: 'sm' | 'md' | 'lg'
}

export type RoadmapIcon = {
  label: string
  x: number
  y: number
  w: number
  h: number
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
    level: 'Уровень знаний: 0',
    avatar: '👶',
    avatarColor: '#ccfb50',
    path: 'M -40 530 C 155 470, 315 455, 410 505 C 500 650, 585 700, 720 680 C 955 670, 1025 610, 1125 500 C 1230 390, 1325 350, 1455 352 C 1610 365, 1735 395, 1960 420',
    icons: [
      { label: 'HTML5', x: 610, y: 625, w: 130, h: 105, kind: 'badge', color: '#f05a28' },
      { label: 'CSS', x: 1405, y: 300, w: 135, h: 110, kind: 'badge', color: '#3158e8' },
    ],
    blocks: [
      { title: 'Старт', x: 180, y: 270, w: 300, size: 'lg' },
      {
        title: 'Основы HTML',
        items: ['Что такое HTML?', 'Структура HTML-документа', 'Семантика'],
        x: 705,
        y: 140,
        w: 430,
        accent: '#f45b2b',
        side: 'left',
      },
      {
        title: 'Теги и их атрибуты',
        items: ['Заголовки и подзаголовки', 'Текст', 'Ссылки', 'Изображения', 'Списки (маркированные, нумерованные)', 'Таблицы', 'Формы и элементы управления'],
        x: 705,
        y: 340,
        w: 520,
        accent: '#f45b2b',
        side: 'left',
      },
      { title: 'Основы CSS', x: 1490, y: 515, w: 300, accent: '#2f63ff', side: 'left' },
      { title: 'Семантика', x: 1250, y: 590, w: 270, align: 'right', accent: '#2f63ff', side: 'right' },
      { title: 'Каскадность и продвинутые стили', x: 1495, y: 625, w: 330, accent: '#2f63ff', side: 'left' },
      { title: 'Grid и анимации', x: 1180, y: 715, w: 300, align: 'right', accent: '#2f63ff', side: 'right' },
      { title: 'Дополнительные темы и стилизация форм', x: 1495, y: 785, w: 360, accent: '#2f63ff', side: 'left' },
    ],
  },
  {
    id: 2,
    level: 'Уровень знаний: Основы вёрстки',
    avatar: '👦',
    avatarColor: '#5bc7e7',
    path: 'M -40 465 C 70 405, 85 425, 110 490 C 210 555, 355 560, 510 555 C 600 552, 660 515, 735 585 C 820 665, 850 735, 945 690 C 1015 655, 1010 555, 1085 520 C 1185 470, 1235 540, 1275 630 C 1310 710, 1505 670, 1645 640 C 1780 615, 1850 735, 1960 700',
    icons: [
      { label: 'React', x: 575, y: 445, w: 155, h: 120, kind: 'logo', color: '#26c6e8' },
      { label: 'useState', x: 960, y: 515, w: 190, h: 90, kind: 'badge', color: '#e9f4ff' },
      { label: 'TS', x: 1320, y: 615, w: 125, h: 125, kind: 'badge', color: '#3178c6' },
      { label: 'Data', x: 1640, y: 620, w: 120, h: 110, kind: 'emoji', color: '#0b89a8' },
    ],
    blocks: [
      { title: 'Новичок', x: 155, y: 270, w: 340, size: 'lg' },
      {
        title: 'Введение и настройка проекта',
        items: ['Создание проекта для работы с React (сборщик Vite)', 'Рассмотрение структуры проекта: модули, пакеты, JSX'],
        x: 695,
        y: 95,
        w: 690,
        accent: '#14c9e8',
        side: 'left',
      },
      {
        title: 'Основы React',
        items: ['Что такое React и зачем он нужен?', 'CRUD-операции', 'Зачем нужны компоненты?', 'Разработка первого компонента', 'Работа с объектом props'],
        x: 695,
        y: 250,
        w: 520,
        accent: '#14c9e8',
        side: 'left',
      },
      {
        title: 'Состояние и управление React',
        items: ['Использование useState', 'Обработка изменений состояния с колбэками', 'Иммутабельность и обновление интерфейса', 'Рендеринг списков и использование атрибута key'],
        x: 735,
        y: 805,
        w: 520,
        align: 'right',
        accent: '#2f63ff',
        side: 'right',
      },
      {
        title: 'TypeScript',
        items: ['Знакомство с TypeScript', 'Типизация примитивов', 'Типизация сложных типов данных', 'Дженерики', 'Утилитные типы'],
        x: 1370,
        y: 825,
        w: 420,
        accent: '#ff3b85',
        side: 'left',
      },
      {
        title: 'Сложные структуры данных / Обработка событий',
        items: ['Ассоциативный массив', 'Универсальные компоненты', 'Обработка событий onClick, onChange', 'Условный рендеринг и условное присвоение классов'],
        x: 1290,
        y: 130,
        w: 500,
        align: 'right',
        accent: '#008fdc',
        side: 'right',
      },
    ],
  },
  {
    id: 3,
    path: 'M -40 555 C 170 435, 310 385, 420 555 S 620 900, 780 705 S 840 435, 1010 500 S 1120 880, 1285 740 S 1540 375, 1715 540 S 1800 660, 1960 640',
    icons: [
      { label: 'React Router', x: 150, y: 405, w: 270, h: 105, kind: 'logo', color: '#fa3d54' },
      { label: 'MUI', x: 590, y: 750, w: 105, h: 70, kind: 'logo', color: '#1299dc' },
      { label: 'Flow', x: 1270, y: 650, w: 135, h: 110, kind: 'emoji', color: '#f9735b' },
      { label: 'S', x: 1680, y: 500, w: 105, h: 120, kind: 'badge', color: '#ff4081' },
    ],
    blocks: [
      { title: 'React-router', items: ['Роуты', 'Редиректы (useNavigate и Navigate)', 'Обработка ошибки 404', 'Работа с параметрами'], x: 275, y: 760, w: 360, accent: '#ff3b5f', side: 'left' },
      { title: 'Интеграция Material UI', items: ['Введение в Material UI', 'Подключение и использование библиотечных компонентов', 'Material UI: стандартные элементы ввода', 'Material UI: элементы сетки', 'Стилизация'], x: 410, y: 215, w: 390, align: 'right', accent: '#ff3b85', side: 'right' },
      { title: 'Компоненты / формы / таблицы', items: ['Headless компоненты', 'Radix UI', 'shadcn', 'Работа с таблицами'], x: 895, y: 235, w: 475, accent: '#008fdc', side: 'right' },
      { title: 'Storybook', items: ['Введение в Storybook.', 'Тестирование React-компонентов (Snapshot/Screenshot)'], x: 1545, y: 760, w: 290, align: 'right', accent: '#573bff', side: 'right' },
    ],
  },
  {
    id: 4,
    path: 'M -40 520 C 170 405, 260 350, 390 475 S 530 690, 700 625 S 875 445, 1030 490 S 1110 705, 1240 640 S 1450 480, 1590 550 S 1790 720, 1960 645',
    icons: [
      { label: 'Redux Toolkit', x: 145, y: 370, w: 240, h: 110, kind: 'badge', color: '#764abc' },
      { label: 'VITEST', x: 665, y: 545, w: 130, h: 90, kind: 'logo', color: '#7da721' },
      { label: 'AJAX', x: 1090, y: 570, w: 120, h: 80, kind: 'logo', color: '#398fd0' },
      { label: 'WS', x: 1640, y: 455, w: 180, h: 110, kind: 'emoji', color: '#d8edf9' },
    ],
    blocks: [
      { title: 'Redux Toolkit', items: ['configureStore', 'createSlice', 'createAction', 'immerJS', 'createSelector', 'createAsyncThunk', 'обработка ошибок / rejectWithValue', 'builder (addCase, addMatcher)', 'matching utilities'], x: 205, y: 660, w: 440, accent: '#ff553d', side: 'left' },
      { title: 'Тестирование', items: ['Работа с Vitest', 'Покрытие редьюсера тестами', 'Test Driven Development (TDD)'], x: 725, y: 105, w: 400, accent: '#5db8ef', side: 'left' },
      { title: 'Взаимодействие с сервером', items: ['Запросы к серверу (Ajax Request) с Axios', 'Работа с REST API', 'Реализация CRUD операций', 'Типизация запросов и использование "дженериков"'], x: 1170, y: 835, w: 540, accent: '#573bff', side: 'left' },
      { title: 'WebSocket', items: ['Постоянное соединение клиента и сервера', 'Передача данных в реальном времени без задержек'], x: 1375, y: 160, w: 410, align: 'right', accent: '#573bff', side: 'right' },
    ],
  },
  {
    id: 5,
    path: 'M -40 500 C 210 350, 320 345, 440 500 S 560 650, 720 590 S 980 395, 1120 345 S 1320 320, 1360 430 S 1330 780, 1500 800 S 1730 745, 1960 485',
    icons: [
      { label: '✕', x: 205, y: 355, w: 135, h: 135, kind: 'emoji', color: '#df526b' },
      { label: 'React Hook Form + Zod', x: 865, y: 215, w: 320, h: 115, kind: 'logo', color: '#ec4c8a' },
      { label: 'Login', x: 1668, y: 675, w: 155, h: 140, kind: 'emoji', color: '#0e3a50' },
    ],
    blocks: [
      { title: 'Обработка ошибок / loaders', items: ['Preloaders (отображение на UI)', 'Disable кнопок и компонент, как часть правильного UX', 'Обработка ошибок'], x: 310, y: 750, w: 440, accent: '#ff5d83', side: 'left' },
      { title: 'React hook form', items: ['Получение данных', 'Валидация и обработка ошибок', 'Валидация форм и ответа сервера с Zod'], x: 975, y: 700, w: 420, accent: '#1d6bff', side: 'left' },
      { title: 'Auth flow', items: ['Axios interceptors', 'Protected routes', 'Реализация авторизационного Flow (login, logout, authMe)'], x: 1540, y: 240, w: 310, align: 'right', accent: '#12aeb8', side: 'right' },
    ],
  },
  {
    id: 6,
    path: 'M -40 540 C 190 455, 280 560, 390 670 S 570 540, 690 405 S 890 445, 1040 565 S 1160 690, 1280 620 S 1510 550, 1650 605 S 1790 690, 1960 645',
    icons: [
      { label: 'RTK Query', x: 50, y: 720, w: 300, h: 85, kind: 'logo', color: '#764abc' },
      { label: 'TanStack + Zustand', x: 590, y: 255, w: 300, h: 160, kind: 'logo', color: '#28a45b' },
      { label: '+ ESLint', x: 1100, y: 535, w: 330, h: 110, kind: 'logo', color: '#4b32bd' },
      { label: '⚙', x: 1665, y: 535, w: 145, h: 135, kind: 'emoji', color: '#5bb8ed' },
    ],
    blocks: [
      { title: 'RTK Query', items: ['Query запросы (Get)', 'Mutation запросы (Post, Delete, Put)', 'Conditional fetching', 'Кеширование и обновление данных', 'Обработка ошибок', 'Optimistic update'], x: 185, y: 190, w: 240, align: 'right', accent: '#6f45d6', side: 'right' },
      { title: 'TanStack & Zustand', items: ['TanStack Query: управление server state (fetching, caching, синхронизация), автоматическая инвалидация и refetch данных', 'Query оптимизация: staleTime, cacheTime, prefetching, optimistic updates для мгновенного UI', 'Zustand: легковесный state manager для client state, минималистичный API без boilerplate', 'Разделение состояния: TanStack Query для серверных данных, Zustand для UI-состояния и глобальных настроек'], x: 605, y: 640, w: 620, accent: '#c8d10a', side: 'right' },
      { title: 'Code style', items: ['Prettier', 'ESlint', 'Stylelint', 'Работа с импортами'], x: 1235, y: 780, w: 360, align: 'right', accent: '#7448ff', side: 'right' },
      { title: 'Оптимизация приложения', items: ['React memo', 'useCallback', 'useMemo', 'Оптимизация рендеринга React-компонентов'], x: 1585, y: 160, w: 380, align: 'right', accent: '#59b8ff', side: 'right' },
    ],
  },
  {
    id: 7,
    path: 'M -40 430 C 160 345, 210 575, 325 670 S 390 915, 540 890 S 1020 830, 1100 760 S 1125 610, 1325 575 S 1660 420, 1760 560 S 1830 655, 1960 640',
    icons: [
      { label: 'JavaScript', x: 400, y: 795, w: 130, h: 130, kind: 'badge', color: '#f7df1e' },
      { label: 'Git', x: 1065, y: 610, w: 180, h: 180, kind: 'badge', color: '#f25a4e' },
      { label: 'GitHub', x: 1665, y: 470, w: 140, h: 145, kind: 'emoji', color: '#111' },
    ],
    blocks: [
      { title: 'Введение', items: ['Объекты', 'Функции', 'Деструктурирующие присваивания', 'Ассоциативный массив'], x: 60, y: 180, w: 430, align: 'right' },
      { title: 'Замыкания и асинхронное программирование', items: ['Лексическое окружение', 'Замыкания', 'Promise', 'async-await, try catch', 'event loop'], x: 60, y: 355, w: 430, align: 'right' },
      { title: 'Работа с массивами и функции высшего порядка', items: ['Работа с массивом (map, filter)', 'Callback', 'События (onClick, onChange, onBlur)', 'Имутабельность'], x: 510, y: 190, w: 490, accent: '#f2ca00', side: 'left' },
      { title: 'Объектно-ориентированное программирование', items: ['ООП: This, new, call, apply, bind', 'Классы (Class)', 'Прототипы (proto)', 'Observer, Publisher-Subscriber'], x: 510, y: 480, w: 480, accent: '#f2ca00', side: 'left' },
      { title: 'Git', items: ['Базовые команды: init, add, commit, push, pull', 'Командная работа: ветки, разрешение конфликтов', 'Code Review: создание PR, ревью чужого кода с комментариями', 'Автоматизация: Git Hooks (husky, lint-staged) для проверок перед коммитом'], x: 1215, y: 160, w: 570, accent: '#ff5d50', side: 'left' },
      { title: 'GitHub', items: ['Remote-репозитории: push, fetch, pull, настройка SSH-ключей', 'PR-процесс: создание PR, правки после ревью, разрешение конфликтов', 'Управление проектом: GitHub Projects (Kanban), Issues для трекинга задач', 'Профиль: оформление профиля как портфолио, поддержание активности'], x: 1315, y: 705, w: 520, align: 'right', accent: '#111', side: 'right' },
    ],
  },
  {
    id: 8,
    path: 'M -40 700 C 220 610, 210 820, 360 840 S 650 790, 780 660 S 860 520, 980 515 S 1170 475, 1215 430 S 1240 335, 1430 310 S 1710 305, 1960 435',
    icons: [
      { label: 'Architecture', x: 45, y: 660, w: 200, h: 170, kind: 'emoji', color: '#ffc94d' },
      { label: 'Next.js', x: 1485, y: 125, w: 180, h: 180, kind: 'badge', color: '#111' },
    ],
    blocks: [
      { title: 'Архитектура', items: ['Разделение ответственности: компонентная структура, разделение UI/логики/данных, принципы SOLID', 'State Management: выбор подхода (локальный state, Context, Zustand/Redux), избегание prop drilling', 'Масштабируемость: файловая структура проекта (feature-based/layer-based), переиспользуемые компоненты, UI-kit', 'Паттерны проектирования: Container/Presentational, Compound Components, Render Props, HOC', 'Производительность: code splitting, lazy loading, мемоизация, виртуализация списков'], x: 165, y: 160, w: 730, accent: '#7a4cf3', side: 'left' },
      { title: 'Next.js', items: ['Маршрутизация: файловая структура, Layouts, Nested Routes, спецфайлы (loading.js, error.js, not-found.js)', "RSC: разделение на серверные (по умолчанию) и клиентские ('use client') компоненты для минимизации бандла", 'Data Fetching: async/await в компонентах, управление кэшем (revalidateTag, revalidatePath)', 'Server Actions: обработка форм и мутаций без API-эндпоинтов и useEffect', 'Рендеринг: Static/Dynamic Rendering, PPR (Partial Prerendering)', 'Оптимизация: next/image, шрифты, скрипты, Turbopack для быстрой сборки'], x: 880, y: 615, w: 700, align: 'right', accent: '#111', side: 'right' },
    ],
  },
  {
    id: 9,
    path: 'M -40 490 C 210 335, 330 390, 480 500 S 540 585, 650 590 S 715 600, 835 690 S 980 800, 1090 770 S 1190 690, 1160 850 S 1210 980, 1390 995 S 1545 840, 1690 780 S 1840 825, 1960 720',
    icons: [
      { label: 'AI', x: 140, y: 305, w: 145, h: 145, kind: 'badge', color: '#695bc4' },
      { label: 'DEVOPS', x: 950, y: 690, w: 210, h: 160, kind: 'logo', color: '#111' },
      { label: 'Security', x: 1685, y: 695, w: 140, h: 145, kind: 'emoji', color: '#42c66d' },
    ],
    blocks: [
      { title: 'AI-инструменты', items: ['AI-IDE: Cursor / Claude Code / Codex / Warp', 'Prompt Engineering: контекстные промпты, .cursorrules для передачи стайл-гайда и стека проекта', 'AI-UI: генерация React-компонентов из скриншотов/макетов', 'Рефакторинг: поиск узких мест, объяснение legacy-кода, автофикс ошибок по логам', 'AI-тестирование: автогенерация тестов (Vitest, Playwright), моковых данных и граничных случаев', 'Верификация: критическая проверка AI-кода на галлюцинации, уязвимости и соответствие бизнес-логике', 'Документация: автогенерация docs и схем данных (Zod/TypeScript) из описаний API'], x: 250, y: 590, w: 610, accent: '#635bff', side: 'left' },
      { title: 'DevOps', items: ['CI/CD: автозапуск тестов и сборки через GitHub Actions/GitLab CI, блокировка деплоя при падении тестов', 'Deployment: работа с Vercel. Preview-деплои для каждой ветки', 'Docker: контейнеризация SSR-приложений (Next.js, Remix)', 'Environment Variables: управление секретами и .env для dev/staging/prod'], x: 435, y: 160, w: 620, align: 'right', accent: '#1c6bff', side: 'right' },
      { title: 'Security', items: ['XSS & Injection: защита от внедрения скриптов, санитизация пользовательского ввода, использование dangerouslySetInnerHTML только с очисткой', 'Аутентификация: безопасное хранение токенов (httpOnly cookies vs localStorage), защита от CSRF-атак', 'HTTPS & CORS: работа только по HTTPS, понимание политик CORS и Content Security Policy (CSP)', 'Секреты: никогда не хранить API-ключи и токены в коде, использование environment variables', 'Валидация: проверка данных на клиенте и сервере, не доверять клиентским данным'], x: 1080, y: 240, w: 650, align: 'right', accent: '#19b5aa', side: 'right' },
    ],
  },
  {
    id: 10,
    path: 'M -40 555 C 120 720, 215 835, 360 845 C 505 855, 540 785, 600 700 C 685 600, 805 565, 950 525 C 1110 480, 1135 305, 1295 295 C 1475 285, 1600 405, 1665 535 C 1735 675, 1815 720, 1960 655',
    icons: [
      { label: 'Team', x: 190, y: 685, w: 220, h: 190, kind: 'emoji', color: '#6a58c8' },
      { label: 'Backend', x: 1260, y: 160, w: 215, h: 190, kind: 'emoji', color: '#ffd866' },
      { label: 'Finish', x: 1648, y: 475, w: 210, h: 210, kind: 'emoji', color: '#40e02e' },
    ],
    blocks: [
      { title: 'Командная работа', items: ['Agile-процессы: спринты, daily stand-ups, ретроспективы, планирование задач', 'Task Management: работа с Jira/Linear/Asana, декомпозиция задач, оценка Story Points', 'Kanban-flow: управление статусами задач (To Do -> In Progress -> Review -> Done), WIP-лимиты', 'Code Review: культура ревью кода, конструктивная обратная связь, соблюдение DoD (Definition of Done)', 'Коммуникация: документирование решений, синхронизация с командой, прозрачность блокеров'], x: 365, y: 220, w: 650, accent: '#7a4cf3', side: 'left' },
      { title: 'Основы Backend', items: ['REST API & HTTP: методы (GET, POST, PUT, DELETE), статус-коды, заголовки, работа с JSON', 'Аутентификация: JWT-токены, OAuth, cookie/session, refresh-токены', 'Базы данных: основы SQL/NoSQL, структура таблиц, связи (один-ко-многим, многие-ко-многим)', 'API-дизайн: версионирование, пагинация, фильтрация, сортировка, обработка ошибок', 'Server-Side логика: валидация данных, middleware, rate limiting, CORS'], x: 580, y: 720, w: 760, align: 'right', accent: '#f7c743', side: 'right' },
    ],
  },
]
