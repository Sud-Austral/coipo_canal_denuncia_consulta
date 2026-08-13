# Registro de versiones — Canal de Denuncias y Consultas CONAF

| Versión | Estado | Descripción |
|---|---|---|
| **v0.1.0** | **🔎 En revisión** | Primera maqueta funcional exploratoria. Incluye Inicio, Denuncia, Consulta y Seguimiento; navegación con React Router; Context API; fixtures ficticios; generación simulada de códigos de seguimiento. |

## Base arquitectónica

Esta maqueta toma como referencia la arquitectura de **Gestión de Expedientes MVP v0.6.0** compartida para este proyecto: React 19, Vite, React Router, Tailwind CSS 4, componentes reutilizables, Context API y fixtures.

## Reglas de esta versión

- **Inicio:** acceso a Denuncia, Consulta y Seguimiento.
- **Denuncia:** permite explorar modalidad anónima/identificada, descripción, involucrados y antecedentes.
- **Consulta:** flujo separado para validar si requiere tratamiento diferente a una denuncia.
- **Seguimiento:** consulta mediante código único.
- **Datos:** exclusivamente ficticios y en memoria.
- **Seguridad:** la confidencialidad y anonimato son hipótesis de diseño; no se implementa seguridad real en esta maqueta.
- **Archivos:** no se almacenan documentos reales.

## Regla de validación

Una versión solamente se convierte en **base oficial** cuando el usuario entrega explícitamente su **OK**.

Si una iteración posterior pierde la visión del sistema, se recupera la última versión marcada como OK.
