# Express + React Monorepo Template

An opinionated monorepo template for building and running both development and production environments using **Express** (backend API) and **React** (frontend).

* **Development** runs locally on `localhost`
* **Production** runs on an SSL-secured domain

Tested and verified with **Node.js 22**.

## Local Development

Run `npm install` from the root folder to install all package dependencies, then start by running `npm run dev`.

To install a new dependency, cd inside the relevant packages folder first.

Copy `.env.default` files to `.env` and run MySQL through `docker compose up -d`.

## Production

Replace `app.my-project.com` with the correct domain in `docker-compose.prod.yml` for SSL, then run `docker compose -f docker-compose.prod.yml up -d --build`.