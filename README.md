# motorteh-catalog

Статический сайт-каталог на [Astro](https://astro.build/), опубликован на GitHub Pages.

## Разработка

```bash
npm install          # установить зависимости
npm run dev          # dev-сервер на http://localhost:4321
npm run build        # сборка в dist/
npm run preview      # предпросмотр сборки
npm run format       # форматирование кода (Prettier)
npm run format:check # проверка форматирования
```

## Структура проекта

```
src/
├── content/catalog/          # контент каталога (Markdown)
│   ├── ipc-portotecnica/
│   │   ├── index.md          # страница бренда
│   │   └── *.md              # подкатегории
│   └── *.md                  # бренды без подкатегорий
├── layouts/
│   └── BaseLayout.astro      # общий лейаут
├── pages/
│   ├── index.astro           # главная
│   ├── contacts.astro        # контакты
│   └── catalog/              # страницы каталога
├── content.config.ts         # схема контент-коллекций
└── remark-base-url.mjs       # remark-плагин для путей к изображениям
public/
├── images/                   # изображения каталога
└── styles/global.css         # стили
```

## Как редактировать каталог

Каталог — Markdown-файлы в `src/content/catalog/`. Каждый файл начинается с YAML-заголовка:

```markdown
---
title: 'Мойки высокого давления'
parent: 'ipc-portotecnica'
icon: '/images/icon.jpg'
sort: 2
---

<div class="content-html">
  <!-- HTML-контент: таблицы с характеристиками -->
</div>
```

| Поле     | Описание                                            |
| -------- | --------------------------------------------------- |
| `title`  | Название (обязательно)                              |
| `parent` | Slug родительского бренда (только для подкатегорий) |
| `icon`   | Путь к иконке в `/images/`                          |
| `sort`   | Порядок сортировки (меньше = выше)                  |
| `hidden` | `true` — скрыть из каталога                         |

**Добавить бренд с подкатегориями:** создать папку + `index.md` + файлы категорий.

**Добавить бренд без подкатегорий:** один `.md` файл в корне `catalog/`.

**Изменить контакты:** `src/pages/contacts.astro` и `src/layouts/BaseLayout.astro` (футер).

## Деплой

Автоматический через GitHub Actions при пуше в `main`.

Ручной: Actions → Deploy to GitHub Pages → Run workflow.

При смене домена или имени репозитория обновите `site` и `base` в `astro.config.mjs`, а также путь в `src/remark-base-url.mjs`.
