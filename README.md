# SmartHomeAPI

## Description
SmartHomeAPI is a RESTful API designed to manage smart home devices. Utilizing Hexagonal Architecture, it is built using technologies such as NestJS, MongoDB, TypeScript, and Docker.

## Features
- Add new smart home devices
- Retrieve a list of all smart home devices
- Track the status of each device

## Prerequisites
- Node.js
- Nest.js
- Typescript
- Docker
- MongoDB

## Installation

### Clone the repository
```bash
git clone git@github.com:GabrielFerraroDev/smartHomeAPI.git
```

### Install Dependencies
```bash
cd smartHomeAPI
npm install
```

### Set up Environment Variables
Copy the `.env.example` file to `.env.development` or `.env.production` and fill in the necessary environment variables.

### Run the Containers
```bash
docker-compose up -d
```
### Run the Application
To run the application in development mode:
```bash
npm run start:dev
```

To run the application in production mode:
```bash
npm run start:prod
```
### License
This project is licensed under the MIT License.

