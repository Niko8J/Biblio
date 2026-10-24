# Test Biblioteca — Facultativo de Biblioteca

App de tests (PWA) con 4.024 preguntas de los 100 temas.

## Subir a GitHub Pages
1. Crea un repositorio en GitHub (p. ej. `test-biblioteca`).
2. Sube el contenido de esta carpeta (index.html, bank.js, sw.js, manifest.webmanifest, carpeta icons/). Las carpetas bank/ y los .js de build son opcionales.
3. Settings → Pages → Source: "Deploy from a branch", rama `main`, carpeta `/ (root)` → Save.
4. En 1–2 minutos estará en `https://TU_USUARIO.github.io/test-biblioteca/`.
5. En el móvil: abre esa dirección y usa "Instalar" (Android/Chrome) o Compartir → "Añadir a pantalla de inicio" (iPhone/Safari).

## Puntuación
Acierto +1, error −1/3, en blanco 0. Nota sobre 10 = (aciertos − errores/3) / total × 10 (mínimo 0).

## Actualizar el banco
Edita bank/tN.json (la correcta va SIEMPRE la primera; la app baraja), ejecuta `node build_bank.js` y cambia VERSION en sw.js.

Las preguntas se han generado a partir de tus resúmenes: pueden contener errores. No es material oficial.
