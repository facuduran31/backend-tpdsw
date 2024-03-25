# Propuesta TP DSW

## Grupo
### Integrantes
* 50204 - Duran, Facundo Nicolás
* 49853 - Gianotto, Leandro
* 49438 - Simbel, Santino

### Repositorios
* [frontend app](https://github.com/facuduran31/frontend-tpdsw.git)
* [backend app](https://github.com/facuduran31/backend-tpdsw.git)

## Tema
### Descripción
Se desarrollará un sistema de información utilizada por docentes para reservar un laboratorio un día específico o por cuatrimestre, además de materiales adicionales como notebooks, proyectores, etc. Por otro lado, los encargados de laboratorios gestionan las solicitudes de reservas, y las características de los laboratorios con sus respectivas computadoras y máquinas virtuales.

### Modelo
![imagen del modelo](https://imgur.com/soer9xz)



## Alcance Funcional 

### Alcance Mínimo

Regularidad:
|Requerimiento|Detalle|
|:-|:-|
|CRUD simple|1. CRUD Usuario<br>2. CRUD Laboratorio<br>3. CRUD Máquina Virtual<br>|
|CRUD dependiente|1. CRUD Computadora {depende de} CRUD Laboratorio|
|Listado<br>+<br>detalle| 1. Listado de requerimientos de un docente por estado. => detalle CRUD Requerimientos.<br>|
|CUU/Epic|1. Registrar requerimiento.<br>2. Atender requerimiento.|


### Alcance Adicional Voluntario

Adicionales para Aprobación
|Requerimiento|Detalle|
|:-|:-|
|CUU/Epic|1. Cancelar reserva.|
|Otros|1. Notificación de estado final de reserva vía mail.|
