This is a test project to demonstrate automatic generation of OpenAPI 3 specs with

- nestjs
- nestjs/swagger - to generate the API spec based off classes
- class-validator - integrates nicely with nest + nestjs/swagger to validate our specs
- redoc - to present the swagger spec in a nice way. Combines HTML and swagger to provided complete documentation


How to run

- `npm i`
- `npm run start`
- view swagger docs at http://localhost:3000/api
- view redoc version by opening `./redoc.html` in your browser ( requires a cors plugin to work)