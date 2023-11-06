# Status API

## Description

- Simple API endpoint that you can call with a GET method. The API will return a status of an hypothetical long running job as either pending or success.

## Technologies

- React.JS
- Styled Components
- Axios
- Next.js

## API Endpoints
 - `GET` => /recruitment

**Response**
```
    {
    "status": "Pending"
    },
    {
    "status": "Success"
    }
```


## Installation

- Clone this repo.
- Run `yarn install` to install dependencies.
- Provide `Puclic API Key` for client in .env.example file.
- Run `yarn dev` to start the development server.

## Production

- Run `yarn build` to build the project.
- Run `yarn start` to start the production server.

## Folder Structure

```
📦 
├─ src
│  ├─ api
│  │  ├─ axios.js
│  │  └─ services
│  │     └─ Status.js
│  ├─ app
│  │  ├─ layout.js
│  │  └─ page.jsx
│  ├─ components
│  │  └─ Status
│  │     ├─ Status.jsx
│  │     └─ styles.js
│  └─ global.css
```

## License

[MIT](https://choosealicense.com/licenses/mit/)