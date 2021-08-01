
# Links  app
![enter image description here](https://links-app-2r59xcoob-cquin22.vercel.app/assets/link-logo.png)  
Links app version `0.0.5` is a web application that is responsible for managing the creation of new links for new users


## Technical info

- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.4.
- This project manages its forms through the reactive forms of the angular core
- For handling translations use **@ngx-translate**

### Moudules
The application works with modules with lazy loading, displaying the following modules:

- **auth** --> This module is in charge of all the authorization and authentication of the users
- **dashboard** --> This module is private and is in charge of managing user links
- **shared** --> This is a shared module, for commonly used components and services


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Linter

Run `npm run lint` to verify eslint rules into code, and run  `npm run fix` to format code.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Jest](https://jestjs.io/).


## To Do fixes

- Because the api services to obtain **(GET)** create **(POST)** and delete **(DELETE)** the links were returning a badly formatted JSON, in the `link.service.ts` of the **dashboard** **module**, the responses are mocked, this behavior must be adjusted once the api works correctly
- Add more validations to the forms, to improve the user experience
- Add restore password
- Improve the interceptor for better error control, and sending headers
