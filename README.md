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
icon: '/images/fp-222.jpg'
sort: 2
---

![FP 222](/motorteh-catalog/images/fp-222.jpg)

| Модель | Давление, бар | Производительность, л/ч | Мощность, кВт | Вес, кг |
| ------ | ------------- | ----------------------- | ------------- | ------- |
| FP 222 | 200           | 780                     | 5,2           | 62      |
| IP 200 | 200           | 900                     | 5,5           | 77      |
```

> Изображения в контенте указываются с base path: `/motorteh-catalog/images/...`
> Иконки в frontmatter (`icon`) — без base path: `/images/...`

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
