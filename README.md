# CodeWave Design Portfolio

Современный веб-сайт портфолио с поддержкой темной темы, построенный на Next.js 15 и Tailwind CSS v4.

## ✨ Особенности

- 🌙 **Темная тема** - Полная поддержка светлой и темной темы с плавными переходами
- 🎨 **Современный дизайн** - Минималистичный и элегантный интерфейс
- 📱 **Адаптивность** - Отлично выглядит на всех устройствах
- ⚡ **Высокая производительность** - Оптимизировано для быстрой загрузки
- 🎭 **Плавные анимации** - Красивые переходы и эффекты

## 🛠 Технологии

- **Next.js 15** - React фреймворк
- **TypeScript** - Типизированный JavaScript
- **Tailwind CSS v4** - Utility-first CSS фреймворк
- **next-themes** - Управление темами
- **CSS Custom Properties** - Переменные для тем

## 🎨 Система тем

### Реализованные возможности:

- **Автоматическое определение** системных предпочтений пользователя
- **Manual переключение** через кнопку в header
- **Плавные переходы** между темами (0.3s)
- **Сохранение выбора** в localStorage
- **SSR поддержка** без мерцания

### Доступные темы:

- `light` - Светлая тема
- `dark` - Темная тема
- `system` - Автоматически по системным настройкам (по умолчанию)

### CSS переменные:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  --primary: #171717;
  --secondary: #f5f5f5;
  --muted-foreground: #737373;
  /* ... и другие */
}

.dark {
  --background: #0a0a0a;
  --foreground: #ededed;
  --primary: #ededed;
  --secondary: #262626;
  --muted-foreground: #a3a3a3;
  /* ... и другие */
}
```

## 🚀 Запуск проекта

```bash
# Установка зависимостей
npm install

# Запуск dev сервера
npm run dev

# Сборка для продакшена
npm run build

# Запуск продакшен сервера
npm start
```

## 📁 Структура проекта

```
src/
├── app/
│   ├── layout.tsx          # Корневой layout с ThemeProvider
│   ├── page.tsx            # Главная страница
│   └── globals.css         # Глобальные стили и CSS переменные
├── components/
│   ├── ThemeProvider.tsx   # Провайдер тем
│   ├── ThemeToggle.tsx     # Переключатель тем
│   ├── Header.tsx          # Шапка сайта
│   ├── Hero.tsx            # Главный блок
│   ├── About.tsx           # О нас
│   ├── Projects.tsx        # Проекты
│   ├── Expertise.tsx       # Компетенции
│   ├── Contact.tsx         # Контакты
│   ├── Footer.tsx          # Подвал
│   └── index.ts            # Экспорты компонентов
└── data/
    └── projects.ts         # Данные проектов
```

## 🎛 Использование системы тем

### В компонентах:

```tsx
import { useTheme } from "next-themes";

function MyComponent() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="bg-background text-foreground">
      <button onClick={() => setTheme("dark")}>Темная тема</button>
    </div>
  );
}
```

### CSS классы:

```tsx
// Используйте семантические классы вместо фиксированных цветов
<div className="text-foreground bg-background">
  <h1 className="text-primary">Заголовок</h1>
  <p className="text-muted-foreground">Описание</p>
</div>
```

---

**Создано с ❤️ командой [CodeWave](https://codewave-eo.online)**
