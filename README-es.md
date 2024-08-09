# Sistema de Gestión de Electrodomésticos

Este proyecto es una API REST construida con Node.js y Express que gestiona un inventario de electrodomésticos. Permite consultar la disponibilidad de un electrodoméstico y actualizar la cantidad en inventario.

## Características

- **Consultar un electrodoméstico**: Obtiene los detalles de un electrodoméstico por su ID, incluyendo su disponibilidad.
- **Actualizar un electrodoméstico**: Permite actualizar la cantidad de unidades disponibles de un electrodoméstico específico.

## Requisitos

- Node.js
- MySQL
- npm

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/gestion-electrodomesticos.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd gestion-electrodomesticos
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Configura la base de datos MySQL:

   - Crea una base de datos llamada `almacen`.
   - Configura las credenciales de la base de datos en el archivo de conexión (`conexion.js`).

5. Inicia el servidor:

   ```bash
   npm start
   ```

   El servidor estará disponible en `http://127.0.0.1:3000/`.

## Endpoints

### 1. Obtener un electrodoméstico por ID

- **URL**: `/electrodomestico/:id`
- **Método**: `GET`
- **Descripción**: Obtiene los detalles de un electrodoméstico y su disponibilidad.
- **Respuesta**:
  - `200 OK`: Información del electrodoméstico.
  - `404 Not Found`: El electrodoméstico no se encontró.
  - `400 Bad Request`: Error al obtener los datos.

### 2. Actualizar la cantidad de un electrodoméstico

- **URL**: `/electrodomestico/:id`
- **Método**: `PUT`
- **Descripción**: Actualiza la cantidad de unidades de un electrodoméstico.
- **Cuerpo**:
  - `cantidad` (número): Nueva cantidad de unidades.
- **Respuesta**:
  - `200 OK`: El electrodoméstico se actualizó correctamente.
  - `404 Not Found`: El electrodoméstico no se encontró.
  - `400 Bad Request`: Error al actualizar los datos.

## Estructura del Proyecto

```bash
.
├── app.js                # Archivo principal que inicia el servidor
├── conexion.js           # Configuración de la conexión a la base de datos
├── routes
│   └── electrodomestico.js  # Rutas para la gestión de electrodomésticos
└── package.json          # Dependencias y scripts del proyecto
```

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución de JavaScript.
- **Express**: Framework para la construcción de aplicaciones web.
- **MySQL**: Sistema de gestión de bases de datos relacional.
- **Body-Parser**: Middleware para analizar el cuerpo de las solicitudes.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un *issue* para discutir cambios importantes antes de enviar un *pull request*.

## Licencia

Este proyecto está licenciado bajo la MIT License.
