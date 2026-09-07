# Problema, reconstruido desde el codigo

Este documento no recoge lo que dijo nadie. Se deduce de lo que quedo escrito
en el repositorio, y por eso cada afirmacion lleva su cita o su marca.

## La cadena de inferencia, dicha en voz alta

El repositorio contiene cuatro pantallas de navegacion, y sus nombres son
Inicio, Denuncia, Consulta y Seguimiento [frontend/src/pages/Inicio.jsx],
[frontend/src/pages/Denuncia.jsx], [frontend/src/pages/Consulta.jsx],
[frontend/src/pages/Seguimiento.jsx]. Estan enlazadas entre si por el
enrutador declarado en el punto de entrada [frontend/src/App.jsx:1] y por la
navegacion comun [frontend/src/components/Layout.jsx:1].

De ahi la inferencia, que es debil y hay que leerla como tal: si se construyo
una via para ingresar una denuncia, para hacer una consulta y para hacer el
seguimiento posterior de lo ingresado, probablemente antes no existia una via
unica para hacer esas tres cosas. [INFERIDO]

Lo que el codigo no dice, y no lo dice en ninguna parte, es por que se
necesitaba esa via, quien la pidio y que se hacia en su lugar. Todo eso queda
abajo como [PENDIENTE].

## Quien sufre el problema

No hay ningun control de acceso en la evidencia: no aparece ninguna
comprobacion de sesion, ningun envoltorio de ruta protegida ni ninguna tabla
de permisos. El unico estado compartido entre pantallas es un contexto de
aplicacion sin identidad asociada [frontend/src/context/CanalContext.jsx:1].
En consecuencia, los roles del negocio no se pueden nombrar desde el codigo.

- Rol que ingresa una denuncia: [PENDIENTE]
- Rol que responde o tramita lo ingresado: [PENDIENTE]
- Rol que consulta el estado: [PENDIENTE]
- Cuantas personas son en cada rol: [PENDIENTE]

## Como lo resolvian antes

El repositorio no contiene ningun lector de planillas, ningun cargador de
archivos ni ninguna ruta de ingreso masivo: el extractor de endpoints del
analizador recorrio el repositorio completo y devolvio una lista vacia. Por
lo tanto no hay indicio de un procedimiento anterior en el codigo, ni a favor
ni en contra.

- Procedimiento anterior: [PENDIENTE]
- Quien lo ejecutaba y con que periodicidad: [PENDIENTE]
- Cuanto tardaba: [PENDIENTE]

## Que pasa si no se hace nada

[PENDIENTE] El codigo no responde esta pregunta y no se deduce de que el
sistema exista.

## Volumen

No hay base de datos en la evidencia: la extraccion de tablas devolvio una
lista vacia, y no hay indices, paginacion ni tipos de columna que permitan
estimar un orden de magnitud. El unico conjunto de datos presente en el
repositorio es un archivo de casos de ejemplo bajo un directorio de fixtures
[frontend/src/fixtures/casos.js], que por su ubicacion es material de apoyo
al desarrollo y no un dato de operacion. [INFERIDO]

- Cantidad de casos esperada por mes o por ano: [PENDIENTE]
- Cantidad de casos historicos que habria que cargar: [PENDIENTE]

## Quien decide que esta terminado

[PENDIENTE] Sin excepcion. El repositorio publica de forma automatica desde
un flujo de integracion [.github/workflows/deploy.yml] y lleva un registro de
versiones [frontend/VERSIONES.md], pero un mecanismo de publicacion no es una
persona que aprueba.

## Marco normativo

Un canal de denuncias suele estar sujeto a obligaciones de reserva de
identidad y de tratamiento de datos personales. Nada de eso esta escrito en
la evidencia y no corresponde afirmarlo aqui. [VERIFICAR] cual es la norma
aplicable, si la hay, y que exige.
