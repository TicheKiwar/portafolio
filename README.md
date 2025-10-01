# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
```mermaid
architecture-beta

group client(cloud)[client]
    service browser(server) [Navigate] in client


group backend(cloud)[Servidor]
    service app_server (server) [Web Server] in backend
    service db (database) [Data Base] in backend
    service file_Storage (disk) [Storage] in backend

browser:R -- L: app_server
app_server:T -- B: db
app_server:R -- L: file_Storage


---
Config:
    sankey:
        showValues: true
---

sankey-beta

IT, Develop, 120
IT, Documentation, 40
IT, Meetings, 30
IT, Test, 60

Marketing, Redes Sociales, 80
Marketing, Companias digitales, 80
Marketing, Investigacion de mercado, 40

gitGraph
    commit id:'Init commit'

    branch develop
    checkout main
    commit

    branch bugfix
    commit
    checkout main
    merge bugfix
    checkout develop
    commit
    checkout main
    commit
    merge develop
    commit


graph TD;
A((Inicio)) --> B[Abrir Programa];
B --> C{
    Quiere guardar cambios
}
C --Si--> D[Guardar Cambio? ];
C --No--> E[Cerrar Sin Guardar]
D --> F((Finalizar))
E --> F

