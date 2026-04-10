# 🚀 TaskFlow

Aplicación web para la gestión de proyectos y tareas desarrollada con **Ionic + Angular + Firebase**.

---

## 📌 Descripción

**TaskFlow** es una plataforma que permite administrar proyectos y tareas dentro de equipos de trabajo, diferenciando dos tipos de usuario:

* **Líder de proyecto**

  * Gestiona proyectos
  * Crea y asigna tareas
* **Colaborador**

  * Visualiza tareas asignadas
  * Marca tareas como completadas
  * Administra su perfil

---

## 🧰 Tecnologías

* Angular (Standalone Components)
* Ionic (UI híbrida)
* Firebase:

  * Authentication
  * Firestore Database
  * Storage
* RxJS

---

## ⚙️ Requisitos previos

Asegúrate de tener instalado lo siguiente:

### 1. Node.js

Descargar desde: https://nodejs.org/

Verificar:

```bash
node -v
npm -v
```

---

### 2. Ionic CLI

```bash
npm install -g @ionic/cli
```

Verificar:

```bash
ionic -v
```

---

### 3. Angular CLI (opcional)

```bash
npm install -g @angular/cli
```

---

### 4. Git

https://git-scm.com/

Verificar:

```bash
git --version
```

---

## 🔥 Configuración de Firebase

### 1. Crear proyecto

1. Ir a https://console.firebase.google.com/
2. Crear nuevo proyecto
3. Nombre sugerido: `TaskFlow`

---

### 2. Registrar aplicación web

1. Dentro del proyecto → icono `</>`
2. Nombre: `taskflow-web`
3. Crear app

---

### 3. Configuración Firebase

Copia el objeto:

```ts
const firebaseConfig = {
  apiKey: "XXXX",
  authDomain: "XXXX",
  projectId: "XXXX",
  storageBucket: "XXXX",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};
```

---

### 4. Activar Authentication

Ir a:
**Authentication → Sign-in method**

Habilitar:

* Email/Password
* Google

---

### 5. Configurar Firestore

1. Ir a **Firestore Database**
2. Crear base de datos
3. Seleccionar **Test mode**

---

### 6. Configurar Storage

1. Ir a **Storage**
2. Activar en modo test

---

## 📦 Instalación del proyecto

### 1. Clonar repositorio

```bash
git clone https://github.com/TU-USUARIO/taskflow.git
cd taskflow
```

---

### 2. Instalar dependencias

```bash
npm install
```

---

### 3. Configurar variables de entorno

Editar archivo:

```
src/environments/environment.ts
```

Reemplazar con tu configuración:

```ts
export const environment = {
  firebaseConfig: {
    apiKey: "TU_API_KEY",
    authDomain: "TU_DOMINIO",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_BUCKET",
    messagingSenderId: "TU_ID",
    appId: "TU_APP_ID"
  }
};
```
## ▶️ Ejecución

```bash
ionic serve
```

Acceder en:

```
http://localhost:8100
```

---

## 👤 Uso de la aplicación

### Registro

* Acceder a `/register`
* Completar datos
* Seleccionar rol

---

### Inicio de sesión

* Email y contraseña
* Google

---

### Líder (Proyectos)

* Crear proyectos
* Editar proyectos
* Eliminar proyectos
* Crear tareas
* Asignar tareas

---

### Colaborador (Tareas)

* Ver tareas asignadas
* Marcar tareas como completadas
* Subir foto de perfil

---

## 🧪 Modelo de datos (Firestore)

### usuarios

```json
{
  "uid": "string",
  "nombre": "string",
  "email": "string",
  "rol": "lider | colaborador",
  "fotoPerfil": "string"
}
```

---

### proyectos

```json
{
  "nombre": "string",
  "cliente": "string",
  "liderUid": "string",
  "creadoEn": "date"
}
```

---

### tareas

```json
{
  "nombre": "string",
  "descripcion": "string",
  "asignadoUid": "string",
  "proyectoId": "string",
  "completada": "boolean"
}
```
