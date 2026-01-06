# ---------- Base Build Stage ----------
FROM node:22-alpine AS base
WORKDIR /app
COPY . .
RUN npm install

# ---------- Frontend Stage ----------
FROM base AS frontend
RUN npm run build

FROM nginx:alpine AS nginx
COPY --from=frontend /app/apps/frontend/dist /usr/share/nginx/html
COPY infra/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# ---------- Backend Stage ----------
FROM base AS backend
RUN rm -rf apps/frontend && rm -rf node_modules && \
    npm install --workspace=apps/backend --omit=dev --prefer-offline --no-audit
ENV NODE_ENV=production
EXPOSE 4000
USER node
CMD ["npm", "start"]