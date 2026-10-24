# coipo_canal_denuncia_consulta — Canal de Denuncias y Consultas CONAF (maqueta MVP)

Maqueta funcional **exploratoria** del Canal Institucional de Denuncias y Consultas de CONAF, hecha con datos
ficticios y sin backend (VERIFICADO: `frontend/README.md`, `frontend/src/context/CanalContext.jsx`). Versión
declarada: **v0.1.0, «En revisión»** (`frontend/VERSIONES.md`). Quién la usará y qué área la patrocina:
pendiente de confirmar por el equipo (ver [`insumos/00-PROBLEMA.md`](insumos/00-PROBLEMA.md)).

> No ingresar información real ni sensible: lo que se escribe vive solo en la memoria del navegador.

## Pantallas (VERIFICADO: `frontend/src/App.jsx`)

| Ruta | Pantalla |
|---|---|
| `/` | Inicio: acceso a los tres caminos |
| `/denuncia` | Registrar una denuncia (el README del frontend habla de modalidad anónima/identificada, descripción, involucrados y antecedentes) |
| `/consulta` | Registrar una consulta |
| `/seguimiento` | Consultar el estado por código de seguimiento |

Cualquier otra ruta redirige a `/`. No hay login ni control de acceso en el código.

## Stack

React 19, Vite 8, React Router 7, Tailwind CSS 4 (`@tailwindcss/vite`), lucide-react. Estado en memoria con Context API
y casos de ejemplo en `frontend/src/fixtures/casos.js`. Los códigos de seguimiento (`DEN-2026-000N` / `CON-2026-000N`)
se generan en el navegador (simulado). Fuente: `frontend/package.json`.

## Estructura

```
frontend/
  src/pages/        Inicio, Denuncia, Consulta, Seguimiento
  src/components/   Layout (encabezado y navegación)
  src/context/      CanalContext (estado en memoria)
  src/fixtures/     casos de ejemplo
  src/lib/ui.jsx    piezas reutilizables (campo, botón, aviso)
  ejecutar.bat      instala (si falta node_modules) y levanta el servidor de desarrollo en Windows
insumos/            problema, solución y manifiesto (derivados del código)
.github/workflows/  deploy.yml (GitHub Pages) y readme.yml (generador de README/insumos)
```

## Cómo ejecutarlo

```bash
cd frontend
npm install
npm run dev        # desarrollo
npm run build      # compila a frontend/dist
npm run preview    # sirve lo compilado
```

No hay pruebas automáticas ni linter configurados (VERIFICADO: `package.json` solo define `dev`, `build`, `preview`).
No ejecuté `npm install` ni `build` al escribir este documento: no lo comprobé.

## Configuración

Una sola variable: `VITE_BASE` (ruta base de publicación; por defecto `./`). Ver `frontend/vite.config.js` y
[`CONFIG_GITHUB_PAGES.md`](CONFIG_GITHUB_PAGES.md). No hay secretos ni `.env` necesarios.

## Despliegue

`.github/workflows/deploy.yml` compila `frontend/` con Node 22 (`npm ci` + `npm run build`) y publica `frontend/dist` en
GitHub Pages al hacer push a `main` que toque `frontend/**`. La URL pública: no la comprobé.

## Documentos

- [`CLAUDE.md`](CLAUDE.md) — guía para agentes
- [`insumos/00-PROBLEMA.md`](insumos/00-PROBLEMA.md) — el problema
- [`insumos/01-SOLUCION.md`](insumos/01-SOLUCION.md) — la solución
- [`frontend/VERSIONES.md`](frontend/VERSIONES.md) — registro de versiones

Las reglas de anonimato, estados, roles y confidencialidad deben validarse con Integridad, Fiscalía y el Comité de
Integridad antes de tratarse como requerimientos (`frontend/README.md`).
