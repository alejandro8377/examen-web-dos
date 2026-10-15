# Archivo Abierto

**Estudiante:** Diego Alejandro García Monsalve  
**Nombre de la solución:** `diego-alejandro-garcia-monsalve`

Catálogo bibliográfico sobre arquitectura, diseño y cultura visual. La aplicación está construida con React y organiza sus vistas, componentes, rutas, estilos y datos en módulos independientes.

## Requisitos

- Node.js 20.19+ o 22.12+
- npm

## Instalación y ejecución

```sh
npm ci
npm run dev
```

Validación de producción y estilo de código:

```sh
npm run build
npm run lint
```

## Vistas

- `/`: presentación de la colección, métricas calculadas desde los datos y lecturas destacadas.
- `/catalogo`: búsqueda por título, autor, editorial o descripción, y filtro por tema.
- `/contacto`: campos controlados de forma independiente y botón para limpiarlos.

El formulario es una demostración local: no envía información ni llama a servicios externos.

## Estructura

```text
src/
├── components/
├── data/
├── pages/
├── routes/
├── styles/
├── App.jsx
└── main.jsx
```

La colección de ejemplo vive en `src/data/libros.js` como un arreglo JavaScript. La navegación se configura con `createBrowserRouter`, un layout compartido y `Outlet`.
