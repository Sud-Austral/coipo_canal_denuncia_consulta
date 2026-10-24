# coipo_canal_denuncia_consulta — guía para agentes

## Qué es
Maqueta React exploratoria (v0.1.0, «En revisión») de un canal de denuncias y consultas de CONAF. Solo frontend, sin backend,
sin base de datos, datos ficticios en memoria. Propósito de negocio, roles y marco normativo: **pendiente de confirmar por el
equipo**; ver `insumos/00-PROBLEMA.md` (marcas `[PENDIENTE]`, `[VERIFICAR]`, `[INFERIDO]`: no las resuelvas tú).

## Estructura
Todo el código está en `frontend/` (`src/pages`, `src/components`, `src/context`, `src/fixtures`, `src/lib`). Documentación en
raíz e `insumos/`.

## Comandos (desde `frontend/`)
- `npm install`, `npm run dev`, `npm run build`, `npm run preview`.
- No existen pruebas ni lint. CI: `.github/workflows/deploy.yml` hace `npm ci && npm run build`.

## Convenciones
- Rutas y recursos relativos (`base: process.env.VITE_BASE || './'`); no usar rutas absolutas `/assets/...`.
- Componentes de formulario compartidos en `src/lib/ui.jsx`; estado global solo en `CanalContext`.
- Documentación en español.

## Trampas y qué no tocar
- `frontend/node_modules` aparece versionado en git en este repositorio (VERIFICADO con `git ls-files`): no lo edites ni lo
  incluyas en cambios; decidir si se retira del índice corresponde a una persona.
- `readme.yml` invoca al generador `Sud-Austral/coipo_aireadme` en cada push a `main` (puede proponer README/insumos); no lo modifiques.
- Nunca ingreses datos reales de denuncias: es una maqueta sin seguridad real.
- No agregues backend, almacenamiento ni autenticación sin que el equipo confirme las reglas de confidencialidad.
