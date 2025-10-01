# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
```mermaid
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
