# Configuración GitHub Pages — estándar robusto

Vite usa una base dinámica:
- Local: `./`
- GitHub Pages: `/<nombre-del-repositorio>/`

GitHub Actions establece automáticamente `VITE_BASE` con el nombre real del repositorio.

No usar rutas absolutas `/assets/...` para los recursos.
El entrypoint de `index.html` es relativo (`./src/main.jsx`).
El workflow publica `frontend/dist`.

Esta configuración está pensada para que el mismo template pueda clonarse a cualquier repositorio sin volver a configurar manualmente la ruta de Vite.
