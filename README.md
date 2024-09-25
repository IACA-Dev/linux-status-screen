<h1 align="center">Linux Status Screen</h1>
<p align="center">Powered by </p>
<p align="center">
<a href="https://iaca-electronique.com">
<img alt="IACA Logo" style="" width="250px" src="https://www.iaca-electronique.com/img/logo.png">
</a>
</p>

* Vue 3
* Typescript
* Vuetify 3
* Node 18.18.2
* NPM 10.2.4

___

## 🚀 Quick start

```bash
docker run -p <port>:8080 --env-file .env --rm iacaelectronique/linux-status-screen
```

> See [.env.example](.env.example) for `.env`

## 🛠️ Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 📦️ Docker

### Build

```bash
docker build --tag linux-status-screen -f docker/Dockerfile .
```

### Run

```bash
docker run -p <port>:8080 --env-file .env --rm linux-status-screen
```

> See [.env.example](.env.example) for `.env`


## 🧑‍🤝‍🧑 Contributors

* Julien FAURE [✉️ julien.faure@iaca-electronique.com](mailto:julien.faure@iaca-electronique.com) (*IACA Electronique*)
