# Solucion, leida del codigo

## Advertencia sobre el alcance de este documento

La evidencia de este repositorio es escasa: son 24 archivos, todos del lado
del navegador, y el analizador no encontro ningun endpoint, ninguna tabla de
base de datos y ninguna dependencia de servidor. Se puede describir con
precision la forma de la interfaz y casi nada del comportamiento. Buena parte
de lo que sigue queda en [PENDIENTE], y eso tambien es informacion: dice que
lo que hay publicado hoy es la cara visible y que el resto no esta en este
repositorio.

## Que hace

Presenta una pantalla de entrada que ofrece las opciones disponibles
[frontend/src/pages/Inicio.jsx] y desde ella permite recorrer tres caminos
distintos: registrar una denuncia [frontend/src/pages/Denuncia.jsx],
registrar una consulta [frontend/src/pages/Consulta.jsx] y revisar el estado
de algo ya ingresado [frontend/src/pages/Seguimiento.jsx]. Los cuatro caminos
comparten un encabezado y una navegacion unica
[frontend/src/components/Layout.jsx:1], y se recorren sin recargar la pagina
gracias al enrutador declarado en el arranque [frontend/src/main.jsx:1] y
[frontend/src/App.jsx:1].

Los formularios se arman con un conjunto pequeno de piezas reutilizadas
—campo, boton y aviso— definidas en un unico lugar [frontend/src/lib/ui.jsx],
lo que indica que las tres pantallas de ingreso y consulta comparten la misma
manera de pedir y de responder al usuario. [INFERIDO] Lo que se escribe en
esas pantallas se guarda en un estado compartido en memoria del navegador
[frontend/src/context/CanalContext.jsx:1]; no hay en la evidencia ninguna
escritura hacia un servicio externo. [INFERIDO]

## Roles: quien ve que

Ninguno esta impuesto por el codigo. No hay guardas de ruta, no hay
comprobacion de sesion y no hay ninguna estructura de permisos en la
evidencia. Las cuatro pantallas son alcanzables por cualquiera que abra la
direccion publicada. [INFERIDO] [frontend/src/App.jsx:1]

Quien deberia poder ver cada pantalla, y en particular si el seguimiento de
una denuncia deberia estar restringido a quien la ingreso: [PENDIENTE]

## De donde salen los datos

- La unica fuente de datos presente en el repositorio es un archivo de casos
  de ejemplo bajo un directorio de fixtures [frontend/src/fixtures/casos.js].
  Que sea material de ejemplo y no operacion es [INFERIDO] por su ubicacion.
- El dueno de los datos reales, si existen en otro sistema: [PENDIENTE]
- Sistema de destino donde deberia quedar registrada una denuncia:
  [PENDIENTE]
- La unica variable de configuracion que el analizador detecto es la que fija
  la ruta base de publicacion [frontend/vite.config.js:7]. No hay ninguna
  variable que apunte a un servicio, una casilla de correo o una base de
  datos.

## Que NO hace

Estas ausencias si son afirmables, porque el analizador busco esas categorias
de forma exhaustiva en el repositorio completo y volvio vacio:

- No expone ni consume ningun endpoint: la lista de API de la evidencia esta
  vacia. [INFERIDO]
- No tiene base de datos propia: la lista de tablas de la evidencia esta
  vacia. [INFERIDO]
- No declara ninguna dependencia de servidor: el unico manifiesto del
  repositorio declara ocho paquetes, todos de construccion e interfaz
  [frontend/package.json:1].

De lo anterior se sigue que, tal como esta en el repositorio, lo que se
ingresa en un formulario no sobrevive al cierre del navegador. [INFERIDO]
Si en produccion hay un envio hacia algun destino, no esta en este codigo:
[PENDIENTE]

## Como se publica

Hay dos flujos de integracion continua en el repositorio
[.github/workflows/deploy.yml] y [.github/workflows/readme.yml], y una nota
de configuracion del alojamiento [CONFIG_GITHUB_PAGES.md]. La ruta base
parametrizable [frontend/vite.config.js:7] es coherente con una publicacion
bajo un subdirectorio. [INFERIDO]

Quien administra ese alojamiento y bajo que dominio queda visible:
[PENDIENTE]

## Iteraciones

El repositorio lleva un archivo propio de versiones [frontend/VERSIONES.md].
Su contenido no esta en la evidencia extraida, asi que el numero de
iteraciones y sus fechas son [PENDIENTE]. El README del repositorio se reduce
al nombre y a un codigo corto [README.md]; no describe el sistema.
