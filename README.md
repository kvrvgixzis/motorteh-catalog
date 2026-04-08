# Мотор технология — каталог оборудования

Сайт-каталог моечного и клинингового оборудования компании «Мотор технология» (г. Нижний Новгород).

Статический сайт на [Astro](https://astro.build/), публикуется на GitHub Pages.

## Структура сайта

```
/                    — Главная (о компании + превью каталога)
/catalog/            — Каталог (все бренды)
/catalog/{brand}/    — Страница бренда (список категорий)
/catalog/{brand}/{category}/ — Категория (таблица товаров)
/contacts/           — Контакты
```

## Как редактировать контент

Весь каталог хранится в Markdown-файлах в папке `src/content/catalog/`.

### Структура файлов каталога

```
src/content/catalog/
├── ipc-portotecnica/           # Бренд с подкатегориями
│   ├── index.md                # Описание бренда
│   ├── mojki-vysokogo-davleniya-s-podogrevom-vody.md
│   └── parogeneratory.md
├── karcher/
│   ├── index.md
│   └── ...
├── rashodnye-materialy.md      # Бренд без подкатегорий (один файл)
└── kompressornoe-oborudovanie.md
```

### Формат файла

Каждый `.md` файл начинается с frontmatter (YAML-заголовок):

```markdown
---
title: "Мойки высокого давления с подогревом воды"
parent: "ipc-portotecnica"
icon: "/images/icon1132751053.jpg"
sort: 2
oldId: 8
---

<div class="content-html">
  <table>
    <!-- HTML-таблица с характеристиками -->
  </table>
</div>
```

**Поля frontmatter:**
- `title` — название (обязательно)
- `parent` — slug родительского бренда (только для подкатегорий)
- `icon` — путь к иконке в `/images/`
- `sort` — порядок сортировки (меньше = выше)
- `hidden` — `true` чтобы скрыть из каталога
- `oldId` — ID из старой базы (для справки)

### Как добавить новый бренд

1. Создайте папку `src/content/catalog/{slug}/`
2. Добавьте `index.md` с frontmatter
3. Добавьте файлы подкатегорий

### Как добавить категорию в существующий бренд

1. Создайте файл `src/content/catalog/{brand}/{category-slug}.md`
2. Заполните frontmatter и контент

### Как изменить контакты

Контактная информация в двух местах:
- `src/pages/contacts.astro` — страница контактов
- `src/layouts/BaseLayout.astro` — футер (показывается на всех страницах)

### Как изменить текст «О компании»

Текст на главной странице: `src/pages/index.astro`

## Изображения

Все изображения лежат в `public/images/`. Чтобы добавить новое:
1. Положите файл в `public/images/`
2. Используйте путь `/images/filename.jpg` в контенте

## Разработка

```bash
npm install          # Установить зависимости
npm run dev          # Запустить dev-сервер (http://localhost:4321)
npm run build        # Собрать для продакшена (в dist/)
npm run preview      # Предпросмотр собранного сайта
```

## Деплой

Сайт автоматически публикуется на GitHub Pages при пуше в ветку `main`.

Для ручного деплоя: GitHub → Actions → «Deploy to GitHub Pages» → Run workflow.

### Настройка GitHub Pages

1. В настройках репозитория: Settings → Pages
2. Source: **GitHub Actions**
3. Обновите `site` в `astro.config.mjs` на ваш URL:
   ```js
   site: 'https://username.github.io',
   ```

## Технологии

- [Astro](https://astro.build/) v6 — генератор статических сайтов
- Content Collections — типизированный контент из Markdown
- GitHub Actions — автоматический деплой
