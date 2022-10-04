# Bloc Notes

This project consists in my personal bloc notes.

## Technologies

### Frontend

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=000)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=Tailwind%20CSS&logoColor=fff)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=fff)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

### Backend

![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=fff)
![NodeJS](https://img.shields.io/badge/NodeJS-33993?&style=for-the-badge&logo=Node.js&logoColor=fff)
![ExpressJS](https://img.shields.io/badge/ExpressJS-000?style=for-the-badge&logo=Express&logoColor=fff)
![Railway](https://img.shields.io/badge/Railway-0B0D0E?style=for-the-badge&logo=Railway&logoColor=fff)

### Other

![GIT](https://img.shields.io/badge/GIT-F05032?style=for-the-badge&logo=Git&logoColor=fff)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=000)
![ESLint](https://img.shields.io/badge/EsLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=fff)


## Structure

```
PROJECT_ROOT
├── Backend                 # Backend projecf
│   └── src                 # Folder with the data
│       ├── controllers     # Controllers files
│       ├── database        # Files with the DB connection and schemas
│       ├── services        # Services files
│       ├── tests           # Tests files
│       └── v1
│           └── routes      # Backend routes v1
└── frontend
    ├── public              # Vite.svg
    └── src                 
        ├── assets          # React.svg
        ├── components      # Folder with all the components
        ├── context         # Folder with the context file
        ├── hooks           # All the hooks of the project
        ├── services        # Services that connect with the backend
        └── pages           # Pages of the project
```


## Development

If you want to develop this project, You need to follow this steps:

    * Clone the repositorie
    * Go to the backend folder and:
        * Install the dependencies
            * npm i
        * Copy the .env.example in the .env and complete with the database information. (Recommendation: Use a mongo container in Docker)
            * If you use a mongo container, use NODE_ENV=dev
            * If you use for example MongoDB Atlas, use NODE_ENV=prod
        * Use one of this commands
            * npm start -> Better command for production or if you don't touch the backend
            * npm run dev -> If you go to modify the backend, use this command
    * Go to the frontend folder and:
        * Install the dependencies
            * yarn install
        * Copy the .env.example in your .env and complete with the url of the backend
        * Use npm run dev for start with the development


## Preview

### Dark Mode

![Interface dark mode](./images/dark-mode.png)

### Light Mode

![Interface light mode](./images/light-mode.png)

## License

MIT License.

You can create your own bloc notes application by forking this project with this conditions:

* Add a link to my [portfolio](https://arnaizdev.com)

Check out [License](./License.md) for more detail.


## Future features

- Create a new field in the Note schema (status: {"active" - "trash"}) for delete a Note but send in a trash. In trash you can delete permanently.

