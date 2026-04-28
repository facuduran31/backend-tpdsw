# Propuesta TP DSW

## Grupo

### Integrantes

-   50204 - Duran, Facundo Nicolás
-   49853 - Gianotto, Leandro (abandonó)
-   49438 - Simbel, Santino (abandonó)

### Repositorios

-   [frontend app](https://github.com/facuduran31/frontend-tpdsw.git)
-   [backend app](https://github.com/facuduran31/backend-tpdsw.git)

## Tema

### Descripción

Se desarrollará un sistema de información utilizada por docentes para
reservar un laboratorio un día específico o por cuatrimestre, además de
materiales adicionales como notebooks, proyectores, etc. Por otro lado,
los encargados de laboratorios gestionan las solicitudes de reservas, y
las características de los laboratorios con sus respectivas computadoras
y máquinas virtuales.

### Modelo

`<img width="891" height="967" alt="DER drawio" src="https://github.com/user-attachments/assets/27cece2f-6046-4f97-87c8-f136eecf1385" />`{=html}

## Alcance Funcional

### Alcance Mínimo


| Requerimiento | Detalle |
| :--- | :--- |
| **CRUD simple** | 1. CRUD Usuario<br>{=html}2. CRUD Laboratorio<br>{=html}3. CRUD Máquina Virtual<br>{=html} |
| **CRUD dependiente** | 1. CRUD Computadora {depende de} CRUD Laboratorio |
| **Listado + detalle** | 1. Listado de requerimientos de un docente por estado. => detalle CRUD Requerimientos.<br>{=html} |
| **CUU/Epic** | 1. Registrar requerimiento.<br>{=html}2. Atender requerimiento. |


### Alcance Adicional Voluntario

Adicionales para Aprobación 

 | Requerimiento | Detalle |
| :--- | :--- |
| **CRUD SIMPLE** | 1. Cancelar reserva
|**CUU/Epic** |1. Cancelar reserva. |
|**Otros** |1. Notificación de estado final de reserva vía mail.|

## EJECUCIÓN

### 1. Requisitos Previos

-   Node.js (v18 o superior recomendado)
-   Angular CLI
-   MySQL Server (v8 recomendado)
-   Git

### 2. Clonar los repositorios

``` bash
git clone https://github.com/facuduran31/backend-tpdsw.git
git clone https://github.com/facuduran31/frontend-tpdsw.git
```

### 3. Configuración de la Base de Datos

Ejecutar el archivo SQL provisto:

``` sql
SOURCE /ruta/al/archivo/encargados.sql;
```

Esto crea la base de datos `encargados` con estructura y datos.

### 4. Backend

``` bash
cd backend-tpdsw
npm install
npm start
```

Configurar variables: DB_HOST=localhost\
DB_USER=root\
DB_PASSWORD=tu_password\
DB_NAME=encargados\
PORT=3000\
JWT_SECRET=secret

### 5. Frontend

``` bash
cd frontend-tpdsw
npm install
ng serve
```

Disponible en http://localhost:4200

### 6. Usuarios de prueba

Docente: adrianmeca@gmail.com / 123456\
Encargado: facundoduran31@gmail.com / 123456

### 7. Consideraciones

-   Autenticación con JWT
-   API REST
-   Datos iniciales incluidos
