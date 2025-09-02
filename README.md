# Reto: Tasks & Listado (React + TypeScript + Redux Toolkit)

Proyecto web que cumple con los requisitos solicitados (adaptado a **React.js** con TypeScript):
- Pantalla principal con 2 botones para navegar a **Tasks** y **Listado**.
- **Tasks**: lista en **Redux**, modal para crear un nuevo task, validación para evitar vacío.
- **Listado**: hace `fetch` al entrar a la pantalla al endpoint `https://6172cfe5110a740017222e2b.mockapi.io/elements`, muestra *loading*, renderiza nombre e imagen (si existe).
- **Tests** con Vitest + React Testing Library: Redux slice, interacciones en pantallas y navegación básica.

> Nota: El reto original menciona React Native; aquí lo entrego en **React.js** como pediste. Si necesitas la versión RN, te la genero también.

## Requisitos
- Node.js 18+ (recomendado 20+)
- PNPM, NPM o Yarn

## Instalación
```bash
npm install
npm run dev
```
Abre http://localhost:5173

## Ejecutar tests
```bash
npm test
```

## Estructura
```
src/
  components/
    AddTaskModal.tsx
    Loading.tsx
    TaskList.tsx
  routes/
    RemoteListPage.tsx
    TasksPage.tsx
    RemoteListPage.test.tsx
    TasksPage.test.tsx
  store/
    index.ts
    tasksSlice.ts
    tasksSlice.test.ts
  App.tsx
  main.tsx
  styles.css
```

## Decisiones técnicas
- **Redux Toolkit** para gestionar el estado de tasks, con `addTask` y `nanoid` para ids.
- **React Router v6** para navegación.
- **Vitest + RTL** para pruebas unitarias de Redux y UI (interacciones, carga remota).
- Modal controlado propio (sin dependencias extras) para facilidad de pruebas.

---

© 2025
