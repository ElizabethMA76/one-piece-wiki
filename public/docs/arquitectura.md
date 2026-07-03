# Arquitectura

## Objetivo

Definir la estructura general de la aplicación, la organización de componentes y el flujo de información entre las diferentes capas del proyecto.

La arquitectura busca facilitar el mantenimiento, la escalabilidad y la reutilización del código conforme la aplicación incorpore nuevas funcionalidades.

---

# Arquitectura General

La aplicación seguirá una arquitectura basada en componentes utilizando React.

Cada componente tendrá una única responsabilidad y será reutilizable siempre que sea posible.

```
Usuario
      │
      ▼
React (Frontend)
      │
      ▼
Componentes
      │
      ▼
Estado (State)
      │
      ▼
Servicios (API)
      │
      ▼
Base de Datos
```

---

# Estructura del proyecto

```
one-piece-wiki/
│
├── public/
│
├── docs/
│   ├── problema.md
│   ├── usuarios.md
│   ├── research.md
│   ├── benchmark.md
│   ├── arquitectura.md
│   ├── decisiones.md
│   ├── roadmap.md
│   └── bitacora.md
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── services/
│   ├── data/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── README.md
```

---

# Componentes actuales

Actualmente la aplicación está compuesta por los siguientes componentes:

- Navbar
- CharacterCard
- CharacterDetail

Cada componente encapsula una responsabilidad específica.

---

# Flujo de datos

Actualmente el flujo de información es el siguiente:

```
characters.json
        │
        ▼
App.jsx
        │
        ▼
characters.map()
        │
        ▼
CharacterCard
        │
Usuario selecciona personaje
        │
        ▼
useState(selectedCharacter)
        │
        ▼
CharacterDetail
```

---

# Escalabilidad

Conforme el proyecto crezca se incorporarán nuevas capas.

```
Frontend
        │
        ▼
API REST
        │
        ▼
MongoDB
```

En ese momento los datos dejarán de obtenerse desde archivos JSON y serán consumidos mediante peticiones HTTP.

---

# Principios utilizados

Durante el desarrollo se seguirán los siguientes principios:

- Componentes reutilizables.
- Responsabilidad única (Single Responsibility Principle).
- Separación entre datos y presentación.
- Organización modular.
- Escalabilidad.
- Código mantenible.

---

# Tecnologías

Frontend

- React
- Vite
- JavaScript
- CSS

Backend (planeado)

- Node.js
- Express

Base de datos (planeada)

- MongoDB

Control de versiones

- Git
- GitHub